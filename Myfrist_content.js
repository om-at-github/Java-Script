
var http=request('http')
var server=http.createServer(function(request,res){
    res.writeHead(200,{"content Type":"text/html"});
    res.write('<html><body><h1>html</h1><b>My frist html content</b></body></html>' );
    res.end();

}).listen(8000);