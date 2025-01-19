
const name = document.getElementById("name")
const submit = document.getElementById("submit")

submit.disabled = true;
name.value = ""

name.addEventListener('keyup', () => {
    submit.disabled = !name.value;
});


function createProfile() {
	
	localStorage.setItem("user",JSON.stringify({user:name.value}))
	window.location.assign("/personalityTest/game.html")
	}
