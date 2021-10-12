const express = require("express");
const app=express();
const path=require("path");



app.listen(process.env.PORT || 4000, () => 
    console.log("esto fue exitoso")
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"))
});
app.get("/ingresa", (req, res) => {
    res.sendFile(path.join(__dirname, "views/ingresa.html"))
});
app.post("/register", (req, res) => {
    res.redirect("/")
});


app.use(express.static("public"));