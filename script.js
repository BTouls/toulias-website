fetch('header.html')
  .then(response => {
    if (!response.ok) throw new Error('Δεν βρέθηκε header.html');
    return response.text();
  })
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
  })
  .catch(err => console.error('Σφάλμα φόρτωσης header:', err));


fetch('footer.html')
  .then(response => {
    if (!response.ok) throw new Error('Δεν βρέθηκε footer.html');
    return response.text();
  })
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;

  
    const today = new Date();
    const formatted = today.toLocaleDateString('el-GR');
    const dateElement = document.getElementById('today-date');
    if (dateElement) dateElement.textContent = formatted;
  })
  .catch(err => console.error('Σφάλμα φόρτωσης footer:', err));



function setBackgroundByTime() {
  const hour = new Date().getHours();
  let backgroundColor = "";
if (hour >= 5 && hour < 12) {
  backgroundColor = "#FFEEC9"; 
} else if (hour >= 12 && hour < 18) {
  backgroundColor = "#F1F5F9";
} else {
  backgroundColor = "#1E1E2E"; 
  document.body.style.color = "#E2E8F0";
}
  document.body.style.backgroundColor = backgroundColor;
}


function setGreetingIfIndex() {
  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  if (!isIndex) return;

  const greeting = document.getElementById("greeting-message");
  if (!greeting) return;

  const hour = new Date().getHours();
  let message = "";

  if (hour >= 5 && hour < 12) {
    message = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  greeting.textContent = message;
}


setBackgroundByTime();
setGreetingIfIndex();