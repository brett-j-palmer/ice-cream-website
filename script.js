function showSection(sectionName) {
  document.querySelectorAll('.navbar p').forEach(navItem => {
    navItem.style.flex = "1";
    navItem.style.fontSize = "1.5em";
  });

  const clickedItem = document.querySelector(`#${sectionName.slice(1)}-nav`);
  clickedItem.style.flex = "1.25";
  clickedItem.style.fontSize = '1.75em';

  const sectionOffsets = {
    ".take-orders": 0,
    ".make-orders": 1,
    ".cash-orders": 2
  };

  const targetOffset = sectionOffsets[sectionName];
  
  document.querySelector(".frieze").style.transform = `translateX(${targetOffset * -33.333}%)`;
}
