require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
  
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/fibonacci/:n", (req, res) => {
  if(req.params.n){
    const n = parseInt(req.params.n);
    let initFibo = [0,1];
    while(initFibo.length<=n){
      initFibo.push(initFibo[initFibo.length-1]+initFibo[initFibo.length-2]);
    }
    res.send(initFibo[n].toString());
  }else{
    res.send("Variable n not received.");
  }
})
  
app.listen(process.env.API_PORT, function() {
    console.log("Server started on port " + process.env.API_PORT);
});