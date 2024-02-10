const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv =require('dotenv')
dotenv.config()
const fs= require('fs')
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

]
const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', async (req, res)=>{
  // let {type} = req.params
 if(res.status(200)){
 
    return  res.send('<h1>제미니 에서 왔습니다.</h1>');

 }else{
     res.status(404).send('disconnect');

 }
  
})



app.post('/account', async (req,res)=>{
  console.log(req)
    if( req.body?.newaccount== true){
  let mydata ={
   }
    mydata.id = req.body?.id
       mydata.passworld = req.body?.passworld
      mydata.email = req.body?.email
       mydata.name = req.body?.name
       jsonfile.push(mydata)
    filemake()
    res.send({result : '회원가입 성공'})

 }else{
  jsonfile.forEach((item,idx)=>{
    if(item.id == req.body?.id){
         res.send(jsonfile[idx])
    }else if(item.id != req.body?.id){
      res.send({result : '아이디 및 비밀번호가 틀렸습니다.'})
    } 
     })
 }
})
app.post('/account/:id', async (req,res)=>{
  console.log(req.params.id)
    jsonfile.forEach((x,idx)=>{
      if(x.id==req.body.id){
       res.send( jsonfile[idx])
      }
    })
  

})


function filemake(){
   let json = JSON.stringify(jsonfile)
  fs.writeFileSync('loginfile.json',json)
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

        const model = genAI.getGenerativeModel({ model: MODEL_NAME,safetySettings,generationConfig});
        const parts = [
            {text: "input: {\"level\":1,\"type\":\"sentence\"}"},
            {text: "output: {\"kor\":\"나는 피자를 먹는 것을 좋아해요.\",\"eng\":\"I like to eat pizza\"}"},
            {text: "input: {\"level\":2,\"type\":\"sentence\"}"},
            {text: "output: {\"kor\":\"나의 고양이는 아주 귀여워요.\",\"eng\":\"My cat is very cute.\"}"},
            {text: "input: {\"level\":3,\"type\":\"sentence\"}"},
            {text: "output: {\"kor\":\"몇 시간 동안 공부한 끝에, 그녀는 드디어 그 개념을 이해했다.\",\"eng\":\"After studying for hours, she finally understood the concept.\"}"},
            {text: "input: {\"level\"4,\"type\":\"sentence\"}"},
            {text: "output: {\"kor\":\"역사 박물관은 다양한 시대의 유물로 가득 차 있습니다.\",\"eng\":\"The historical museum is filled with artifacts from different eras.\"}"},
            {text: "input: {level\":1,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"행복한\", \"eng\": \"Happy\"}"},
            {text: "input: {level\":1,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"사과\", \"eng\": \"Apple\"}"},
            {text: "input: {level\":2,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"친구\", \"eng\": \"Friend\"}"},
            {text: "input: {level\":2,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"아침식사\", \"eng\": \"Breakfast\"}"},
            {text: "input: {level\":3,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"탐험하다\", \"eng\": \"Explore\"}"},
            {text: "input: {level\":4,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"자신감 있는\", \"eng\": \"Confident\"}"},
            {text: "input: {level\":5,\"type\":\"word\"}"},
            {text: "output: {\"kor\": \"애매한, 모호한\", \"eng\": \"Ambiguous\"},"},
        ];

        console.log(JSON.stringify(
            req.body
        ))
        //질문 삽입
        parts.push({ text: JSON.stringify(
                req.body
            )
        })
        parts.push({text:"output: "})
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

      const model = genAI.getGenerativeModel({ model: MODEL_NAME,safetySettings,generationConfig});
      const parts = [
          {text: "input: {\"weather\":\"sunny \",\"type\":\"sentence\",\"location\":\"jamwon-dong\"}"},
          {text: "output: {\"result\":\"오늘은 날씨라 잠원동 인근 한강변으로 산책하시길 추천드립니다.\"}"},
          {text: "input: {\"weather\":\"rain \",\"type\":\"sentence\",\"location\":\"jamsil\"}"},
          {text: "output: {\"result\":\"오늘은 비가내려서 잠실역 롯데월드로 쇼핑가는걸 추천합니다.\"}"},
          {text: "input: {\"weather\":\"cloudy \",\"type\":\"sentence\",\"location\":\"myungdong\"}"},
          {text: "output: {\"result\":\"오늘은 안개가 많아 명동 쇼핑몰에서 쇼핑, 인근 맛집은 명동칼국수 집을 추천드립니다.\"}"}
      ];

      console.log(JSON.stringify(
          req.body
      ))
      //질문 삽입
      parts.push({ text: JSON.stringify(
              req.body
          )
      })
      parts.push({text:"output: "})
      const result = await model.generateContent(parts);
      const response = result.response;
      console.log(response.text())
      res.send(JSON.parse(response.text()));
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});




