const express =require('express')
const app=express()
app.use(express.json())

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("<h1>welcome to home page</h1><p>jjj</p>")
    
})
app.set("view engine", "ejs");

app.get("/render", (req, res) => {
  const data={
        "activities":{
        "today_timespent":190,
        "today_focus":120,
        "distraction_website":{
            "Tiktok":8,
            "Youtube":2,
            "Instagram":3
        },
        "past7days":{
            "19 sept":{distraction:3,focus:1},
            "18 sept":{distraction:6,focus:6},
            "17 sept":{distraction:7,focus:13},
            "16 sept":{distraction:4,focus:180},
            "15 sept":{distraction:2,focus:190},
            "14 sept":{distraction:9,focus:3},
            "13 sept":{distraction:7,focus:6}
        }
    },
        "trackingEnabled":true
    }
    
    res.json(data)
});



app.listen(PORT,()=>{
    console.log("server is running at http://localhost:3000")
})
