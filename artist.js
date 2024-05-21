JavaScript
let slideIndex = 1;
showSlides(slideIndex);

const shelves = document.getElementsByClassName("shelf"); // Get all shelf elements

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  // Hide all shelves and reset book positions
  for (i = 0; i < shelves.length; i++) {
    shelves[i].style.display = "none";
    const books = shelves[i].querySelectorAll(".book"); // Get all books within the shelf
    for (const book of books) {
      book.classList.remove("flipped"); // Remove any existing flipped class
    }
  }

  // Handle slide index out of bounds
  if (n > shelves.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = shelves.length;}

  // Display the current shelf and flip the front book
  shelves[slideIndex-1].style.display = "block";
  shelves[slideIndex-1].querySelector(".front").classList.add("flipped"); // Flip the front book of the current shelf
}

// Navigation button functionality (optional)
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (prevBtn) {
  prevBtn.addEventListener("click", () => plusSlides(-1));
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => plusSlides(1));
}