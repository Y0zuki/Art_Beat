document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');

    // Check if dark mode is enabled and set the toggle accordingly
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Event listener for theme toggle switch
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

function darkmode(){
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode') === 'true');
}

const profileNameInput = document.getElementById('profileNameInput');
const displayName = document.getElementById('displayName');

profileNameInput.addEventListener('keyup', function() {
  displayName.textContent = this.value; // Updates display name on every keyup
});



// Get references to elements
const editableBio = document.getElementById("editable-bio");
const saveButton = document.getElementById("save-bio");
const userBio = document.getElementById("user-bio");
const saveMessage = document.getElementById("save-message");

// Function to update user bio content
function updateUserBio() {
  const bioContent = editableBio.value.trim();
  userBio.textContent = "Bio: " + bioContent;
}

// Update user bio on page load (optional)
updateUserBio();

// Add event listener to save button
saveButton.addEventListener("click", function() {
  updateUserBio();
  // Simulate saving bio content (replace with actual saving logic)
  console.log("Bio content saved:", editableBio.value);
  saveMessage.classList.remove("hidden");
  setTimeout(function() {
    saveMessage.classList.add("hidden");
  }, 2000); // Hide message after 2 seconds
});

// Add event listener to editable bio for live updates
editableBio.addEventListener("input", updateUserBio);