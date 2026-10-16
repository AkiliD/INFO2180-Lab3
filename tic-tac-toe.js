document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach(square => {
        square.classList.add("square");
    });
});