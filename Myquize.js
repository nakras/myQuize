function grade() {
	// showing the correct answer
	document.getElementById("a1").innerHTML = "Correct Answer: Demon hunter"
	document.getElementById("a2").innerHTML = "Correct Answer: Legion 7.1.5";
	document.getElementById("a3").innerHTML = "Correct Answer: Sanguine Dephs"
	document.getElementById("a4").innerHTML = "Correct Answer: Discipline Priest, Holy Paladin, Restoration Shaman"

	let sq1_a = document.getElementById("sQ1").value.trim().toLowerCase() === "demon hunter";
	let sq2_a = document.getElementById("sQ2").value.trim().toLowerCase() === "legion 7.1.5";

	let tq1_a = document.getElementById("t4Q1").checked === true;

	let t2q2_a = document.getElementById("t2Q2").checked === true;
	let t4q2_a = document.getElementById("t4Q2").checked === true;
	let t5q2_a = document.getElementById("t5Q2").checked === true;

	var point = 0;
	if (sq1_a) {
		point += 4;
	}

	if (sq2_a) {
		point += 4;
	}

	if (tq1_a) {
		point += 3;
	}

	if (t2q2_a) {
		point += 3;
	}

	if (t4q2_a) {
		point += 3;
	}

	if (t5q2_a) {
		point += 3;
	}

	document.getElementById("pointToShow").innerHTML = "total point is : " + point;
	var comment = ""
	switch (point) {
		case point > 15:
			comment = "OK"
			break;
		case 15 >= point > 10:
			comment = "Aha"
			break;
		case point <= 10:
			comment = "Better luck next time!"
			break;
		default:
			comment = "Try harder!!"
			break;
	}
	document.getElementById("descpToShow").innerHTML = comment;
}


