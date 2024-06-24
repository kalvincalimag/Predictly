function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    sidebar.classList.remove("active");
    main.style.marginLeft = "0";
  }

document.addEventListener("DOMContentLoaded", function () {
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const hamburger = document.querySelector(".menu-toggle");

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
    main.style.marginLeft = "300px";
    sidebar.style.width = "300px";
    sidebar.style.zIndex = "9999";
    } else {
    main.style.marginLeft = "0";
    }
});
});

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