class Bot {
    makeMove(gamestate) {

        const lastRound = gamestate.rounds[gamestate.rounds.length - 1];

        const p1DCount = gamestate.rounds.reduce((a, b) => b.p1 === 'D' ? a + 1 : a, 0);

        const p2DCount = gamestate.rounds.reduce((a, b) => b.p2 === 'D' ? a + 1 : a, 0);

        if ((p1DCount < 100) && lastRound && (lastRound.p1 === lastRound.p2)) {
            return 'D';
        }

        else if ((p1DCount < 100) && (gamestate.rounds.length > 1000)) {
            if ((p2DCount < 100) && p2DCount > 5) {
                let randomIndex = Math.floor(5 * Math.random());
                return ['R', 'P', 'S', 'W', 'D'][randomIndex];
            } else {
                let randomIndex = Math.floor(4 * Math.random());
                return ['R', 'P', 'S', 'D'][randomIndex];
            }
        }

        else if (p2DCount < 100 && p2DCount > 5) {
            let randomIndex = Math.floor(4 * Math.random());
            return ['R', 'P', 'S', 'W'][randomIndex];
        }

        else {
            let randomIndex = Math.floor(3 * Math.random());
            return ['R', 'P', 'S'][randomIndex];
        }
    }
}

module.exports = new Bot();