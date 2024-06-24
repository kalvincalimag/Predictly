const searchInput = document.getElementById('faq-search');
    
// FAQ Search Filter 
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.trim().toLowerCase();
  const faqItems = document.querySelectorAll('.faq');
  let hasMatch = false;

  faqItems.forEach(function (faq) {
      const question = faq.querySelector('.question').textContent.toLowerCase();
      const answer = faq.querySelector('.answer').textContent.toLowerCase();
      const isVisible = question.includes(searchText) || answer.includes(searchText);

      faq.style.display = isVisible ? 'block' : 'none';

      if (isVisible) {
          hasMatch = true;
      }
  });

  const noMatchMessage = document.getElementById('no-match-message');
  if (!hasMatch) {
      noMatchMessage.style.display = 'block';
  } else {
      noMatchMessage.style.display = 'none';
  }
});


// Glossary Search Filter 
function filterGlossary() {
  const input = document.getElementById("glossary-search");
  const filter = input.value.toLowerCase();
  const glossaryItems = document.querySelectorAll(".glossary-list li");
  let hasMatch = false;

  glossaryItems.forEach(function (item) {
      const text = item.textContent || item.innerText;
      const isVisible = text.toLowerCase().includes(filter);

      item.style.display = isVisible ? "" : "none";

      if (isVisible) {
          hasMatch = true;
      }
  });

  const noMatchMessage = document.getElementById('no-glossary-match-message');
  if (!hasMatch) {
      noMatchMessage.style.display = 'block';
  } else {
      noMatchMessage.style.display = 'none';
  }
}
