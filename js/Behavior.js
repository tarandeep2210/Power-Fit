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
      question: "1. On a scale of 1-5,  how happy is the child at home?",
      answers: {
        a: "Depressed all the time.",
        b: "Gets upset most of the times",
        c: "Gets upset at times",
		d: "Happy at times",
		e: "Extremely happy"
      },
      // correctAnswer: "c"
    },
    {
      question: "2. On a scale of 1-5, how good is the equation with your child?",
      answers: {
        a: "Very Poor",
        b: "Poor",
        c: "Average",
		d: "Very good",
		e: "Extremely good"
      },
     // correctAnswer: "c"
    },
    {
      question: "3. Does your child watch age appropriate video content?",
      answers: {
        a: "Always watches age inappropriate content",
        b: "Sometimes",
        c: "Has watched age inappropriate content before, but not now",
		d: "Has the potential to watch",
		e: "Watches good content"
      },
     // correctAnswer: "d"
    },
	{
      question: "4. Does your child get involved in voilence , influenced by the characters that he/she watches which are in age inappropriate category? ",
      answers: {
        a: "Always",
        b: "Used to previously",
        c: "Moderately",
		d: "Rarely ",
		e: "Never"
      },
     // correctAnswer: "c"
    },
	{
      question: "5. On  a scale of 1-5, how compassionate is your child with his friends?",
      answers: {
        a: "Not compassionate",
        b: "Compassionate at times",
        c: "Compassionate with a few",
		d: "Compassionate with most of them",
		e: "Compassionate with all"
      },
     // correctAnswer: "c"
    },
	{
      question: "6. On a scale of 1-5, how unpredictable is your child’s behavior?",
      answers: {
        a: "Extremely unpredictable at all times",
        b: "Unpredictable sometimes",
        c: "Unpredictable rarely",
		d: "Likely to be predictable",
		e: "Most likely to be Predictable"
      },
     // correctAnswer: "c"
    },
	{
      question: "7. How frequently your child goes out with their friends to hangout/ to play?",
      answers: {
        a: "Never",
        b: "Rarely",
        c: "Used to previously",
		d: "Moderately",
		e: "Always"
      },
     // correctAnswer: "c"
    },
	{
      question: "8. How often your child engage in recreational activites/hobbies?",
      answers: {
        a: "Never",
        b: "Rarely",
        c: "Used to previously",
		d: "Moderately",
		e: "Always"
      },
     // correctAnswer: "c"
    },
	{
      question: "9. How often do you  encounter mood swings in your childs behaviour?",
      answers: {
        a: "Never",
        b: "Rarely",
        c: "Used to previously",
		d: "Moderately",
		e: "Always"
      },
     // correctAnswer: "c"
    },
{
      question: "10. How often does your child go beyond the boundaries set? ",
      answers: {
        a: "Never",
        b: "Rarely",
        c: "Used to previously",
		d: "Moderately",
		e: "Always"
      },
     // correctAnswer: "c"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();