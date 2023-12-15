const express = require("express")
const app = express();

const server = app.listen(3001, ()=>{
    console.log('localhost : 3001 서버시작')
})

app.get('/server/users/:type', async (req, res)=>{
    let {type} = req.params

    res.send(type + '나이스');
    res.status(404).send('disconnect');
    
})