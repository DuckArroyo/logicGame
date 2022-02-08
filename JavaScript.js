// Pull the modal
var modal = document.getElementById('prompts');

// modal trigger button
var startGameBtn = document.getElementById('start');

// close modal button
var close = document.getElementsByClassName('close')[0];

// Display modal when prompts button is clicked.
startGameBtn.onclick = function () {
  modal.style.display = 'block';
};

// Close modal when close button is clicked
close.onclick = function () {
  modal.style.display = 'none';
};

// unfocus "close modal" when user clicks outside modal
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};
