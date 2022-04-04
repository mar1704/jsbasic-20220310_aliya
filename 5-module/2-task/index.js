function toggleText() {
  let Button = document.querySelector('.toggle-text-button');
  let DivToggle = document.getElementById('text');
  function toggleElem() {
    if(DivToggle.hasAttribute('hidden'))
      DivToggle.hidden = false;
    else DivToggle.hidden = true;
  }
  Button.addEventListener("click", toggleElem);
}
