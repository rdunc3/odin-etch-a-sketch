document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#grid');

    // Creating a 16x16 grid to place squares in
    for (let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++){
            const square = document.createElement('span');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            // console.log("Over a Square");
            square.style.backgroundColor = 'black';
        });
    });

});