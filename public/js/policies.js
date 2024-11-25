const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sections = document.querySelectorAll(".section"); // Select all sections

searchBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission
  const searchTerm = searchInput.value.toLowerCase();

  sections.forEach((section) => {
    const heading = section.querySelector(".heading").textContent.toLowerCase();
    const content = section.querySelector(".content").textContent.toLowerCase();

    if (heading.includes(searchTerm) || content.includes(searchTerm)) {
      section.style.display = "block"; // Show the section
    } else {
      section.style.display = "none"; // Hide the section
    }
  });
});
