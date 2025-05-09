// Step 1: Define routes (mapping page names to HTML files)
const routes = {
    dashboard: 'dashboard.html',
    forum: 'forum.html',
    profile: 'profile.html',
    // Add more if needed
  };
  
  // Step 2: Button click par hash change karo
  function navigate(pageName) {
    location.hash = pageName;  // changes URL to #home, #about, etc.
  }
  
  // Step 3: Jab hash change ho ya page load ho — HTML load karo
  function loadPage() {
    const hash = location.hash.slice(1); // remove '#' from URL
    const page = routes[hash] || routes['dashboard']; // default to home page
  
    fetch(page)
      .then(res => res.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(() => {
        document.getElementById('content').innerHTML = '<h2>😢 Page Not Found</h2>';
      });
  }
  
  // Step 4: Load page jab hash change ho ya page load ho
  window.addEventListener('hashchange', loadPage);
  window.addEventListener('load', loadPage);
  