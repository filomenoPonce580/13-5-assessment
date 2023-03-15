# 13-5-assessment

Promises: Assessment
Instructions
To complete this assessment, you will need to build two functions, detailed below. Reach out for help if you need it!

Note: This assessment requires you to write specific strings. Read the instructions carefully and make sure you include proper capitalization and punctuation. If you feel like you've got it right, but the tests aren't passing, ask for help!

Fortune-teller functions
You'll be using the following functions provided in the ./utils/fortune-teller.js file. This library is just a way for you to practice working with promises. While you can see the source code in the file, you do not need to understand it fully or make any changes to it.

welcome()
The welcome() function returns a promise that, when resolved, will return a short welcome string.

welcome().then((response) => {
  console.log(response);
  // "Provide me a question and I'll give you an answer..."
});
goodbye()
The goodbye() function returns a promise that, when resolved, will return a short goodbye string.

goodbye().then((response) => {
  console.log(response);
  // "Best of luck in the future..."
});
tell()
The tell() function takes a string and returns a promise that, when resolved, will return a random fortune.

tell("Will the weather be warm today?").then((response) => {
  console.log(response);
  // "Outlook good."
});
If no argument is provided, then the function will return a rejection that returns a short error message.

tell().catch((response) => {
  console.error(response);
  // "A question is required..."
});
Functions to complete
Complete the following two functions to get the tests to pass.

getFortune()
Write a function that takes a single argument, a question. Use the tell() function in the getFortune() function and then return both the question and the fortune with text before each.

getFortune("Will I ace my job interview?");
returns a promise that returns an array:

[
  "Your question was: Will I ace my job interview?",
  "Your fortune is: Outlook good.",
];
Make sure to include the phrases Your question was: and Your fortune is:.

If no question is provided, you should return an error message with the prefix There was an error::

getFortune();
returns a promise that simply returns a string:

"There was an error: A question is required...";
fullSession()
In this function, you will use the the welcome(), tell(), and goodbye() functions in that order. You will combine the responses from each. In the case of the tell() function, your output should look like the getFortune() function above. In fact, you are welcome to reuse parts of that function in this solution to avoid duplicate code.

fullSession("Will I complete my Promises Assignment?");
returns a promise that returns an array:

[
  "Provide me a question and I'll give you an answer...",
  "Your question was: Will I complete my Promises Assignment?",
  "Your fortune is: As I see it, yes.",
  "Best of luck in the future...",
];
If no question is provided, the welcome() response will be seen, then the error as before, then thegoodbye() function, in that order.

fullSession();
returns a promise that returns the following array:

[
  "Provide me a question and I'll give you an answer...",
  "There was an error: A question is required...",
  "Best of luck in the future...",
];
Tips
The value returned by a then() is passed to the next then().
Use push to add one element to an array.
Use concat to merge two arrays.
You may complete this challenge on your own machine before uploading it to Qualified.
Reference the related lesson for help on completing this practice problem.
