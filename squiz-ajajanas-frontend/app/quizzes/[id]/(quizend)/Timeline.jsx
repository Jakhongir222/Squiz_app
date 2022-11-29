import React, { useEffect } from 'react'
import './Timeline.css';

function Timeline({props}) {

  // const props = [ 5430, [ { "questionId": "4028e52384b4c0020184b4c02620003f", "question": "When did bubonic plague arrive in Europe?", "wrongAnswers": [ { "answerId": "a979936c-6ef3-4161-a1c5-8c20b586eaca", "answer": "1347" }, { "answerId": "3535d80e-bdcb-4c41-882a-907fb56275fb", "answer": "1375" }, { "answerId": "cd021a98-cf32-42c8-b322-264bebfbaf23", "answer": "1306" }, { "answerId": "cd00069d-d136-4232-949f-bdaa2d7a7b81", "answer": "1379" } ] }, { "questionId": "4028e52384b4c0020184b4c0254b0038", "question": "When did the first world war begin?", "wrongAnswers": [ { "answerId": "870828fb-7b9f-426a-a5be-e2bad0f2d610", "answer": "1914" }, { "answerId": "2471c602-c781-4903-951d-df000e21cb9c", "answer": "1916" }, { "answerId": "0baa17dd-5d6d-46a8-aa93-3cd62b245c56", "answer": "1918" }, { "answerId": "0c3bef3c-62b9-4c52-9e37-70869dfc1bec", "answer": "1915" } ] }, { "questionId": "4028e52384b4c0020184b4c025e0003d", "question": "When Titanic sank?", "wrongAnswers": [ { "answerId": "941f25d1-32d5-4f01-b60c-0882a2dd73e9", "answer": "1912" }, { "answerId": "713d1c49-6b9c-41ec-b62f-9d6cc1924dfd", "answer": "1913" }, { "answerId": "14d3f458-f35b-40d2-99f7-227021382444", "answer": "1914" }, { "answerId": "483a13a0-7ffa-41f4-80d9-f229cc3057ac", "answer": "1915" } ] }, { "questionId": "4028e52384b4c0020184b4c025670039", "question": "The German attack on which country caused Britain to enter the Second World War?", "wrongAnswers": [ { "answerId": "fb77d34f-78be-42fd-99c0-48e5edf2768a", "answer": "Poland" }, { "answerId": "159793b4-78b8-4f82-bf00-63808d08dede", "answer": "Spain" }, { "answerId": "ba760934-ecd0-47cb-b1f0-53ecbd0c03b6", "answer": "France" }, { "answerId": "06168652-8ad0-45d5-a7b2-2a85318f24a5", "answer": "Slovakia" } ] }, { "questionId": "4028e52384b4c0020184b4c025be003c", "question": "Who assassinated Abraham Lincoln?", "wrongAnswers": [ { "answerId": "bcbe9b6a-ab17-4b22-a820-e12e3962f80b", "answer": "John Wilkes Booth" }, { "answerId": "f208cfae-bf50-4390-bcb2-c660ab884e21", "answer": "John Travolta" }, { "answerId": "b9ba7560-8209-4cc1-9080-19e5179f3e37", "answer": "Jonatan Ieloish" }, { "answerId": "852182f8-d437-4abc-9c40-27be60a0ab82", "answer": "John Smith" } ] }, { "questionId": "4028e52384b4c0020184b4c02584003a", "question": "Who was the world’s first woman Prime Minister?", "wrongAnswers": [ { "answerId": "f8ec0724-cc21-40be-afc8-1e9f1fabf5d5", "answer": "Sirimavo Bandaranaike" }, { "answerId": "3ca7ef28-0964-4d6e-b518-210d2f2bec7a", "answer": "Indira Gandhi" }, { "answerId": "5324f169-cd50-4181-ae9e-0614f0ad8fcd", "answer": "Golda Meir" }, { "answerId": "3cba0b82-febe-44d1-a77c-ae3cc54980d4", "answer": "Margeret Thatcher" } ] }, { "questionId": "4028e52384b4c0020184b4c0263d0040", "question": "When was Darwin's The Origin of Species published?", "wrongAnswers": [ { "answerId": "984d87ba-344e-4f94-8c15-d163786f6363", "answer": "1859" }, { "answerId": "0aa7c8f1-71f3-4b07-b153-cad67b7496da", "answer": "1864" }, { "answerId": "802ae0eb-309b-45e3-b818-fa66d9be02dd", "answer": "1875" }, { "answerId": "94b66c36-8b2f-4aad-bf14-e59dfa6457a4", "answer": "1855" } ] }, { "questionId": "4028e52384b4c0020184b4c0265a0041", "question": "When First Atomic Bomb used?", "wrongAnswers": [ { "answerId": "507c383d-80eb-4698-be5e-e3ba760394ac", "answer": "1945" }, { "answerId": "342b5588-1a9c-4b64-ae22-5e29db07c4b6", "answer": "1941" }, { "answerId": "9a8838b7-4734-4ae1-825b-232fa614b172", "answer": "1875" }, { "answerId": "7add670f-2566-4f84-8342-41c88b5038cd", "answer": "1943" } ] }, { "questionId": "4028e52384b4c0020184b4c02602003e", "question": "When was America discovered?", "wrongAnswers": [ { "answerId": "2b5b81c7-ecae-4a3f-896c-83dee4cad1f6", "answer": "1492" }, { "answerId": "7067138f-f2a8-4404-97f0-464230c7b389", "answer": "1451" }, { "answerId": "0c29bdd1-f8e8-4768-b506-796f11462121", "answer": "1506" }, { "answerId": "41b2d3a8-b064-4c8f-95b8-11f724ab578d", "answer": "1509" } ] }, { "questionId": "4028e52384b4c0020184b4c025a1003b", "question": "In what year was the Russian Revolution?", "wrongAnswers": [ { "answerId": "f2fb66c0-234e-43c4-886c-f0243e32263b", "answer": "1917" }, { "answerId": "276136f5-69e4-4227-accf-240b538eccd8", "answer": "1990" }, { "answerId": "39277953-b534-4243-84cf-8919484cac49", "answer": "1912" }, { "answerId": "3e9ab485-c2b8-44f6-bb36-d32fe5a68afc", "answer": "1945" } ] } ], [ { "answerId": "a979936c-6ef3-4161-a1c5-8c20b586eaca", "answer": "1347" }, { "answerId": "870828fb-7b9f-426a-a5be-e2bad0f2d610", "answer": "1914" }, { "answerId": "941f25d1-32d5-4f01-b60c-0882a2dd73e9", "answer": "1912" }, { "answerId": "fb77d34f-78be-42fd-99c0-48e5edf2768a", "answer": "Poland" }, { "answerId": "f208cfae-bf50-4390-bcb2-c660ab884e21", "answer": "John Travolta" }, { "answerId": "3cba0b82-febe-44d1-a77c-ae3cc54980d4", "answer": "Margeret Thatcher" }, { "answerId": "0aa7c8f1-71f3-4b07-b153-cad67b7496da", "answer": "1864" }, { "answerId": "507c383d-80eb-4698-be5e-e3ba760394ac", "answer": "1945" }, { "answerId": "2b5b81c7-ecae-4a3f-896c-83dee4cad1f6", "answer": "1492" }, { "answerId": "276136f5-69e4-4227-accf-240b538eccd8", "answer": "1990" } ], [ 6, 8, 9, 10, 8, 9, 8, 8, 7, 9 ], [ 0, 1, 2, 3, 4, 0, 0, 0, 1, 2 ] ];
  // console.log(props);
  const [scores, questions, answers, time, streaks] = props;
  let boxColor = '#f0f';


  return (
    <div className='timeline'>
      {questions.map((q, i) => {
        boxColor = (q.wrongAnswers[0].answer === answers[i].answer) ? '#0f0' : '#f00'
        return (
          <div key={i} className='question-box'>
            <div className='question-box-content' style={{background: boxColor}}>
              <span className='tooltip'>
                <div>Score:{scores[i]}</div>
                <div>Streak:{streaks[i]}</div>
                <div>Time:{time[i]}</div>
              </span>
            </div>
            <div className='question-box-tag'>Q{i+1}</div>
          </div>)
      })}
    </div>
  )
}

export default Timeline