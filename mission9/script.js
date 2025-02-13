document.getElementById("check-answers").addEventListener("click", function() {
    let score = 0;
    let correctAnswers = {
        q1: "1",
        q2: "1",
        q3: "1",
        q4: "1",
        q5: "1",
        q6: "1",
        q7: "1",
        q8: "1",
        q9: "1",
        q10: "1"
    };

    for (let question in correctAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById("score").textContent = `Votre score : ${score} / 10`;
});

document.getElementById("show-correction").addEventListener("click", function() {
    window.open("correction.html", "_blank", "width=600,height=400");
});
