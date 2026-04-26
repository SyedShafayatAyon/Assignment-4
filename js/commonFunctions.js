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
    updateCount();
  } else if (selected == interviewBtn) {
    updateCount();
  } else {
    updateCount();
  }
}

function activeBtnAndShowOnly(sectionId, btnId) {
  showOnly(sectionId);
  activeBtn(btnId);
}
