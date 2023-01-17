class Bot {

    
    makeMove(gamestate) {
        let randomIndex = Math.floor(3 * Math.random())
        return ['R', 'P', 'S'][randomIndex];
         console.log(gamestate.round);
    }
  
    
}

module.exports = new Bot();
