function onLoad() {
  showSection('.take-orders')

  document.querySelectorAll('.order-choices').forEach(orderChoicesDiv => {
    orderChoicesDiv.addEventListener('click', event => {
      if (event.target.tagName === 'P') {
        orderChoicesDiv.querySelectorAll('p').forEach(p => {
          p.style.backgroundColor = ''; 
        });
        event.target.style.backgroundColor = 'hsl(210, 100%, 80%)';
      }
    });
  });


  
  let submitButton = document.querySelector('#submit-order-button')
  
  submitButton.addEventListener('click', () =>{
    document.querySelectorAll('.take-orders p').forEach(p => {
      p.style.backgroundColor = '';
    });
  });
}

currentOffset = 0

function showSection(sectionName) {
  document.querySelectorAll('.nav-p').forEach(navItem => {
    navItem.style.flex = "1";
    navItem.style.fontSize = "1.5em";
  });

  const clickedItem = document.querySelector(`#${sectionName.slice(1)}-nav`);
  clickedItem.style.flex = "1.25";
  clickedItem.style.fontSize = '1.7em';

  const sectionOffsets = {
    ".take-orders": 0,
    ".make-orders": 1,
    ".cash-orders": 2
  };

  let targetOffset = sectionOffsets[sectionName];
  
  if (Math.abs(targetOffset-currentOffset) > 1) {
    document.querySelector(".frieze").style.transition = "transform 1.5s ease-in ";
    document.querySelectorAll(".header-container h1").forEach(header =>{
      header.style.transition = "ease-in 1.5s all";
    })
  }
  else {
    document.querySelector(".frieze").style.transition = "transform 1s ease-in ";
    document.querySelectorAll(".header-container h1").forEach(header =>{
      header.style.transition = "ease-in 1s all";
    })
  }

  document.querySelector(".frieze").style.transform = `translateX(${targetOffset * -33.333}%)`;
  
  document.querySelectorAll(".header-container h1").forEach(header => {
    header.style.top = "-100px";
    header.style.opacity = "0";
  });
  document.querySelector(`#${sectionName.slice(1)}-header`).style.top = "0px";
  document.querySelector(`#${sectionName.slice(1)}-header`).style.opacity = "1";
  currentOffset = targetOffset
}
