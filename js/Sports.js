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
        a: "5 – Very frequently",
        b: "4 - More Often",
        c: "3 – Whenever given the opportunity",
		d: "2 – Very rarely (Needs push)",
		e: "1 – Never"
      },
      // correctAnswer: "c"
    },
    {
      question: "2. How well does the student collaborate with their team?",
      answers: {
        a: "5 – Deliberately performing poor/Egoistic",
        b: "4 – is biased with certain teammates leading to failures/performance degradation",
        c: "3 – Neutral (Self-centered/Not collaborative)",
		d: "2 – Collaborates satisfactorily",
		e: "1 – sets the pace of the team"
      },
     // correctAnswer: "c"
    },
    {
      question: "3. Is the student compassionate to their teammates?",
      answers: {
        a: "1 - Not compassionate ",
        b: "2 – Compassionate at times",
        c: "3 – Compassionate with a few",
		d: "4 – Compassionate with most of them",
		e: "5 – Compassionate with all"
      },
     // correctAnswer: "d"
    },
	{
      question: "4. What is the level of involvement of the student in the respective sports?",
      answers: {
        a: "1 – Not interested",
        b: "2 – Mildly interested",
        c: "3 – Interested",
		d: "4 – Passionate ",
		e: "5 – Immersed"
      },
     // correctAnswer: "c"
    },
	{
      question: "5. What is the student’s physical movement level? (Game Specific*)",
      answers: {
        a: "1 – Static",
        b: "2 – Sluggish Movements",
        c: "3 – Normal",
		d: "4 – Fast ",
		e: "5 – Excessive (More than Necessary)"
      },
     // correctAnswer: "c"
    },
	{
      question: "6. How disciplined is the student’s overall performance in the sport?",
      answers: {
        a: "1 – Does not abide by Rules",
        b: "2 – Forgets the Rules",
        c: "3 – Follows the Rules to best of their capacity ",
		d: "4 –  ",
		e: "5 – "
      },
     // correctAnswer: "c"
    },
	{
      question: "7. How aggressive a student behaves in a situation of conflict with their teammates?",
      answers: {
        a: "1 – Passive",
        b: "2 – Mildly Passive Aggressive",
        c: "3 – Passive Aggressive ",
		d: "4 – Aggressive",
		e: "5 – Excessive Aggressive (lasts for few days, affects their performance in coming days)"
      },
     // correctAnswer: "c"
    },
	{
      question: "8. What is the student’s level of physical fitness?",
      answers: {
        a: "1 – Sedentary",
        b: "2 – Mildly showcase Strength and Flexibility",
        c: "3 – Showcase Sufficient Strength and Flexibility",
		d: "4 – Cardiorespiratory (Endurance Exercise)-Pushing the limits ",
		e: "5 – Above required physical fitness"
      },
     // correctAnswer: "c"
    },
	{
      question: "9. How does the student handle a loss in sport?",
      answers: {
        a: "1 – Lose desire to play again",
        b: "2 – Blame others for their failure/Showing Aggression ",
        c: "3 – Normal",
		d: "4 – Selfaware and helpful ",
		e: "5 – Takes input from the loss and employs in the next game"
      },
     // correctAnswer: "c"
    },
{
      question: "10. How well is a student performing individually?",
      answers: {
        a: "1 – Perform",
        b: "2 – Perform very well at speed and/or under fatigue",
        c: "3 – Perform very well at speed and/or under fatigue under pressure*",
		d: "4 – Perform very well at speed and/or under fatigue under pressure consistently*",
		e: "5 – Perform very well at speed and/or under fatigue under pressure consistently in competitive conditions*"
      },
     // correctAnswer: "c"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();