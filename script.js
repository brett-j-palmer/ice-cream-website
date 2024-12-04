function showSection(sectionName) {    
  document.querySelectorAll('.section').forEach (
    sectionDiv => {
      sectionDiv.style.display = "flex";
    }
  )
 document.querySelector(sectionName).style.display = "flex";
 
  document.querySelectorAll('.navbar p').forEach(navItem => {
    navItem.style.flex = "1";
    navItem.style.fontSize = "1.5em";
  });

  const clickedItem = document.querySelector(`#${sectionName.slice(1)}-nav`);
  clickedItem.style.flex = "1.25";
  clickedItem.style.fontSize = '1.75em';
  
}

// function loadTake() {
//   fetch("take-orders.html")
//   .then(
//     response => response.text()
//   )
//   .then(
//     text => document.querySelector(".take-orders").innerHTML = text
//   )
//   showSection('.take-orders');
// }

// function loadMake() {
//   fetch("make-orders.html")
//   .then(
//     response => response.text()
//   )
//   .then(
//     text => document.querySelector(".order-checklist").innerHTML = text
//   )
//   showSection('.make-orders');
// }

// function loadCash() {
//   fetch("cash-orders.html")
//   .then(
//     response => response.text()
//   )
//   .then(
//     text => document.querySelector(".order-totals").innerHTML = text
//   )
//   showSection('.cash-orders');
// }

