/*We use const for any variable that has to do with dates because we declare it once in the code and then it updates automatically, while for the others, like backgroundColor,
 we use let because depending on the time we need to reassign it.*/

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

    //We get the datε
    const today = new Date();
    //We format it in the Greek format.
    const formatted = today.toLocaleDateString('el-GR');
//It searches the HTML document for an element with id="τoday-dat
    const dateElement = document.getElementById('today-date');
    dateElement.textContent = formatted;
  })
    .catch(err => {
    const container = document.getElementById('container');
    if (container) container.textContent = 'Status: Error';
    console.error('Σφάλμα φόρτωσης footer:', err);
  });

//A process that changes the color for us
function setBackgroundByTime() {
  //We get the time from the specific date.
  const hour = new Date().getHours();
 // We declare an empty background color that will change depending on the time. It is a string.
  let backgroundColors = "";
  //Depending on the time, we get a different color code in string form
if (hour >= 5 && hour < 12) {
  backgroundColors = "#FFEEC9"; 
} else if (hour >= 12 && hour < 18) {
  backgroundColors = "#F1F5F9"; 
} else {
  backgroundColors = "#1E1E2E";
  //At night, we also change the text color because it wouldn’t be visible otherwise
  document.body.style.color = "#E2E8F0"; 
}
//Here, the string is converted into a color for the background.
  document.body.style.backgroundColor = backgroundColors;
}

//A function that shows a greeting
function setGreetingIfIndex() {
//It searches the HTML document for an element with id="greeting-message"
  const greeting = document.getElementById("greeting-message");

  //We get the time from the specific date.
  const hour = new Date().getHours();
  let message = "";
//Depending on the time, it displays the corresponding message.
  if (hour >= 5 && hour < 12) {
    message = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  greeting.textContent = message;
}

//We call the processes
setBackgroundByTime();
setGreetingIfIndex();