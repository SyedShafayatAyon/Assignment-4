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
}

function activeBtnAndShowOnly(id1, id2) {
  showOnly(id1);
  activeBtn(id2);
}

function del(id) {
  const element = document.getElementsByClassName(id);
  console.log(element.parentNode.parentNode);
  // element.removeAttribute(id);
}
