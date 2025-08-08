function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');

  const target = document.getElementById(`section-${sectionId}`);
  if (target) target.style.display = 'block';

  // Hide profile menu when navigating
  document.getElementById("profile-menu-outline").style.display = "none";
}
// Randomly choose between dark and light mode
//const oneOrTwo = Math.random() < 0.5 ? 1 : 2;
//if (oneOrTwo === 1){
  //document.body.classList.toggle("dark");
//}
//else{
  //document.body.classList.toggle("light");
//}

function toggleProfileMenu() {
  const menu = document.getElementById("profile-menu-outline");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
  alert("You have been logged out.");
  // Add actual logout logic here if needed
}

// Toggle Dark Mode
const toggleButton = document.getElementById("theme-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });
}
