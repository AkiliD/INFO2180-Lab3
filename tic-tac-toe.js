document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Select all div elements inside the game board container
    const squares = document.querySelectorAll("#board div");
    console.log("Found squares:", squares.length); // Should print 9 in the console

    // Initialize an array to keep track of the game state
    let gameState = Array(9).fill("");
    
    // Track whose turn it is: true for X, false for O
    let xTurn = true;

    squares.forEach((square, index) => {
        // Apply the base square class when the page loads
        square.classList.add("square");

        // Add click event listener to each square
        square.addEventListener("click", () => {
            console.log(`Square ${index} clicked!`);

            // Check if the square is already filled to prevent overwriting
            if (gameState[index] === "") {
                const currentPlayer = xTurn ? "X" : "O";
                
                // Display the X or O inside the square
                square.textContent = currentPlayer;
                
                // Add the "X" or "O" class for stylesheet color styling
                square.classList.add(currentPlayer);
                
                // Update the game state array
                gameState[index] = currentPlayer;
                
                // Switch turns for the next click
                xTurn = !xTurn;

                console.log("Current game state:", gameState);
            } else {
                console.log("Square is already taken!");
            }
        });
    });
});