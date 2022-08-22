import { spawn,exec } from 'child_process'
//const argsFfmpeg = ['-s','-H','User-agent: ´your bot 0.1´',"https://www.reddit.com/r/TikTokCringe/top.json"]
const argsFfmpeg = ['-- help',]

const opts = { shell: true }
const child = exec('curl -s -H User-agent: ´your bot 0.1´ https://www.reddit.com/r/TikTokCringe/top.json?limit=10 | jq . |  grep dest | grep -Eoh "https://v.redd.it/.{13}"' ) 
let vectorLinks=[];

async function ssd(){
    child.stdout.on('data', (data) => {
        console.log('data',typeof data);
        vectorLinks.push(data);
        var nombre = data.match(/[^\r\n]+/g);
        downloadVideo(nombre)
  
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
async function mainS(){
    await ssd();
    /*const a =   exec('youtube-dl https://v.redd.it/f7boez8t56j91');
    a.stdout.on('data', (data) => {
        console.log('inserting ',data);
    });*/

}
mainS()
export default child;