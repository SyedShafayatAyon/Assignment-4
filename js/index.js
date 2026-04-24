const allBtn = getElementById("allBtn");
const interviewBtn = getElementById("interviewBtn");
const rejectedBtn = getElementById("rejectedBtn");

const allSection = getElementById("allSection");
const interviewSection = getElementById("interviewSection");
const rejectedSection = getElementById("rejectedSection");

activeBtn("allBtn");
showOnly("allSection");

document
  .getElementById("jobDescription")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    console.log(card, parent);

    if (clickedElement.classList.contains("interviewBtnInCard")) {
      interviewSection.appendChild(card);
      updateCount();
    }
    if (clickedElement.classList.contains("rejectedBtnInCard")) {
      rejectedSection.appendChild(card);
      updateCount();
    }
    if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card);
      updateCount();
    }
  });
const totalJob = getElementById("totalJob");
const interviewCount = getElementById("interviewCount");
const rejectedCount = getElementById("rejectedCount");
const sectionJob = getElementById("sectionJob");
function updateCount() {
  totalJob.innerText = allSection.children.length;
  interviewCount.innerText = interviewSection.children.length;
  rejectedCount.innerText = rejectedSection.children.length;
}

updateCount();
