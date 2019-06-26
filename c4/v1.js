var http = require(`http`);

var server = http.createServer(function (req, res){
    console.log(req)
    // res.write(`Hello World`);
    var URL = req.url.split(`/`);
    switch(URL[1]){
        case `add` :
            if(URL.length > 2)
            for(let i = 2; i < URL.length; i++){
                output+=parseInt(URL[i]);
            }
            break;

            break
    }
}) ;
server.listen(8080,(err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(`Server started succesfully`);
})