// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

// testing to see if this works for converting: 
//
// function test([str1,str2]){
//   return str1 + str1;
// }
// console.log(test(["foo","bar"]));

function processFirstItem(stringList){
  return callback(stringList[0]);
}
const stringList = ["str","str"]; // didn't work because I was missing the quotes 
const callback = (str) => str + str; // initially wrote this differently
console.log(processFirstItem(["foo", "bar"]));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Answer:
 * counter1 has count function-scoped (defined within the function and can't be accessed later on), whereas counter2 has count outside of its scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Answer:
 * counter2. count is written outside of the function, so the function has to reach outisde its scope to find count.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Answer:
 * counter1 is preferable when count is isolated to counterMaker. counter2 is preferable when count needs to change later on in the script.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round((Math.random() * 2));
}// returns a random value of 0-2
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
// The below returns NaN instead of a number. UGH! 
//
function finalScoretest(inning, inningNum){
  let scoreHome = 0; 
  let scoreAway = 0;
  for(let i = 0; i < inningNum; i++){
    scoreHome += inning();
    scoreAway += inning();
  }
  return {"Home": scoreHome,"Away": scoreAway};
}
finalScoretest(inning, 9);
console.log(finalScoretest(inning, 9));
  // console.log("Home: " + scoreHome + " points");
  // console.log("Away: " + scoreAway + " points");


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

//           "getInningScore" / "inning"   
function finalScore(baseInning,inningNum){
  let scores = [];
  let scoreHome = 0;
  let scoreAway = 0;
   
  for (i = 0; i < inningNum; i++){
    scoreHome = scoreHome + baseInning(); // 
    scoreAway = scoreAway + baseInning();
    // console.log(scores);
    // console.log(scoreAway);
    scores.push({"Inning": (i+1), "Home": scoreHome, "Away": scoreAway});
    // scores.push({"Inning": (i+1), "Home": scoreHome += baseInning(), "Away": scoreAway += baseInning()});
  }
  scores.push({"Final Score": "", "Home": scoreHome, "Away": scoreAway});
  // console.log(scoreHome);
  // console.log("Final Score: " + "Home: " + scoreHome + " Away: " + scoreAway);
  return scores;
}
console.log(finalScore(inning,9));

