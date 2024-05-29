// Make script delay until the DOM has completely loaded so script can be called in head
window.onload = function() {
const container = document.getElementById('container')
let newGridBtn = document.getElementById('newGridBtn')

function makeRows(rows, cols) {
    // Clear existing grid when makeRows is called
    container.innerHTML = " "
    
    // Create css variables to dynamically set the number of rows and columns
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // create a loop to create new divs based on the numbers given
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.innerText = " "
        container.appendChild(cell).className = "grid-item"
        // Create an event listen to color each grid item on hover
        // Imitates the trail left on an etch-a-sketch
        cell.addEventListener('mouseover', e => e.target.classList.add('hoverColor'))
    }
}

function newGrid() {
        

        // Prompt the user to enter the desired number of rows and columns
        let rows = prompt("Enter number of rows: ")
        let cols = prompt("Enter number of columns: ")

        rows = parseInt(rows)
        cols = parseInt(cols)

        // Create conditional statement that will require an input between 1 and 100
        if (isNaN(rows) || isNaN(cols) || 100 >= rows <= 0 || 100 >= cols <= 0) {
            alert("Please enter numbers between 1 and 100 rows and columns.");
            return;
        }
        
        makeRows(rows, cols) 
    
    }
    newGridBtn.onclick = newGrid

    // Initial grid state
    makeRows(16,16)
}

