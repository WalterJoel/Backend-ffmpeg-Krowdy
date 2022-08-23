import restify from 'restify';

    var server = restify.createServer();
    // Return the received name back to the client
    server.get('/echo/:name', async function(req, res, next) {
        res.send("Hello, " + req.params.name);
        return next();
    });

    server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
    });
    return server;


    export {
        server,
      };