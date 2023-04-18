let gridSize = 16;
let numOfBoxes = gridSize * gridSize;

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

window.onload = function() {
  createGrid();
  addEventListenersToGridBoxes(); // Add event listeners after creating grid boxes
};

slider.addEventListener('input', function() {
  const value = slider.value;
  let sliderValueText = `GridSize: ${value}x${value}`;
  sliderValue.textContent = sliderValueText;
  gridSize = slider.value;
  clearGrid();
  createGrid();
  addEventListenersToGridBoxes();
});

const grid = document.getElementById('grid');

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    grid.appendChild(gridBox);
  }
}

function clearGrid() {
  grid.innerHTML = '';
}

function addEventListenersToGridBoxes() {
  const gridBoxes = document.querySelectorAll('.gridBox');
  let isMouseDown = false;

  gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('mousedown', () => {
      isMouseDown = true;
      gridBox.style.backgroundColor = 'black'; 
    });

    
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    gridBox.addEventListener('mouseover', () => {
      if (isMouseDown) {
        gridBox.style.backgroundColor = 'black'; 
      }
    });
  });
}

function clearBtn(){
    clearGrid();
    createGrid();
    addEventListenersToGridBoxes();
}