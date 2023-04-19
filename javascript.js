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
      gridBox.style.backgroundColor = colorPickr.value; 
    });

    
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    gridBox.addEventListener('mouseover', () => {
      if (isMouseDown) {
        gridBox.style.backgroundColor = colorPickr.value; 
      }
    });
  });
}

function clearBtn(){
    clearGrid();
    createGrid();
    addEventListenersToGridBoxes();
}

const colorPickr=document.getElementById('color-picker')

const colorBox1=document.getElementById('color-box1')
const colorBox2=document.getElementById('color-box2')
const colorBox3=document.getElementById('color-box3')
const colorBox4=document.getElementById('color-box4')
const colorBox5=document.getElementById('color-box5')
const colorBox6=document.getElementById('color-box6')
const colorBox7=document.getElementById('color-box7')
const colorBox8=document.getElementById('color-box8')
const colorBox9=document.getElementById('color-box9')
const colorBox10=document.getElementById('color-box10')
const colorBox11=document.getElementById('color-box11')
const colorBox12=document.getElementById('color-box12')
const colorBox13=document.getElementById('color-box13')
const colorBox14=document.getElementById('color-box14')
const colorBox15=document.getElementById('color-box15')
const colorBox16=document.getElementById('color-box16')
const colorBox17=document.getElementById('color-box17')
const colorBox18=document.getElementById('color-box18')

colorBox1.addEventListener('click', () => {
    let color="#FF0000";
    colorPickr.value=color;
})

colorBox2.addEventListener('click', () => {
  let color="#00FF00";
  colorPickr.value=color;
})

colorBox3.addEventListener('click', () => {
  let color="#0000FF";
  colorPickr.value=color;
})

colorBox4.addEventListener('click', () => {
  let color="#FFFF00";
  colorPickr.value=color;
})

colorBox5.addEventListener('click', () => {
  let color="#FF00FF";
  colorPickr.value=color;
})

colorBox6.addEventListener('click', () => {
  let color="#00FFFF";
  colorPickr.value=color;
})

colorBox7.addEventListener('click', () => {
  let color="#FFA500";
  colorPickr.value=color;
})

colorBox8.addEventListener('click', () => {
  let color="#800080";
  colorPickr.value=color;
})

colorBox9.addEventListener('click', () => {
  let color="#008000";
  colorPickr.value=color;
})

colorBox10.addEventListener('click', () => {
  let color="#800000";
  colorPickr.value=color;
})

colorBox11.addEventListener('click', () => {
  let color="#808000";
  colorPickr.value=color;
})

colorBox12.addEventListener('click', () => {
  let color="#008080";
  colorPickr.value=color;
})

colorBox13.addEventListener('click', () => {
  let color="#C0C0C0";
  colorPickr.value=color;
})

colorBox14.addEventListener('click', () => {
  let color="#808080";
  colorPickr.value=color;
})

colorBox15.addEventListener('click', () => {
  let color="#FFC0CB";
  colorPickr.value=color;
})

colorBox16.addEventListener('click', () => {
  let color="#00FF7F";
  colorPickr.value=color;
})

colorBox17.addEventListener('click', () => {
  let color="#FFD700";
  colorPickr.value=color;
})

colorBox18.addEventListener('click', () => {
  let color="#ADFF2F";
  colorPickr.value=color;
})



