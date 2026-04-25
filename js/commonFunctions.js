function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}
function getElementsByClassName(id) {
  const element = document.getElementsByClassName(id);
  return element;
}

function showOnly(id) {
  allSection.classList.add("hidden");
  interviewSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}

function activeBtn(id) {
  allBtn.classList.remove("activeBtn");
  interviewBtn.classList.remove("activeBtn");
  rejectedBtn.classList.remove("activeBtn");

  const selected = document.getElementById(id);
  selected.classList.add("activeBtn");

  if (selected == allBtn) {
    sectionJobCount.innerText = updateCount();
    if (allSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  } else if (selected == interviewBtn) {
    if (interviewSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  } else {
    if (rejectedSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    } else {
      emptySection.classList.add("hidden");
    }
  }
}

function activeBtnAndShowOnly(sectionId, btnId) {
  showOnly(sectionId);
  activeBtn(btnId);

  // const currentSection = document.getElementById(sectionId);
  // updateEmptySection(currentSection);
}
