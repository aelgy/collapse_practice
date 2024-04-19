function collapse() {
  const color = event.target.closest("div")
  const toggle = event.target.closest("div").nextElementSibling;
  const add = event.target.closest("div").lastElementChild
  if (toggle.classList.contains('slide-down')) {
    toggle.classList.remove('slide-down');
    toggle.classList.add('slide-up');
    add.classList.remove('transform');
    color.classList.remove('color');
  } else if (toggle.classList.contains('slide-up')) {
    toggle.classList.remove('slide-up');
    toggle.classList.add('slide-down');
    add.classList.add('transform');
    color.classList.add('color');
  }
}