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
    gridBox.classList.add('visibleGrid');
    grid.appendChild(gridBox);
  }
}

function clearGrid() {
  grid.innerHTML = '';
}

function addEventListenersToGridBoxes() {
  const gridBoxes = document.querySelectorAll('.gridBox');
  const eraserBtn = document.getElementById('eraser')
  const lightBtn = document.getElementById('light')
  const shadeBtn = document.getElementById('shade')
  const fillBtn = document.getElementById('fill')
  const disableBtn=document.getElementById('disableBtn')
  const rainbowBtn=document.getElementById('rainbowBtn')


  let isEraserOn = false;
  let isLightOn = false;
  let isShadeOn = false;
  let isFillOn = false;
  let isRainbowOn = false;

  eraserBtn.addEventListener('click', () => {
    isEraserOn=true;
    isLightOn=false;
    isShadeOn=false;
    isFillOn = false;
    isRainbowOn = false;
    eraserBtn.classList.add('tool-active')
    lightBtn.classList.remove('tool-active')
    shadeBtn.classList.remove('tool-active')
    fillBtn.classList.remove('tool-active')
    rainbowBtn.classList.remove('rainbow-active')
  })

  lightBtn.addEventListener('click', () => {
    isEraserOn=false;
    isLightOn=true;
    isShadeOn=false;
    isFillOn = false;
    isRainbowOn = false;
    lightBtn.classList.add('tool-active')
    eraserBtn.classList.remove('tool-active')
    shadeBtn.classList.remove('tool-active')
    fillBtn.classList.remove('tool-active')
    rainbowBtn.classList.remove('rainbow-active')
  })

  shadeBtn.addEventListener('click', () => {
    isEraserOn=false;
    isLightOn=false;
    isShadeOn=true;
    isFillOn = false;
    isRainbowOn = false;
    shadeBtn.classList.add('tool-active')
    lightBtn.classList.remove('tool-active')
    eraserBtn.classList.remove('tool-active')
    fillBtn.classList.remove('tool-active')
    rainbowBtn.classList.remove('rainbow-active')
  })

  fillBtn.addEventListener('click', () => {
    isEraserOn=false;
    isLightOn=false;
    isShadeOn=false;
    isFillOn = true;
    isRainbowOn = false;
    fillBtn.classList.add('tool-active')
    lightBtn.classList.remove('tool-active')
    eraserBtn.classList.remove('tool-active')
    shadeBtn.classList.remove('tool-active')
    rainbowBtn.classList.remove('rainbow-active')
  })

  disableBtn.addEventListener('click', () => {
    isEraserOn=false;
    isLightOn=false;
    isShadeOn=false;
    isFillOn = false;
    eraserBtn.classList.remove('tool-active')
    lightBtn.classList.remove('tool-active')
    shadeBtn.classList.remove('tool-active')
    fillBtn.classList.remove('tool-active')
  })

  rainbowBtn.addEventListener('click', () => {
    isRainbowOn=true;
    isEraserOn=false;
    isLightOn=false;
    isShadeOn=false;
    isFillOn = false;
    rainbowBtn.classList.add('rainbow-active')
    eraserBtn.classList.remove('tool-active')
    lightBtn.classList.remove('tool-active')
    shadeBtn.classList.remove('tool-active')
    fillBtn.classList.remove('tool-active')
  })

  let isMouseDown = false;
  
  gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('mousedown', () => {
      isMouseDown = true;
      if(isEraserOn===true){
        gridBox.style.backgroundColor = 'aliceblue'; 
      }
      else if(isLightOn===true){
        gridBox.style.filter='brightness(130%)';
      }
      else if(isShadeOn===true){
        gridBox.style.filter='brightness(70%)';
      }
      else if(isFillOn===true){
        gridBoxes.forEach(gridBox => {
          gridBox.style.backgroundColor=colorPickr.value; 
        })
      }
      else if(isRainbowOn===true){
        let R=Math.floor(Math.random()*256)
        let G=Math.floor(Math.random()*256)
        let B=Math.floor(Math.random()*256)
        let randomColor=`rgb(${R}, ${G}, ${B})`

        gridBox.style.backgroundColor=randomColor; 
      }
      else{
        gridBox.style.backgroundColor = colorPickr.value; 
      }
      
    });

    
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    gridBox.addEventListener('mouseover', () => {
      if (isMouseDown===true) {
        if(isEraserOn===true){
          gridBox.style.backgroundColor = 'aliceblue'; 
        }
        else if(isLightOn===true){
          gridBox.style.filter='brightness(130%)';
        }
        else if(isShadeOn===true){
          gridBox.style.filter='brightness(70%)';
        }
        else if(isFillOn===true){
          gridBoxes.forEach(gridBox => {
            gridBox.style.backgroundColor=colorPickr.value; 
          })
        }
        else if(isRainbowOn===true){
          let R=Math.floor(Math.random()*256)
          let G=Math.floor(Math.random()*256)
          let B=Math.floor(Math.random()*256)
          let randomColor=`rgb(${R}, ${G}, ${B})`
  
          gridBox.style.backgroundColor=randomColor; 
        }
        else{
          gridBox.style.backgroundColor = colorPickr.value; 
        }
        
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
const colorBox19=document.getElementById('color-box19')
const colorBox20=document.getElementById('color-box20')
const colorBox21=document.getElementById('color-box21')
const colorBox22=document.getElementById('color-box22')
const colorBox23=document.getElementById('color-box23')
const colorBox24=document.getElementById('color-box24')
const colorBox25=document.getElementById('color-box25')
const colorBox26=document.getElementById('color-box26')
const colorBox27=document.getElementById('color-box27')
const colorBox28=document.getElementById('color-box28')
const colorBox29=document.getElementById('color-box29')
const colorBox30=document.getElementById('color-box30')
const colorBox31=document.getElementById('color-box31')
const colorBox32=document.getElementById('color-box32')
const colorBox33=document.getElementById('color-box33')

colorBox1.addEventListener('click', () => {
    let color="#f31f26";
    colorPickr.value=color;
})

colorBox2.addEventListener('click', () => {
  let color="#f9ee00";
  colorPickr.value=color;
})

colorBox3.addEventListener('click', () => {
  let color="#00a94d";
  colorPickr.value=color;
})

colorBox4.addEventListener('click', () => {
  let color="#01aef0";
  colorPickr.value=color;
})

colorBox5.addEventListener('click', () => {
  let color="#2f3194";
  colorPickr.value=color;
})

colorBox6.addEventListener('click', () => {
  let color="#ee1d96";
  colorPickr.value=color;
})

colorBox7.addEventListener('click', () => {
  let color="#bf1d2c";
  colorPickr.value=color;
})

colorBox8.addEventListener('click', () => {
  let color="#f23c38";
  colorPickr.value=color;
})

colorBox9.addEventListener('click', () => {
  let color="#f4582d";
  colorPickr.value=color;
})

colorBox10.addEventListener('click', () => {
  let color="#fc9716";
  colorPickr.value=color;
})

colorBox11.addEventListener('click', () => {
  let color="#fced36";
  colorPickr.value=color;
})

colorBox12.addEventListener('click', () => {
  let color="#8dc73f";
  colorPickr.value=color;
})

colorBox13.addEventListener('click', () => {
  let color="#39b44a";
  colorPickr.value=color;
})

colorBox14.addEventListener('click', () => {
  let color="#019444";
  colorPickr.value=color;
})

colorBox15.addEventListener('click', () => {
  let color="#006738";
  colorPickr.value=color;
})

colorBox16.addEventListener('click', () => {
  let color="#2bb673";
  colorPickr.value=color;
})

colorBox17.addEventListener('click', () => {
  let color="#01a897";
  colorPickr.value=color;
})

colorBox18.addEventListener('click', () => {
  let color="#20ace2";
  colorPickr.value=color;
})

colorBox18.addEventListener('click', () => {
  let color="#20ace2";
  colorPickr.value=color;
})

colorBox19.addEventListener('click', () => {
  let color="#1876bc";
  colorPickr.value=color;
})

colorBox20.addEventListener('click', () => {
  let color="#293993";
  colorPickr.value=color;
})

colorBox21.addEventListener('click', () => {
  let color="#272561";
  colorPickr.value=color;
})

colorBox22.addEventListener('click', () => {
  let color="#25205d";
  colorPickr.value=color;
})

colorBox23.addEventListener('click', () => {
  let color="#61308c";
  colorPickr.value=color;
})

colorBox24.addEventListener('click', () => {
  let color="#90278e";
  colorPickr.value=color;
})

colorBox25.addEventListener('click', () => {
  let color="#764c2d";
  colorPickr.value=color;
})

colorBox26.addEventListener('click', () => {
  let color="#603715";
  colorPickr.value=color;
})

colorBox27.addEventListener('click', () => {
  let color="#3a3a3c";
  colorPickr.value=color;
})

colorBox28.addEventListener('click', () => {
  let color="#59595b";
  colorPickr.value=color;
})

colorBox29.addEventListener('click', () => {
  let color="#6d6e71";
  colorPickr.value=color;
})

colorBox30.addEventListener('click', () => {
  let color="#808285";
  colorPickr.value=color;
})

colorBox31.addEventListener('click', () => {
  let color="#939498";
  colorPickr.value=color;
})

colorBox32.addEventListener('click', () => {
  let color="#a9a9ad";
  colorPickr.value=color;
})

colorBox33.addEventListener('click', () => {
  let color="#d2d3d5";
  colorPickr.value=color;
})




const checkBox=document.getElementById('checkbox1')
 checkBox.addEventListener('change', function(event){
  const allBoxes=document.getElementsByClassName('gridBox')
  if(event.target.checked===true){
    for(let i=0; i<allBoxes.length;i++){
      allBoxes[i].classList.add('visibleGrid')
    }
  }
  else{
    for(let i=0; i<allBoxes.length;i++){
      allBoxes[i].classList.remove('visibleGrid')
    }
  }
 })

 const downloadBtn=document.getElementById('downloadBtn')
 

 // Import the html2canvas library
var html2canvas = window.html2canvas || {};

// Add a click event listener to the download button
downloadBtn.addEventListener('click', function(){
  takeScreenshot();
});

function takeScreenshot() {
  // Get the div element to capture
  var gridScreenshot = document.getElementById('grid');

  // Use html2canvas to capture the content of the div element as an image
  html2canvas(gridScreenshot).then(function(canvas) {
    // Create a download link
    var link = document.createElement('a');

    // Set the download link's href to the data URL of the canvas image
    link.href = canvas.toDataURL('image/png');

    // Set the download link's download attribute to the desired filename
    link.download = 'sketch.png';

    // Trigger the download
    link.click();
  });
}











