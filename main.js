//responses 

let responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]
  




//------- fortuneteller.js -------------------

const welcomeMessage = "Provide me a question and I'll give you an answer...";
const goodbyeMessage = "Best of luck in the future...";
const tellErrorMessage = "A question is required...";

function selectRandomFortune() {
  const num = Math.random() * responses.length;
  const index = Math.floor(num);
  return responses[index];
}
function welcome() {
  return Promise.resolve(welcomeMessage);
}

function goodbye() {
  return Promise.resolve(goodbyeMessage);
}

function tell(question) {
  if (question) {
    const fortune = selectRandomFortune();
    return Promise.resolve(fortune);
  }
  return Promise.reject(tellErrorMessage);
}



function ask(question) {
    return tell(question).then((response) => [
      `Your question was: ${question}`,
      `Your fortune is: ${response}`,
    ]);
}
 


//use console.log() instead of return to follow in terminal


function getFortune(question) {
    return tell(question)
      .then((response)=>{
        return([`Your question was: ${question}`, `Your fortune is: ${response}`])
    })
      .catch((err)=>{
        return `There was an error: ${err}`
    })
}
  

//use console.log() instead of return to follow in terminal

function fullSession(question) {

  let welcomePromise = welcome();
  let fortunePromise = getFortune(question);
  let goodbyePromise = goodbye();
  
  //callback hell.
  return welcomePromise
          .then((welcomeMessage)=>{
              return fortunePromise
                      .then((fortuneMessage)=>{
                            return goodbyePromise
                                    .then((byeMessage) => {
                                      //greate arrays for each response, join with .concat()
                                      let welcomeArr = [`${welcomeMessage}`];
                                      let fortuneArr = fortuneMessage;
                                      let goodByeArr = [`${byeMessage}`]
                                      return welcomeArr.concat(fortuneArr).concat(goodByeArr)
                                    })
                      })
            })   

}





//desired output... //no question input leads to only 3 lines
// [
//     "Provide me a question and I'll give you an answer...",
//     "Your question was: Will I complete my Promises Assignment?",
//     "Your fortune is: As I see it, yes.",
//     "Best of luck in the future...",
// ];

