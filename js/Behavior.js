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
      question: "1. Select the option which best describes the happiness index of your child at home.",
      answers: {
        a: "5 – Extremely happy",
        b: "4 - Happy at times",
        c: "3 – Gets upset at times",
		d: "2 – Gets upset most of the times",
		e: "1 – Depressed all the time"
      },
      // correctAnswer: "c"
    },
    {
      question: "2. How often your child engage in recreational activities/hobbies?",
      answers: {
        a: "1 – Almost never",
        b: "2 – Rarely",
        c: "3 – Once in a while",
		d: "4 – Weekly",
		e: "5 – Daily"
      },
     // correctAnswer: "c"
    },
    {
      question: "3. How will you rate your child's behavior with the guests at home?",
      answers: {
        a: "5 - Extremely good",
        b: "4 – Very good",
        c: "3 – Average",
		d: "2 – Poor",
		e: "1 – Very Poor"
      },
     // correctAnswer: "d"
    },
	{
      question: "4. How often do you proper conversation with your child at home?",
      answers: {
        a: "1 – Almost never",
        b: "2 – Rarely",
        c: "3 – Once in a while",
		d: "4 – Weekly ",
		e: "5 – Daily"
      },
     // correctAnswer: "c"
    },
	{
      question: "5. How frequently your child goes out with their friends to hangout/to play?",
      answers: {
        a: "1 – Almost never",
        b: "2 – Rarely",
        c: "3 – Once in a while",
		d: "4 – Weekly ",
		e: "5 – Daily"
      },
     // correctAnswer: "c"
    },
	{
      question: "6. How often does your child express their thoughts before you?",
      answers: {
        a: "1 – Never",
        b: "2 – Rarely",
        c: "3 – Once in a while",
		d: "4 – Frequently",
		e: "5 – Very frequently"
      },
     // correctAnswer: "c"
    },
	{
      question: "7. What is the level of decisions making that your child has the freedom to exercise at home?",
      answers: {
        a: "Follows parent's guidance in everything",
        b: "Have suggestions sometimes but follow their parents",
        c: "Acts on his whims once in a while",
		d: "Takes their own decisions but considers parent's opinion",
		e: "All decisions are always their own"
      },
     // correctAnswer: "c"
    },
	{
      question: "8. Is your child exposed to age-inappropriate content?",
      answers: {
        a: "5 - Always watches age inappropriate content",
        b: "4 – Sometimes",
        c: "3 – Has watched age appropriate content before, but not now",
		d: "2 – Has the potential to watch",
		e: "1 – Never watches"
      },
     // correctAnswer: "c"
    },
	{
      question: "9. How frequent do you encounter mood swings in your child's behavior?",
      answers: {
        a: "1 – Almost never",
        b: "2 – Rarely",
        c: "3 – Once in a while",
		d: "4 – Selfaware and helpful Weekly",
		e: "5 – Daily"
      },
     // correctAnswer: "c"
    },
{
      question: "10. How compassionate is your child with their friends?",
      answers: {
        a: "1 – Not compassionate",
        b: "2 – Compassionate at times",
        c: "3 – Compassionate with a few",
		d: "4 – Compassionate with most of them",
		e: "5 – Compassionate with all"
      },
     // correctAnswer: "c"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();