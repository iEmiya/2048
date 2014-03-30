(function() {
    var UP = 0;
    var RIGHT = 1;
    var DOWN = 2;
    var LEFT = 3;

    window.AI = function(current_grid) {
        // current_grid is the state of the game when the AI starts
        // this will not always be empty

        this.move = function(current_grid) {
            // We need to return UP, LEFT, DOWN, or RIGHT

            return Math.floor(Math.random()*4);
        };
    }
})();