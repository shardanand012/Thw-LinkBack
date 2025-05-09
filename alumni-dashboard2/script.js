const routes = {
    home: 'home.html',
    forum: 'forum.html',
    profile: 'profile.html',
  };
  
  function navigate(pageName) {
    location.hash = pageName; 
  }
  
  function loadPage() {
    const hash = location.hash.slice(1); 
    const page = routes[hash] || routes['home']; 
    fetch(page)
      .then(res => res.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(() => {
        document.getElementById('content').innerHTML = '<h2>😢 Page Not Found</h2>';
      });
  }
  
  window.addEventListener('hashchange', loadPage);
  window.addEventListener('load', loadPage);
  

// TOGGLE-DASHBOARD

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
  });
});
