const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let colorPicker = document.getElementById('colorPicker');
let currentColor = colorPicker.value;

let sizePicker = document.getElementById('sizePicker');
let currentSize = sizePicker.value;

const rubberBtn = document.getElementById('rubberBtn');
let isRubber = false

const clearBtn = document.getElementById('clearBtn');


let isDrawing = false;

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
})

canvas.addEventListener('mousemove', (event) =>{
    if(isDrawing){
        ctx.strokeStyle = isRubber ? 'white' : currentColor;
        ctx.lineWidth = currentSize;
        ctx.globalCompositeOperation = isRubber ? 'destination-out' : 'source-over';

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
})

canvas.addEventListener('mouseup', (event) => {
    isDrawing = false;
})

canvas.addEventListener('mouseleave', (event) => {
    isDrawing = false;
})


colorPicker.addEventListener('input', (event) => {
    currentColor = event.target.value;
    isRubber = false;
    rubberBtn.classList.remove('active');
})

sizePicker.addEventListener('input', (event) => {
    currentSize = event.target.value;
})

rubberBtn.addEventListener('click', () => {
    isRubber = !isRubber;
    rubberBtn.classList.toggle('active');
})

clearBtn.addEventListener('click', () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
function savePNG(){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'canvas.png';
    link.click();
}
saveBtn.addEventListener('click', () =>{
    localStorage.setItem('canvasImage', canvas.toDataURL());
    savePNG();
})


loadBtn.addEventListener('click', () => {
    const img = new Image();
    img.src = localStorage.getItem('canvasImage');
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    }
})


































































// ctx.fillStyle = 'blue';
// ctx.fillRect(10, 10, 50, 50);

// ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.lineTo(100, 150);
// ctx.lineTo(200, 150);
// ctx.closePath();
// ctx.fillStyle = 'red';
// ctx.fill();


// ctx.beginPath();
// ctx.arc(250, 250, 50, 0, 3 * Math.PI / 2);
// ctx.fillStyle = 'green';
// ctx.fill();

// ctx.strokeStyle = 'black';

// ctx.strokeRect(50, 50, 100, 100)

// localStorage.setItem('canvasImg', canvas.toDataURL());
// const img = new Image();
// img.src = localStorage.getItem('canvasImg');
// img.onload = () => {
//     ctx.drawImage(img, 0 , 0)
// }


// ctx.beginPath();
// ctx.moveTo(200, 250);
// ctx.lineTo(250, 200);
// ctx.lineTo(300, 250);
// ctx.lineTo(250, 300);
// ctx.lineTo(200, 250);
// ctx.closePath();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 5;
// ctx.stroke();

// for(let i = 0; i < 100; i++){
//     for(let j = 0; j < 100; j++){
//         ctx.fillStyle = `rgb(
//             ${Math.floor(255 - 2.8 * i)},
//             ${Math.floor(255 - 5 * i)},
//             ${Math.floor(255 - 2 * i)}
//         )`
//         ctx.fillRect(j * 5, i * 5,5, 5)
//     }
// }

