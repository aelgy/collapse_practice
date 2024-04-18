function collapse() {
  const toggle = event.target.nextElementSibling;
  const add = event.target.children[1];
  console.log(add)
  if (toggle.style.display == "none") {
    toggle.style.display = "block";
    // add.classList.remove('fa-plus');
    // add.classList.add('fa-square-minus');
  } else if (toggle.style.display == "block") {
    toggle.style.display = "none";
    // add.classList.remove('fa-square-minus');
    // add.classList.add('fa-plus');
  }
}

function collapseI() {
  const toggle = event.target.closest("div").nextElementSibling;
  const add = event.target;
  if (toggle.style.display == "none") {
    toggle.style.display = "block";
    // add.classList.remove('fa-plus');
    // add.classList.add('fa-square-minus');
  } else if (toggle.style.display == "block") {
    toggle.style.display = "none";
    // add.classList.remove('fa-square-minus');
    // add.classList.add('fa-plus');
  }
}