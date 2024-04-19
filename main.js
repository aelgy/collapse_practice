function collapse() {
  const toggle = event.target.nextElementSibling;
  if (toggle.classList.contains('slide-down')) {
    toggle.classList.remove('slide-down');
    toggle.classList.add('slide-up')
  } else if (toggle.classList.contains('slide-up')) {
    toggle.classList.remove('slide-up');
    toggle.classList.add('slide-down');
  } else {
    toggle.classList.add('slide-down');
  }
}

function collapseI() {
  const toggle = event.target.closest("div").nextElementSibling;
  const add = event.target;
  if (toggle.classList.contains('slide-down')) {
    toggle.classList.remove('slide-down');
    toggle.classList.add('slide-up')
  } else if (toggle.classList.contains('slide-up')) {
    toggle.classList.remove('slide-up');
    toggle.classList.add('slide-down');
  } else {
    toggle.classList.add('slide-down');
  }
}