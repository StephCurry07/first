const exp = require("express");
const app = exp()
app.get("/",function(request,res){
    //console.log(request)
    res.send("<h1>yo</h1>")
})
app.get("/options",function(req,res){
    res.send("<button>first</button>")
})
app.get("/about",function(req,res){
    res.send("Contact at : xxx3195xxx");
});
app.get("/hobbies",function(req,res){
    res.send("<ul><li>coffee</li><li>Basketball</li><li>Astronomy</li></ul>");
})
app.listen(4000,function(){
    console.log("Server started on port 4000");
})
