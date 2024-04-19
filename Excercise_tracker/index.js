// Load exercises from localStorage on page load
window.addEventListener("load", () => {
  renderExerciseList();
});

// Handle form submission
document.getElementById("exerciseForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const exerciseName = document.getElementById("exerciseName").value;
  const duration = parseInt(document.getElementById("duration").value);
  if (!exerciseName || isNaN(duration)) return;

  const exercise = {
    name: exerciseName,
    duration: duration,
  };
  saveExercise(exercise);
  renderExerciseList();
  e.target.reset();
});

// Save exercise to localStorage
function saveExercise(exercise) {
  let exercises = JSON.parse(localStorage.getItem("exercises")) || [];
  exercises.push(exercise);
  localStorage.setItem("exercises", JSON.stringify(exercises));
}

// Render list of exercises
function renderExerciseList() {
  const exerciseList = document.getElementById("exercise-list");
  exerciseList.innerHTML = "";
  const exercises = JSON.parse(localStorage.getItem("exercises")) || [];
  exercises.forEach((exercise, index) => {
    const exerciseItem = document.createElement("div");
    const exerciseName = document.createElement("span");
    const exerciseTime = document.createElement("span");

    exerciseName.classList.add("exercise-name");
    exerciseTime.classList.add("exercise-time");
    exerciseName.textContent = `${index + 1}. ${exercise.name}`;
    exerciseTime.textContent = `${exercise.duration} minutes`;

    exerciseItem.classList.add("exercise-item");
    exerciseItem.appendChild(exerciseName);
    exerciseItem.appendChild(exerciseTime);
    exerciseList.appendChild(exerciseItem);
  });
}
