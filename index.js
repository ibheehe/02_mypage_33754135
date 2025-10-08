var http = require("http"); 
const port = 8000; 
// comment for updating ye
http.createServer(function(req, res) { 
     res.writeHead(200, { "Content-Type": "text/html" });
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Muhammad Ibrahim Asif</title>
</head>
<body>
    <h1 style="color: red;">Muhammad Ibrahim Asif</h1> 
    <h2>Computer Science Student year 3</h2>
    <p>I Love playing soulsborne games and souls like games. I have a pet cat named Chairman Meow.</p>
    <p>This is the first labwork of the class. and i think i did pretty good.</p>
</body>
</html>`);

    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 