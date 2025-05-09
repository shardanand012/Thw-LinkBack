// Sidebar active toggle
document.querySelectorAll('.nav li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.nav li.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
  // Optional future scripts (add toggles, edit mode, etc.)
console.log("Profile page ready!");
