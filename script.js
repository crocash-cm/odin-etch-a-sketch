function createGrid (size) {
    if (size > 100)
    {
        return createGrid(100);
    }
    else if (size < 1)
    {
        return createGrid(1);
    }
    const container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row" + i);
        row.setAttribute("class", "row");
        row.setAttribute("style", "display: flex;")
        row.style.width = "800px";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const row = document.getElementById("row" + i);
            const div = document.createElement("div");
            div.setAttribute("class", "cell");
            div.setAttribute("style", "height: auto; width: 200px;")
            row.appendChild(div);
        }
    }   
}

function getGridSize () {
    let choice = prompt("Grid size? e.g. enter 16 for 16x16 grid: ");
    while (choice > 100 | choice < 1)
    {
        choice = prompt("Grid size must be > 0 and < 100. Grid size?");
    }
    return choice;
}

function changeBackground(cell) {
    cell.style.backgroundColor = "pink";
    console.log("background changed.");
}

function mouseHover () {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", () => { changeBackground(cell); });    
    });

}

function main () {
    let cells = document.querySelectorAll(".cell");
    let rows = document.querySelectorAll(".row");
    if (cells != null)
    {
        cells.forEach((cell) => { cell.remove(); });
    }
    if (rows != null)
    {
        rows.forEach((row) => { row.remove(); });
    }
    createGrid(getGridSize());
    mouseHover();
}

let button = document.querySelector(".gridChooserBtn");

button.addEventListener("click", main);





