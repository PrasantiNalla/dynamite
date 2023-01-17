class Bot {
    makeMove(gamestate) {
        if (gamestate.rounds.reduce((a, b) => b.p1 === 'D' ? a + 1 : a, 0) < 100) {
            let randomIndex = Math.floor(5 * Math.random())
            return ['R', 'P', 'S', 'D', 'W'][randomIndex];
        } else {
            let randomIndex = Math.floor(4 * Math.random())
            return ['R', 'P', 'S', 'W'][randomIndex];
        }
    }
}

module.exports = new Bot();