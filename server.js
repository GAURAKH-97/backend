const express =require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("<h1>welcome to home page</h1><p>jjj</p>")
    
})
app.set("view engine", "ejs");

app.get("/render", (req, res) => {
  res.render("index", { title: "My Page", user: "Toxic" });
});



app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})
