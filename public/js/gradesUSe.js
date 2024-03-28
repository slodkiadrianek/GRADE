const gradeBox = document.querySelector(".grade--box");
const infoGrade = document.querySelectorAll(".info--grade");

for (const el of infoGrade) {
  const previousSibling = el.parentElement;
  const trasformedText = el.textContent.toUpperCase();
  trasformedText.includes("SPRAWDZIAN")
    ? (previousSibling.style.backgroundColor = "red")
    : "";
  trasformedText.includes("AKTYWNOŚĆ")
    ? (previousSibling.style.backgroundColor = "rgb(96, 165, 255)")
    : "";
  trasformedText.includes("ZADANIE") || trasformedText.includes("ZADANIA")
    ? (previousSibling.style.backgroundColor = "rgb(243, 186, 111)")
    : "";

  trasformedText.includes("ĆWICZENIA") || trasformedText.includes("ĆWICZENIE")
    ? (previousSibling.style.backgroundColor = "rgb(200, 148, 248)")
    : "";

  trasformedText.includes("KARTKÓWKA")
    ? (previousSibling.style.backgroundColor = "rgb(118, 104, 158)")
    : "";
}
