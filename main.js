function firstCollapse() {
  const first = document.getElementById("firstQuestion");
  const add = document.getElementById("first")
  if (first.style.display == "none") {
    first.style.display = 'block';
    add.classList.remove('fa-plus');
    add.classList.add('fa-square-minus');
  } else if (first.style.display == 'block') {
    first.style.display = "none"
    add.classList.remove('fa-square-minus');
    add.classList.add('fa-plus');
  }
}

function secondCollapse() {
  const second = document.getElementById("secondQuestion");
  const add = document.getElementById("second")
  if (second.style.display == "none") {
    second.style.display = 'block';
    add.classList.remove('fa-plus');
    add.classList.add('fa-square-minus');
  } else if (second.style.display == 'block') {
    second.style.display = "none"
    add.classList.remove('fa-square-minus');
    add.classList.add('fa-plus');
  }
}

function thirdCollapse() {
  const third = document.getElementById("thirdQuestion");
  const add = document.getElementById("third")
  if (third.style.display == "none") {
    third.style.display = 'block';
    add.classList.remove('fa-plus');
    add.classList.add('fa-square-minus');
  } else if (third.style.display == 'block') {
    third.style.display = "none"
    add.classList.remove('fa-square-minus');
    add.classList.add('fa-plus');
  }
}

function forthCollapse() {
  const forth = document.getElementById("forthQuestion");
  const add = document.getElementById("forth")
  if (forth.style.display == "none") {
    forth.style.display = 'block';
    add.classList.remove('fa-plus');
    add.classList.add('fa-square-minus');
  } else if (forth.style.display == 'block') {
    forth.style.display = "none"
    add.classList.remove('fa-square-minus');
    add.classList.add('fa-plus');
  }
}

function fifthCollapse() {
  const fifth = document.getElementById("fifthQuestion");
  const add = document.getElementById("fifth")
  if (fifth.style.display == "none") {
    fifth.style.display = 'block';
    add.classList.remove('fa-plus');
    add.classList.add('fa-square-minus');
  } else if (fifth.style.display == 'block') {
    fifth.style.display = "none"
    add.classList.remove('fa-square-minus');
    add.classList.add('fa-plus');
  }
}