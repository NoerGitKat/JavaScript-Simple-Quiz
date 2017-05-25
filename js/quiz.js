function submitAnswers() {
	var total = 5;
	var score = 0;

	//Get user input from q1-q5
	var q1 = document.forms["quiz"]["q1"].value;
	var q2 = document.forms["quiz"]["q2"].value;
	var q3 = document.forms["quiz"]["q3"].value;
	var q4 = document.forms["quiz"]["q4"].value;
	var q5 = document.forms["quiz"]["q5"].value;
	var arrQ = [q1, q2, q3, q4, q5];

	//Question validation
	for (var i = 0; i < arrQ.length; i++) {
		if (arrQ[i] == null || arrQ[i] == "" || arrQ[i] == undefined) {
			alert("You skipped question #" + (i + 1) + "!");
			return false;
		}
	}

	//Setting correct answers
	var answers= ["d", "a", "c", "b", "d"];
	for (var i = 0; i <answers.length; i++) {
		if(arrQ[i] == answers[i]) {
			alert("Question #" + (i + 1) + " is correct!");
			score++;
		} else {
			alert("Question #" + (i + 1) + " is WRONGGGGGGGG!");
		}
	}

	//Add HTML with JS to display score
	var results = document.getElementById("results");
	results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span>!";
	
	alert("You scored " + score + " out of " + total);

	//No database so don't return
	return false;
}