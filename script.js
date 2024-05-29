// Make script delay until the DOM has completely loaded so script can be called in head
window.onload = function() {
const container = document.getElementById('container')
let newGridBtn = document.getElementById('newGridBtn')

function makeGrid(cells) {
    // Clear existing grid when makeGrid is called
    container.innerHTML = " "

    // Create a loop to create new divs based on the numbers given
    for (let i = 0; i < cells; i++) {
        let row = document.createElement("div");
        row.className = "row";        
        if (i === 0) row.classList.add('first-row');
        if (i === cells - 1) row.classList.add('last-row');
        container.appendChild(row);

        for (let c = 0; c < cells; c++) {
            let col = document.createElement("div");
            col.className = "col";
            if (c === 0) col.classList.add('first-col');
            if (c === cells - 1) col.classList.add('last-col');
            row.appendChild(col);
            
            // Create an event listener to color each grid item on hover
            // Imitates the trail left on an etch-a-sketch
            col.addEventListener('mouseover', e => e.target.classList.add('hoverColor'));
        }
    }
}

function newGrid() {
        

        // Prompt the user to enter the desired number of rows and columns
        let dimensions = prompt("Enter board dimensions: ")

        let cells = parseInt(dimensions)

        // Create conditional statement that will require an input between 1 and 100
        if (isNaN(cells) || cells > 100 || cells < 1 ) {
            alert("Please enter numbers between 1 and 100 rows and columns.");
            return;
        }
        
        makeGrid(cells) 
    
    }
    newGridBtn.onclick = newGrid

    // Initial grid state
    makeGrid(16)
}

