import express from 'express';
import { fileURLToPath } from 'url'
import path , { dirname } from 'path'
import bodyParser from 'body-parser';
const __filename = fileURLToPath(import.meta.url)

const _dir = path.join(dirname(__filename),'public')
var app = express();
var msqq = []

app.use(express.static(_dir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dir,'welcome.html'));
})

app.get('/msngr',(req,res)=>{
    res.sendFile(path.join(_dir,'messenger.html'));
})

app.get('/getall',(req,res)=>{
    res.send(msqq);
})
app.post('/send',(req,res)=>{
    msqq.push(req.body.msg);
    res.redirect('/msngr');
})

app.listen(9000,()=>{
    console.log("Server is listening at port 9000");
})