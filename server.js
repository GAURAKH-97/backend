const express =require('express')
const app=express()
app.use(express.json())

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("<h1>welcome to home page</h1><p>jjj</p>")
    
})
app.set("view engine", "ejs");

app.get("/render", (req, res) => {
  res.render("index", { title: req.ip, user: "Toxic" });
  console.log("hello world")
  console.log(req.ip)
});



app.listen(PORT,()=>{
    console.log("server is running at http://localhost:3000")
})
