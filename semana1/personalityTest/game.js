const question = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("choice-text"))
const progressText  = document.getElementById('progressText');
const progressBarFull  = document.getElementById('progressBarFull');
const scoreText  = document.getElementById('score');
const loader = document.getElementById("loader");
const game = document.getElementById("game");

const answerTemplate = document.getElementById("answerTemplate")


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let completedBatch = []
let listsOfQuestions = []
let questions = []


var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));




//~ let completedQuestions = []

//~ fetch("personalityQuestions.json").then(res =>{
	//~ console.log(res);
	//~ return res.json();
	//~ }).then(
	//~ loadedQuestions => {
		//~ console.log(loadedQuestions.results)
		//~ questions = loadedQuestions.results.map(loadedQuestion => {
			//~ const formattedQuestion = {
						//~ question:loadedQuestion.question,
					  //~ }
			//~ const answerChoices = [...loadedQuestion.incorrect_answers]
			//~ console.log(answerChoices)
			//~ index
			//~ formattedQuestion.answer = Math.floor(Math.random()*3) + 1;
			//~ adding correct answer at a random position
			//~ answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);
			
			//~ answerChoices.forEach((choice, index) => {
				//~ formattedQuestion["choice" + (index+1)] = choice;
				//~ })	
				
			//~ return formattedQuestion	
			//~ })
		//~ questions = loadedQuestions.results
		//~ game.classList.remove("hidden")
		//~ loader.classList.add("hidden")
		//~ startGame()
		//~ }
	//~ ).catch(err => {
		//~ console.log(err)
		//~ }
	
	//~ )
	
function randIndexFromList(list){
	return Math.floor(Math.random()*list.length)
	}

fetch("personalityQuestions.json").then(res =>{
	console.log(res);
	return res.json();
	}).then(
	loadedCategs => {
		//~ console.log(loadedQuestions.results)
		loadedCategs = loadedCategs.map(loadedCateg => {
			let categ = loadedCateg.category
			let catQuestions = loadedCateg.questions.map(question => {
				question["category"] = categ
				return question
				})
	
			listsOfQuestions.push(catQuestions)
			loadedCateg.questions = []
			return loadedCateg	
			})
		let randIndex = randIndexFromList(listsOfQuestions)
		questions = listsOfQuestions[randIndex]
		console.log(questions)
		listsOfQuestions.splice(randIndex, 1)
		
		
		
		game.classList.remove("hidden")
		loader.classList.add("hidden")
		startGame()
		}
	).catch(err => {
		console.log(err)
		}
	
	)

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 24;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [ ... questions];
	//~ console.log(availableQuestions);
	getNewQuestion();
	}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		//~ localStorage.setItem('mostRecentScore', score);
		//~ return window.location.assign("/end.html")
		console.log(listsOfQuestions.length)
		if (listsOfQuestions.length > 0){
			let randIndex = randIndexFromList(listsOfQuestions)
			questions = listsOfQuestions[randIndex]
			availableQuestions = [ ... questions];
			listsOfQuestions.splice(randIndex, 1)
		} else {
			localStorage.setItem('completedBatch', JSON.stringify(completedBatch));
			return window.location.assign(dir+"/end.html")
		}
		}
	questionCounter ++;
	progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`
	
	//~ update the progressbar
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`
	
	const questionIndex = Math.floor(Math.random() * availableQuestions.length );
	currentQuestion = availableQuestions[questionIndex]
	question.innerText = currentQuestion.question;
	
	
	//~ console.log(choices)
	choices.forEach(choice => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number]
		});
		
	completedBatch.push(availableQuestions.splice(questionIndex, 1)[0])
	console.log(completedBatch)
	acceptingAnswers = true;
	
	}

choices.forEach(choice => {
	choice.addEventListener("click", e => {
		if (!acceptingAnswers) return;
		
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];
		
		//~ console.log(selectedAnswer, currentQuestion.answer, currentQuestion)
		//~ console.log(selectedAnswer == currentQuestion.answer)
		
		//~ const classToApply = 
			//~ selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
			
		//~ if (classToApply === "correct") {
			//~ incrementScore(CORRECT_BONUS)
			//~ }
		
		currentQuestion.selected = selectedAnswer
			
		//~ selectedChoice.parentElement.classList.add(classToApply);
		
		//~ setTimeout(() => {
			//~ selectedChoice.parentElement.classList.remove(classToApply);
			
			
			//~ }, 1000);
			
		
		getNewQuestion();
		})
	});
	
incrementScore = num => {
	score += num;
	scoreText.innerText = score;
	}

