document.addEventListener("DOMContentLoaded", () => {
    fetch("exercices.json")
        .then(response => response.json())
        .then(exercises => {
            const exerciseContainer = document.getElementById("exercise-container");
            exerciseContainer.innerHTML = "";
            exercises.forEach(exercise => {
                const li = document.createElement("li");
                li.textContent = exercise.titre;
                li.addEventListener("click", () => showExercise(exercise));
                exerciseContainer.appendChild(li);
            });
        })
        .catch(error => console.error("Erreur de chargement des exercices :", error));

    document.getElementById("return-home").addEventListener("click", () => {
        document.getElementById("exercise-details").style.display = "none";
    });
});

function showExercise(exercise) {
    document.getElementById("exercise-title").textContent = exercise.titre;
    document.getElementById("exercise-description").textContent = exercise.description;
    document.getElementById("exercise-result").textContent = "";
    document.getElementById("exercise-details").style.display = "block";
    document.getElementById("solution-code").textContent = exercise.solution;

    document.getElementById("run-code").onclick = function() {
        let userCode = document.getElementById("user-code").value;
        try {
            let userFunc = new Function("return " + userCode)();
            let testCase = exercise.test;
            let expected = (new Function("return " + exercise.solution)())(...testCase);
            let userResult = userFunc(...testCase);

            if (JSON.stringify(userResult) === JSON.stringify(expected)) {
                document.getElementById("exercise-result").textContent = "✅ Bonne réponse !";
                document.getElementById("exercise-result").style.color = "green";
            } else {
                document.getElementById("exercise-result").textContent = "❌ Mauvaise réponse. Réessayez !";
                document.getElementById("exercise-result").style.color = "red";
            }
        } catch (error) {
            document.getElementById("exercise-result").textContent = "❌ Mauvaise réponse. Vérifiez votre code !";
            document.getElementById("exercise-result").style.color = "red";
        }
    };

    document.getElementById("show-solution").onclick = function() {
        document.getElementById("solution-code").style.display = "block";
    };
}
