// Wait for the page to load
window.onload = function () {
  const form = document.getElementById("mealForm");

  // Load saved meals if any
  const savedMeals = JSON.parse(localStorage.getItem("meals")) || {};
  for (let key in savedMeals) {
    const input = form.elements[key];
    if (input) {
      input.value = savedMeals[key];
    }
  }

  // Save meals on form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const meals = {};
    formData.forEach((value, key) => {
      meals[key] = value;
    });

    localStorage.setItem("meals", JSON.stringify(meals));
    alert("Meals saved successfully!");
  });
};
