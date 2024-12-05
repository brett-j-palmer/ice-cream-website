function showSection(sectionName) {
  document.querySelectorAll('.navbar p').forEach(navItem => {
    navItem.style.flex = "1";
    navItem.style.fontSize = "1.6em";
  });

  const clickedItem = document.querySelector(`#${sectionName.slice(1)}-nav`);
  clickedItem.style.flex = "1.25";
  clickedItem.style.fontSize = '1.95em';

  const sectionOffsets = {
    ".take-orders": 0,
    ".make-orders": 1,
    ".cash-orders": 2
  };

  const targetOffset = sectionOffsets[sectionName];
  
  document.querySelector(".frieze").style.transform = `translateX(${targetOffset * -33.333}%)`;
  
  document.querySelectorAll(".header-container h1").forEach(header => {
    header.style.top = "-100px";
    header.style.opacity = "0";
  });
  document.querySelector(`#${sectionName.slice(1)}-header`).style.top = "0px";
  document.querySelector(`#${sectionName.slice(1)}-header`).style.opacity = "1";
}
