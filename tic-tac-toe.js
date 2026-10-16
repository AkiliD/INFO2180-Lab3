document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Select all div elements inside the game board container
    const squares = document.querySelectorAll("#board div");
    console.log("Found squares:", squares.length); // Should print 9 in the console

    // Initialize an array to keep track of the game state
    let gameState = Array(9).fill("");
    
    // Track whose turn it is: true for X, false for O
    let xTurn = true;

    // Helper function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Returns "X" or "O"
            }
        }
        return null;
    }

    squares.forEach((square, index) => {
        // Apply the base square class when the page loads
        square.classList.add("square");

        // Add mouseenter event listener for hover effect
        square.addEventListener("mouseenter", () => {
            if (gameState[index] === "" && !checkWinner()) {
                square.classList.add("hover");
                if (!xTurn) {
                    square.classList.add("O");
                }
            }
        });

        // Add mouseleave event listener to remove hover effect
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
            if (gameState[index] === "") {
                square.classList.remove("O");
            }
        });

        // Add click event listener to each square
        square.addEventListener("click", () => {
            console.log(`Square ${index} clicked!`);

            // Check if the square is empty and there is no winner yet
            if (gameState[index] === "" && !checkWinner()) {
                const currentPlayer = xTurn ? "X" : "O";
                
                // Clean up hover classes before setting the permanent player class
                square.classList.remove("hover", "O");

                // Display the X or O inside the square
                square.textContent = currentPlayer;
                
                // Add the "X" or "O" class for stylesheet color styling[cite: 1]
                square.classList.add(currentPlayer);
                
                // Update the game state array
                gameState[index] = currentPlayer;
                
                // Check if the current move resulted in a win
                const winner = checkWinner();
                if (winner) {
                    const statusDiv = document.getElementById("status");
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    console.log(`Winner declared: ${winner}`);
                } else {
                    // Switch turns for the next click
                    xTurn = !xTurn;
                }

                console.log("Current game state:", gameState);
            } else {
                console.log("Square is already taken or game is over!");
            }
        });
    });
});