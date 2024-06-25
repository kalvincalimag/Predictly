// FAQ Reveal Answer on Click
document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function(question) {
      question.addEventListener("click", function() {
          const answer = this.nextElementSibling;

          if (answer.style.display === "block") {
              answer.style.display = "none";
          } else {
              answer.style.display = "block";
          }
      });
  });
});

// Open Feedback Modal 
document.getElementById('open-feedback-btn').addEventListener('click', function() {
  document.getElementById('feedbackModal').style.display = 'flex';
});

// Close Feedback Modal 
function closeFeedbackModal() {
  document.getElementById('feedbackModal').style.display = 'none';
}

// Send Feedback Modal  
function sendFeedback() {
  var form = document.getElementById('feedbackForm');
  var formData = new FormData(form);

  fetch('/feedback/', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
      closeFeedbackModal();
  })
  .catch(error => {
      console.error('Error:', error);
  });
}