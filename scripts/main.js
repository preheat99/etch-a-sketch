let gridContainer;
function createMainDiv() {

    let mainDivElement = document.querySelector('.main-div');

    gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    gridContainer.style.display = 'grid';
    gridContainer.style.width = "400px";
    gridContainer.style.height = "400px";
    mainDivElement.appendChild(gridContainer);
    gridContainer.style.boxShadow = "0px 0px 5px 5px rgba(0,0,0,0.5)";
    gridContainer.style.border = "4px solid lightgrey";
    gridContainer.style.backgroundColor = "chartreuse";
}
createMainDiv();

function gridItemTrail(e) {
    let randomRed = Math.random()*256;
    let randomGreen = Math.random()*256;
    let randomBlue = Math.random()*256;
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
function createGridItem(numberOfSquares = 4) {
    if (gridContainer.hasChildNodes()) {
        let gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            gridContainer.removeChild(item);
        });
    }
    for (let i = 1; i <= numberOfSquares**2; i++) {
        gridContainer.style.gridTemplateRows = `repeat( ${numberOfSquares}, minmax(1px,1fr) )`;
        gridContainer.style.gridTemplateColumns = `repeat( ${numberOfSquares}, minmax(1px,1fr) )`;
        let newGridItem = document.createElement('div');
        newGridItem.classList.add("grid-item");
        newGridItem.addEventListener("mouseenter", gridItemTrail);
        newGridItem.style.border = "1px solid black";
        newGridItem.style.display = 'flex';
        newGridItem.style.alignItems = 'center';
        newGridItem.style.justifyContent = 'center';
        //newGridItem.textContent = 'item'+i;
        gridContainer.appendChild(newGridItem);
    }
}
createGridItem();

function givePrompt() {
    let numberOfSquares = prompt("Enter number of squares (limit is 100): ");
    if(numberOfSquares) {
        if (numberOfSquares <= 100) {
            createGridItem(numberOfSquares);
        } else if (numberOfSquares > 100){
            alert("Input > 100 not allowed");
            givePrompt()   ;
        }
    } else {
        alert("Please provide some input first");
        givePrompt();
    }
}
function clearButtonClick() {
    let allGridItems = document.querySelectorAll('.grid-item');
    allGridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
    givePrompt();
}
let clearButtonElement = document.querySelector('button');
clearButtonElement.addEventListener('click',clearButtonClick);
