const express = require("express")
const app = express();
const path = require("path");

const filePath = path.join(__dirname, "/index.html");
app.use(express.static(__dirname));

app.get("/", (req,res) => {
    res.sendFile(filePath, (err) =>{
        if(err) throw err;
    })
})

app.listen(5000, () => {
    console.log("Running on port 5000");
})