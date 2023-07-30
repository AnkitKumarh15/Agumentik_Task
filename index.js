const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/Motrew', (req,res)=>{
    res.send('Motrew Real Estate');
});


app.listen(3000, ()=>{
    console.log("App is listening on port 3000");
});