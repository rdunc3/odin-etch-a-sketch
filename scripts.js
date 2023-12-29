document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#grid');
    const btnGrid = document.querySelector('#btnGrid');

    // Creating a 16x16 grid to place squares in
    createGrid(16);

    const squares = document.querySelectorAll('.square');

    grid.addEventListener('mouseover', function(event) {
        const target = event.target;
        if (target.classList.contains('square')) {
            // console.log("Over a Square");
            target.style.backgroundColor = 'black';
        }
    });

    btnGrid.addEventListener('click', function() {
        let squaresPerSide = 0;
        do{
            squaresPerSide = parseInt(window.prompt("Input new number of squares per side (Max: 100)"));
        }while(squaresPerSide <= 1 || squaresPerSide > 100);
        grid.innerHTML = "";
        createGrid(squaresPerSide);
    });

    function createGrid(squaresPerSide){
        for (let i = 0; i < squaresPerSide; i++){
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < squaresPerSide; j++){
                const square = document.createElement('span');
                square.classList.add('square');
                row.appendChild(square);
            }
            grid.appendChild(row);
        }
    }
});