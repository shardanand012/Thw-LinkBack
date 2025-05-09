
   /*
   function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.add('hidden-section');
    sec.classList.remove('visible-section');
  });
  document.getElementById(id).classList.remove('hidden-section');
  document.getElementById(id).classList.add('visible-section');

  document.querySelectorAll('.nav li').forEach(li => li.classList.remove('active'));
  const navItems = document.querySelectorAll('.nav li');
  navItems.forEach(li => {
    if (li.textContent.trim().toLowerCase() === id.toLowerCase()) {
      li.classList.add('active');
    }
  });
}

*/

// Function to show a section (Dashboard, Profile, or dynamically loaded Forum)
function showSection(sectionId) {
  const sections = document.querySelectorAll('.main-content > section');
  sections.forEach((section) => {
    section.classList.remove('visible-section');
    section.classList.add('hidden-section');
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.classList.remove('hidden-section');
    active.classList.add('visible-section');
  }
}

function loadForumPage() {
  // Check if forum section already exists
  let forumSection = document.getElementById('forum');

  if (!forumSection) {
    fetch('forum.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');

        // Extract only the section with id="forum"
        const newForumSection = htmlDoc.querySelector('#forum');

        if (newForumSection) {
          const mainContent = document.getElementById('main-content');
          mainContent.appendChild(newForumSection);
          showSection('forum');  // Show forum section after adding it
        }
      })
      .catch(error => console.error('Error loading forum:', error));
  } else {
    showSection('forum'); // If already loaded, just show it
  }
}
