const { resolveInclude } = require('ejs');
const express = require('express');
const mysql = require('../controllers/mysql');
const request = require('request');

const router = express.Router();


router.get('/', async (req, res, next) => {
    try{
        let out = dataSample();
      // res.render('search');
      res.send(out);
    }catch(err){
      console.log({err})
  }
});

router.post('/', async (req, res, next) => {
    try{
      let verkey = req.body.verkey;
      // let out = dataSample();
      console.log(verkey);
      let result ;
      result = await reqData(verkey)
      console.log(result);
      if(result.verkey){
        console.log("인증성공")
        let out = await mysql.getData();
        res.send(out);
      }else{
        console.log("인증실패")
        res.send([]);
      }
      
  
    }catch(err){
      console.log({err})
  }
});

async function reqData(verkey){
    return new Promise((resolve, reject) => {
        request(`http://61.252.59.50:8001/ssp/${verkey}`, function (error, response, body) {
            // console.error('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            let value = JSON.parse(body);
            // console.log(value.verkey);
            resolve(value);
        });
    });

  
        
}


function dataSample(){
    let result = [
      {
          "idx": "1",
          "title": "편의점 흉기 강도 사건",
          "creator": "Av63wJYM7xYR4AiygYq4c3",
          "created": "2022-10-29",
          "updated": "2022-11-04",
          "suspect": "오현우",
          "victim": "김민준",
          "evidence": [
              {
                  "idx": "1",
                  "title": "피해자 진술서",
                  "content": "본인은 사고 당일 저녁 8시경 CS편의점 알바를 하고 있던중이였습니다.\n                                모자와 마스크를 쓴 손님이 칼을 꺼내 저를 위협하면서 현금인출기에 있는 현금을 달라고 하였습니다.\n                                당시의 저는 너무 놀란 나머지 현금인출기에 있는 돈을 모두 주고 가해자가 떠난 후 112에 신고를 하였습니다.\n                                경찰차량이 도착하고 저는 사고의 경위를 설명하고 점장님께서 퇴근하라고 하셔서 퇴근을 하였습니다.\n                                본인의 진술이 필요하다는 담당 경촬관의 요청에 진술서를 작성하게 되었습니다.",
                  "created": "2022-10-29 10:10:11",
                  "updated": "",
                  "croator": "Av63wJYM7xYR4AiygYq4c3",
                  "owner": "김민준"
              },
              {
                  "idx": "2",
                  "title": "사건 당일 CCTV",
                  "content": "2022-10-29-01.mp4",
                  "created": "2022-10-29",
                  "updated": "",
                  "croator": "형사 did",
                  "owner": "이우진"
              }
          ]
      },
      {
          "idx": "2",
          "title": "보이스피싱 사건",
          "creator": "Th7MpTaRZVRYnPiabds81Y",
          "created": "2022-11-03 11:11:11",
          "updated": "",
          "suspect": "",
          "victim": "최지유",
          "evidence": [
              {
                  "idx": "1",
                  "title": "문자 내용",
                  "content": "A : 엄마 나 핸드폰 망가져서 수리맡기고 급한대로 PC로 문자하고 잇어… 보시면 문자줘\n                            B : 응 왜?\n                            A : 엄마 바뻐?? 안바쁘면 부탁하나만 해도돼?\n                            B : 뭔데\n                            A : 친구한테 부탁받은건게. 나지금 은행인증서오류가 떠서 구매할수가없어…엄마가 나대신 편의점에서 구글기프트카드 구매해주면 안돼?\n                            B : 얼마짜리?\n                            A : 엄마 현금잇어?? 15만권 다섯장만 구매해줘. 카드결제는 안된다고 하던데\n                            B : 샀어\n                            A : 샀으면 포장뜯고 카드 뒷면에 라별긁으면 코드가 나와 사진찍어서 보내주면 된다고 하더라고…\n                            A : 엄마 아직이야?\n                            B : 15만권 없어서 10만권짜리 여러장 샀어\n                            A : 알겟어 엄마 부탁이야~ 빨리좀 해줘\n                            B : 어떻게하는질 모르겠다\n                            A : 엄마 그러니깐 카드 포장뜯고 카드뒷면에 google play글씨가 잇잖어 글씨옆에 긁는데가 잇어\n                            A : 긁으면 인증코드 영어, 숫자가 나오거든 사진찍어서 여기에 나한테 보내줘",
                  "created": "2022-11-03 11:11:11",
                  "updated": "2022-11-06 11:11:11",
                  "creator": "Av63wJYM7xYR4AiygYq4c3",
                  "owner": "최지유"
              }
          ]
      }
  ]

return result;

}

module.exports = router;
