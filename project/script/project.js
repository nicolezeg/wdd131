const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

const courses = [
    {
      name: "Teens and Adults - English",
    },
    {
      name: "Teens and Adults - Portuguese",
    },
    {
      name: "Kids - English",
    },
    {
      name: "Teens and Adults French",
    },
];

const selectElement = document.getElementById('course-select');

courses.forEach((course) => {
  const option = document.createElement('option');
  option.value = course.id;
  option.text = course.name;
  selectElement.appendChild(option);
});


