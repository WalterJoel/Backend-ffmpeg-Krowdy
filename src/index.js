import { spawn,exec } from 'child_process'
import restify from 'restify';
import prompt from 'prompt';


const child = exec('curl -s -H User-agent: ´your bot 0.1´ https://www.reddit.com/r/TikTokCringe/top.json?limit=13 | jq . |  grep dest | grep -Eoh "https://v.redd.it/.{13}"' ) 


async function ssd(){
    child.stdout.on('data', (data) => {
        console.log('data',typeof data);
        var nombre = data.match(/[^\r\n]+/g);
        downloadVideo(nombre)
        return nombre;
        //createListOfVideosToReel();
    });
}
async function downloadVideo(data){
    //let ab =vectorL[0].toString();
    let cont = 0
    console.log('len',data.length)
    while(cont<data.length){
        let a =   exec(`youtube-dl ${data[cont]}`);
        a.stdout.on('data', (data) => {
            console.log('inserting ',data);
        });
        cont+=1;
    }
}
//Esta funcion permite crear la lista de videos para crear el Reel final
async function createListOfVideosToReel()
{
    let a =   exec('(for %i in (*.mp4) do @echo file %i) > mylist.txt');
        a.stdout.on('data', (data) => {
            console.log('inserting txtr ',data);
        });
}
async function createReel(){
    let a =   exec('ffmpeg -f concat -i mylist.txt final.mp4 -y');
    a.stdout.on('data', (data) => {
        console.log('inserting txtr ',data);
    });
}
async function mainS(){
    //Servidor
    var server = restify.createServer();

    server.get('/getVideos', async function(req, res, next) {
        await ssd();
        res.send(" Extrayendo Videos");

    });
    //lISTA DE VIDEOS TXT
    server.get('/getListOfVideos', async function(req, res, next) {
        res.send("TXT - Listando los videos ");
        await createListOfVideosToReel();
        //return await ssd();
    });

    server.get('/createReel', async function(req, res, next) {
        res.send("Creando el Reel Final, ");
        await createReel();
    });
    server.get('/videoFinal', async function(req, res, next) {
        res.write("<html> <body> <video width='900' controls>   <source src='https://localhost:8080/final.mp4' type='video/mp4'>Your browser does not support HTML video</video></body></html>");
        await createReel();
    });
    server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
    });
}


mainS()
export default child;