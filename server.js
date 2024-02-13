const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const cors = require('cors');
const bodyParser = require('body-parser');
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

]
const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  // let {type} = req.params
  if (res.status(200)) {

    return res.send('<h1>제미니 에서 왔습니다.</h1>');

  } else {
    res.status(404).send('disconnect');

  }

})



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
    mydata.passworld = req.body?.passworld
    mydata.email = req.body?.email
    mydata.name = req.body?.name
    jsonfile.push(mydata)
    filemake()
    res.send({ result: '회원가입 성공' })

  } else {
    console.log('로그인 시도')

    jsonfile.forEach((item, idx) => {
      if (item.id == req.body?.id&& item.passworld ==req.body?.passworld) {
        console.log('req body 보냄')
        user = {
          id :item.id,
          passworld : item.passworld,
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




