const http = require("http");
const express = require('express');
const path = require("path");
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const cors = require('cors');
require("dotenv").config();
const dotenv = require('dotenv')
dotenv.config()
const fs = require('fs')
let corsOptions = {
  origin: '*',
  // credentials: true
}
//npm install express 
//npm install cors
//npm install body-parser
//npm install express @google/generative-ai fs
//> npm install @google/generative-ai
//npm i dotenv @google/generative-ai

let jsonfile = [
 {
  id :'admin',
  password : '1111',
  name : "yong",
  todolist : [],
  cartlist:[]
 },

]
let todolist = [
  {
    id: 'randomnum0',
    text : '여기에 내용기입하세요',
    title:'',
    create:'',
    done : false,
  }
]
let cartlist =[]
const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "docs")));
app.use(express.json());

app.get("/*", (req, res) => {
  res.set({
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "docs", "index.html"));
  });

// app.get('/', async (req, res) => {
//   // let {type} = req.params
//   if (res.status(200)) {
//     return res.send('<h1>제미니 에서 왔습니다.</h1>');
//   } else {
//     res.status(404).send('disconnect');
//   }
// })
//   let userinfo={

//   }

// newtodolist 유저 아이디속에 데이터 넣고 빼는거로 다시 짜보자
// 배열.splice(index,잘라낼양,잘라낸곳에 넣을 데이터) 이렇게 수정하면 될듯? 
app.post('/todo', async (req, res) => {
  if(req.body.userid && !req.body.id){
    
    userinfo=jsonfile.filter((item,idx)=>{ return item.id == req.body.userid})[0]
    console.log(userinfo,'재접속시 내용받아오는지')
    // console.log(jsonfile.filter((item,idx)=>{ return item.id == req.body.userid})[0],'스프레드')
    //  console.log(userinfo,'재접속시 내용받아오는지')
     res.send(userinfo.todolist)
    }
  else if(req.body?.mode == 'add' ){
    // 필수값으로 userid 와 id를 보내야함      
    let list = {
      id: req.body.id,
      text : req.body.text,
      title:req.body.title,
      create : req.body.create,
      done : req.body.done
    }
    userinfo.todolist.unshift(list)
    jsonfile.forEach((item, idx)=>{ 
      if(item.id == req.body.userid){
        jsonfile.splice(idx, 1, userinfo)
      }  })
      console.log(jsonfile,'내용추가')
    res.send(userinfo.todolist)
  }else if(req.body?.mode=='del'){
      userinfo.todolist.forEach((item,idex,todo)=>{
      if(item.id == req.body.id){
        userinfo.todolist=userinfo.todolist.filter((item,idx)=>{return  idx != idex})
        // console.log(userinfo.todolist)
        jsonfile.forEach((item, idx)=>{ 
          if(item.id == req.body.userid){
          jsonfile.splice(idx, 1, userinfo)
          }  })
        }
      })
      res.send(userinfo.todolist)
  }else if( req.body?.mode == 'update' ){
    userinfo.todolist.forEach((item)=>{
      if(item.id == req.body.id){
        item.done = !item.done
        item.create = req.body.create
        jsonfile.forEach((item, idx)=>{ 
          if(item.id == req.body.userid){
          jsonfile.splice(idx, 1, userinfo)
          }  })
          // console.log(todolist)
        }
      })
      res.send(userinfo.todolist)
    }
})
app.post('/cart', async (req, res) => {
  if(req.body.userid){
    userinfo=jsonfile.filter((item,idx)=>{ return item.id == req.body.userid})[0]
    // console.log(jsonfile.filter((item,idx)=>{ return item.id == req.body.userid})[0],'스프레드')
     console.log(userinfo,'재접속시 내용받아오는지')
     res.send(userinfo.cartlist)
    }else if(req.body?.mode == 'add' ){
      let list = {
        id: req.body.id,
        price : req.body.price,
        src : req.body.src,
        Quantity : req.body.Quantity,
        title : req.body.title,
      }
      userinfo.cartlist.unshift(list)
      console.log(userinfo.cartlist)
    jsonfile.forEach((item, idx)=>{ 
      if(item.id == req.body.userid){
        jsonfile.splice(idx, 1, userinfo)
      }  })
    res.send(userinfo.cartlist)
  }else if(req.body?.mode=='del'){
    userinfo.cartlist.forEach((item,idex,todo)=>{
      if(item.id == req.body.id){
        userinfo.cartlist=userinfo.cartlist.filter((item,idx)=>{return  idx != idex})
        console.log(userinfo.cartlist)
        jsonfile.forEach((item, idx)=>{ 
          if(item.id == req.body.userid){
          jsonfile.splice(idx, 1, userinfo)
          }  })
        }
      })
      res.send(userinfo.cartlist)
  }else if( req.body?.mode == 'update' ){
    userinfo.cartlist.forEach((item,idex)=>{
      if(item.id == req.body.id){
        item.Quantity = req.body.Quantity
        item.price = req.body.price
        // console.log(req.body)
        jsonfile.forEach((item, idx)=>{ 
          if(item.id == req.body.userid){
          jsonfile.splice(idx, 1, userinfo)
          }  })
          // console.log(cartlist)
        }
      })
      res.send(userinfo.cartlist)
  }
})

