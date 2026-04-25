const allBtn = getElementById("allBtn");
const interviewBtn = getElementById("interviewBtn");
const rejectedBtn = getElementById("rejectedBtn");

const allSection = getElementById("allSection");
const interviewSection = getElementById("interviewSection");
const rejectedSection = getElementById("rejectedSection");
const emptySection = getElementById("emptySection");

const sectionJobCount = getElementById("sectionJobCount");

document
  .getElementById("jobDescription")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".cardContainer");
    const parent = card.parentNode;
    const state = card.querySelector(".state");

    if (clickedElement.classList.contains("interviewBtnInCard")) {
      interviewSection.appendChild(card);
      state.innerText = "Interviewed";
      updateCount();
    }
    if (clickedElement.classList.contains("rejectedBtnInCard")) {
      rejectedSection.appendChild(card);
      state.innerText = "Rejected";
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

activeBtn("allBtn");
showOnly("allSection");

function updateCount() {
  totalJob.innerText = allSection.children.length;
  interviewCount.innerText = interviewSection.children.length;
  rejectedCount.innerText = rejectedSection.children.length;

  // const count = {
  //   all: allSection.children.length,
  //   interview: interviewSection.children.length,
  //   rejected: rejectedSection.children.length,
  // };
  // totalJob.innerText = count.all;
  // interviewCount.innerText = count[interview];
  // rejectedCount.innerText = count[rejected];
}

updateCount();

// function updateEmptySection(currentSection) {
//   if (currentSection.children.length === 0) {
//     emptySection.classList.remove("hidden");
//   } else {
//     emptySection.classList.add("hidden");
//   }
// }

// const emptySection = getElementById("emptySection");
// console.log(allSection.children.length);
