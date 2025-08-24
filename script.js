// Part 1: Event Handling

// Button click -> Alert
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Mouse hover -> Change color
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "blue";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
});

// Typing in input -> Live display
const liveInput = document.getElementById("liveInput");
const displayText = document.getElementById("displayText");
liveInput.addEventListener("keyup", () => {
  displayText.textContent = "You typed: " + liveInput.value;
});

// Part 2: Interactive Elements

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Grab values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Grab error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMessage = document.getElementById("successMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  }

  // If valid -> success message
  if (valid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    successMessage.style.color = "green";
    this.reset();
  }
});