// crud방법  객체에 mode에 add 추가 del삭제  update 변경 
// app.post('/todo', async (req, res) => {
//   if(!req.body.id){
//     res.send(todolist)
//   }else if(req.body?.mode == 'add' ){
//     todolist.unshift(req.body)
//     console.log(todolist)
//     res.send(todolist)
//   }else if(req.body?.mode=='del'){
//     todolist.forEach((item,idex,todo)=>{
//       if(item.id == req.body.id){
//         todolist=todolist.filter((item,idx)=>{return  idx != idex})
//         console.log(todolist)
//        res.send(todolist)
//       }
//     })
//   }else if( req.body?.mode == 'update' ){
//     todolist.forEach((item)=>{
//       if(item.id == req.body.id){
//         item.done = !item.done
//         console.log(req.body)
//         res.send(todolist)
//         console.log(todolist)
//       }
//     })
//   }
// })
// app.post('/cart', async (req, res) => {
//   if(!req.body.id){
//     res.send(cartlist)
//   }else if(req.body?.mode == 'add' ){
//     cartlist.unshift(req.body)
//     console.log(cartlist)
//     res.send(cartlist)
//   }else if(req.body?.mode=='del'){
//     cartlist.forEach((item,idex,todo)=>{
//       if(item.id == req.body.id){
//         cartlist=cartlist.filter((item,idx)=>{return  idx != idex})
//         console.log(cartlist)
//        res.send(cartlist)
//       }
//     })
//   }else if( req.body?.mode == 'update' ){
//     cartlist.forEach((item,idex)=>{
//       if(item.id == req.body.id){
//         item.Quantity = req.body.Quantity
//         item.price = req.body.price
//         // console.log(req.body)
//         res.send(cartlist)
//         console.log(cartlist)
//       }
//     })
//   }
  
// })

// app.post('/userpoint', async(req,res)=>{
//   jsonfile.filter((item,idx)=>{
//    return  userinfo = item.id == req.body.userid
//   })
//     switch (req.body.mode){
//       case 'add': 
//       userinfo.point += req.body.point
//       break;
//       case 'del' :
//         userinfo.point-= req.body.point
//       break;
//       case 'update' :

//       break;
//       default:
//       userinfo.point = 0
//     }
// })

app.post('/account', async (req, res) => {
  console.log(req)
  let user = {}
  if (req.body?.newaccount == true) {
    for (let x of jsonfile) {
      if (x.id == req.body.id) {
        return res.send({ result: '이미 가입된 회원입니다' })
      }
    }

    let mydata = {
    }
    mydata.id = req.body?.id
    mydata.password = req.body?.password
    // mydata.point = req.body?.point
    mydata.name = req.body?.name
    mydata.todolist =[]
    mydata.cartlist=[]
    jsonfile.push(mydata)
    filemake()
    res.send({ result: '회원가입 성공' })

  } else {
    console.log('로그인 시도')

    jsonfile.forEach((item, idx) => {
      if (item.id == req.body?.id&& item.password ==req.body?.password) {
        console.log('req body 보냄')
        user = {
          id :item.id,
          password : item.password,
          name : item.name
         }

        return
      }
    })
    if(user.id){
      console.log(user)
      res.send( user)
    }else{
      res.send({ result: '아이디 및 비밀번호가 틀렸습니다.' })
    }
    //

  }
})
app.post('/account/:id', async (req, res) => {
  console.log(req.params.id)
  jsonfile.forEach((x, idx) => {
    if (x.id == req.body.id) {
      res.send(jsonfile[idx])
    }
  })


})


