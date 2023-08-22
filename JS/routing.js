const search = document.querySelector(".search")

search.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      window.location.href = "./searching-results.html";
  }
});