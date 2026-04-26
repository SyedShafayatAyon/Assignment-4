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
  let allSectionLength = allSection.children.length;
  let interviewSectionLength = interviewSection.children.length;
  let rejectedSectionLength = rejectedSection.children.length;
  totalJob.innerText = allSectionLength;
  interviewCount.innerText = interviewSectionLength;
  rejectedCount.innerText = rejectedSectionLength;

  if (allBtn.classList.contains("activeBtn")) {
    sectionJobCount.innerText = allSectionLength;
    if (allSectionLength < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  } else if (interviewBtn.classList.contains("activeBtn")) {
    sectionJobCount.innerText = interviewSectionLength;
    if (interviewSectionLength < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  } else if (rejectedBtn.classList.contains("activeBtn")) {
    sectionJobCount.innerText = rejectedSectionLength;
    if (rejectedSectionLength < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  }
}
updateCount();