function filemake() {
  let json = JSON.stringify(jsonfile)
  fs.writeFileSync('loginfile.json', json)
}


app.post('/generate_easy', async (req, res) => {
  try {
    const MODEL_NAME = "gemini-pro";
    const genAI = new GoogleGenerativeAI(process.env.api_key);
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const model = genAI.getGenerativeModel({ model: MODEL_NAME, safetySettings, generationConfig });
    const parts = [
      { text: "input: {\"quiz\":1,\"type\":\"sentence\"}" },
      { text: "output: {\"kor\":\"비동기 처리 로직을 위해 콜백 함수를 연속으로 중첩하여 사용할 때 발생하는 문제입니다.\",\"hint\":\"ㅋㅂㅈㅇ \",\"result\":\"콜백지옥 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sentence\"}" },
      { text: "output: {\"kor\":\"자본시장법상 '증권'을  분산원장(블록체인) 기술을 활용하여 토큰화 한 것\",\"hint\":\"ㅌㅋㅈㄱ \",\"result\":\"토큰증권 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sentence\"}" },
      { text: "output: {\"kor\":\"남자 형제와 여자 형제를 아울러 이르는 말 \",\"hint\":\"ㅎㅈㅈㅁ \",\"result\":\"형제자매 \"}" },
      { text: "input: {\"quiz\"1,\"type\":\"sentence\"}" },
      { text: "output: {\"kor\":\"이 코인은 리플랩스 사가 개발한 블록체인이자 코인의 이름이다\",\"hint\":\"ㄹㅍ\",\"result\":\"리플 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sebtence\"}" },
      { text: "output: {\"kor\": \"어떤 사물이 형성되는 시기나 그 기간 \",\"hint\":\"ㅎㅅㄱ\",\"result\":\"형성기 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sebtence\"}" },
      { text: "output: {\"kor\": \"자기의 아들과 딸을 속되게 이르는 말 \",\"hint\":\"ㅈㅅㅅㄲ\",\"result\":\"자식새끼 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sebtence\"}" },
      { text: "output: {\"kor\": \"여러 가지 색깔로 물들인 종이. 주로 어린이들의 공작용 접기나 오려 붙이기 따위에 쓴다 \",\"hint\":\"ㅅㅈㅇ\",\"result\":\"색종이 \"}" },
      { text: "input: {\"quiz\":1,\"type\":\"sebtence\"}" },
      { text: "output: {\"kor\": \"신칸트학파’와 같은 말 \",\"hint\":\"ㅅㅋㅌㅈㅇ\",\"result\":\"신칸트주의 \"}" },
    ];

    console.log(JSON.stringify(
      req.body
    ))
    //질문 삽입
    parts.push({
      text: JSON.stringify(
        req.body
      )
    })
    parts.push({ text: "output: " })
    const result = await model.generateContent(parts);
    const response = result.response;
    console.log(response.text())
    res.send(JSON.parse(response.text()));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/today', async (req, res) => {
  try {
    const MODEL_NAME = "gemini-pro";
    const genAI = new GoogleGenerativeAI(process.env.api_key);
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const model = genAI.getGenerativeModel({ model: MODEL_NAME, safetySettings, generationConfig });
    const parts = [
      { text: "input: {\"weather\":\"sunny \",\"type\":\"sentence\",\"location\":\"jamwon-dong\"}" },
      { text: "output: {\"result\":\"오늘은 화창한날로 잠원동 근처에 있는 한강길을 따라 산책하시길 추천드립니다 \"}" },
      { text: "input: {\"weather\":\"rain \",\"type\":\"sentence\",\"location\":\"jamsil\"}" },
      { text: "output: {\"result\":\"오늘은 비가내려서 잠실역 롯데월드로 쇼핑가는걸 추천합니다.\"}" },
      { text: "input: {\"weather\":\"cloudy \",\"type\":\"sentence\",\"location\":\"myungdong\"}" },
      { text: "output: {\"result\":\"오늘은 안개가 많아 명동 쇼핑몰에서 쇼핑, 인근 맛집은 명동칼국수 집을 추천드립니다.\"}" }
    ];

    console.log(JSON.stringify(
      req.body
    ))
    //질문 삽입
    parts.push({
      text: JSON.stringify(
        req.body
      )
    })
    parts.push({ text: "output: " })
    const result = await model.generateContent(parts);
    const response = result.response;
    console.log(response.text())
    res.send(JSON.parse(response.text()));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

