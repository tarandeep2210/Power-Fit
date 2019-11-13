(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      //if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
       // numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      //} else {
        // if answer is wrong or blank
        // color the answers red
       // answerContainers[questionNumber].style.color = "red";
      //}
    });

    // show number of correct answers out of total
   // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. How often the student takes up a leadership role?",
      answers: {
        a: "Never",
        b: "Very rarely (Needs push)",
        c: "Whenever given the opportunity",
		d: "More Often",
		e: "Very frequently"
      },
      // correctAnswer: "c"
    },
    {
      question: "2. How well does the student collaborate with their team?",
      answers: {
        a: "Deliberately performing poor/Egoistic",
        b: "is biased with certain teammates leading to failures/performance degradation",
        c: "Neutral (Self-centered/Not collaborative)",
		d: "Collaborates satisfactorily",
		e: "sets the pace of the team"
      },
     // correctAnswer: "c"
    },
    {
      question: "3. How often does the student bunk the physical activity class?",
      answers: {
        a: "Always",
        b: "Used to previously",
        c: "Moderately",
		d: "Rarely",
		e: "Never"
      },
     // correctAnswer: "d"
    },
	{
      question: "4. How disciplined is the student’s overall performance in the sport?",
      answers: {
        a: "Always",
        b: "Used to previously",
        c: "Moderately",
		d: "Rarely",
		e: "Never"
      },
     // correctAnswer: "c"
    },
	{
      question: "5. How aggressive a student behaves in a situation of conflict with their teammates?",
      answers: {
        a: "Excessive Aggressive",
        b: "Aggressive",
        c: "Passive Aggressive",
		d: "Mildly Passive Aggressive",
		e: "Passive"
      },
     // correctAnswer: "c"
    },
	{
      question: "6. How does the student handle a loss in sport?",
      answers: {
        a: "Lose desire to play again",
        b: "Blame others for their failure/Showing Aggression",
        c: " Normal",
		d: "Selfaware and helpful",
		e: "Takes input from the loss and employs in the next game"
      },
     // correctAnswer: "c"
    },
	{
      question: "7. What is the student’s level of physical fitness?",
      answers: {
        a: "Not Fit to be in Sport",
        b: "Needs improvemet",
        c: "Average  ",
		d: "Sufficient",
		e: "Good Fitness level"
      },
     // correctAnswer: "c"
    },
	{
      question: "8. What is the student’s physical movement level? (Game Specific*)",
      answers: {
        a: "Static",
        b: "Sluggish Movements",
        c: "Normal",
		d: "Satisfactory",
		e: "Fast"
      },
     // correctAnswer: "c"
    },
	{
      question: "9. What is the level of involvement of the student in the respective sports?",
      answers: {
        a: "Not interested",
        b: "Mildly interested",
        c: "Interested",
		d: "Passionate",
		e: "Passionate"
      },
     // correctAnswer: "c"
    },
{
      question: "10. How well is a student performing individually?",
      answers: {
        a: "Perform",
        b: "Perform very well at speed and/or under fatigue",
        c: "Perform very well at speed and/or under fatigue under pressure*",
		d: "Perform very well at speed and/or under fatigue under pressure consistently*",
		e: "Perform very well at speed and/or under fatigue under pressure consistently in competitive conditions*"
      },
     // correctAnswer: "c"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();