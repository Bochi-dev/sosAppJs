const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
//~ const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
//~ finalScore.innerText = mostRecentScore;

const MAX_HIGH_SCORE = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)


let myChart1 = document.getElementById("myChart").getContext('2d');
let labels1 = []
let data1 = []
let colors1 = ["#49A9EA"] 

const data =JSON.parse( localStorage.getItem("completedBatch"))
const user =JSON.parse( localStorage.getItem("user"))
const usersData = {}



userStats = {}
let attachments = []

data.map((question) => {
	if ( question.category.includes("Attachment")){
		if (attachments.includes(question.category)){
			
		} else {
			attachments.push(question.category)
		}
	} else {
		if (labels1.includes(question.category)){
			
		} else {
			labels1.push(question.category)
		}
	}
	if ( question.category in userStats ) {
		userStats[question.category] += parseInt( question.selected)
	} else {
		userStats[question.category] = 1
		}
	
	})

labels1= labels1.concat(attachments)

labels1.map(l =>{
	userStats[l] = userStats[l]/3
	data1.push(userStats[l])
	
	})






//~ let myChart1 = document.getElementById("myChart").getContext('2d');

window.addEventListener("load", () =>{
	console.log("Hello World")
	let chart1 = new Chart(myChart1, {
	type: "bar",
	data: {
		labels: labels1,
		datasets: [{
			data: data1,
			backgroundColor: colors1
			}]
		},
	options: {
		plugins: {
		title: {
			text: "Stats of " + user.user,
			display: true
		},
		legend: {
			display: false
		}
	}
	}
	})

	
	
	
	
	})

