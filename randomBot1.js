class Bot {
    makeMove(gamestate) {
        let fivePlayerIndex = Math.floor(5 * Math.random());
        let fourPlayerIndex = Math.floor(4 * Math.random());
        let threePlayerIndex = Math.floor(3 * Math.random());
        let twoPlayerIndex = Math.floor(2 * Math.random());
        let p1UsedDcount = 0;
        let p2UsedDcount = 0;
        for (let round of gamestate.rounds) {
            if (round.p1 === 'D') {
                p1UsedDcount++
            }
            if (round.p2 === 'D') {
                p2UsedDcount++
            }
        }

        if (gamestate.rounds.length > 0) {
            let lastRound = gamestate.rounds[gamestate.rounds.length - 1];
            let lastRoundDraw = (lastRound.p1 === lastRound.p2);
            if (lastRoundDraw) {
                if (p1UsedDcount < 100 && p2UsedDcount < 100) {
                    return ['R', 'P', 'S', 'D', 'W'][fivePlayerIndex];
                }
                else if (p1UsedDcount < 100 && p2UsedDcount >= 100) {
                    return ['R', 'D'][twoPlayerIndex];
                }
            }
            else if (p1UsedDcount >= 100 && p2UsedDcount >= 100) {
                return ['R', 'P', 'S'][threePlayerIndex]; //both players used their dynamates
            }
            else if (p1UsedDcount < 100 && p2UsedDcount >= 100) {
                return ['R', 'P', 'S', 'D'][fourPlayerIndex];
            }
            else if (p2UsedDcount < 100) {
                return ['R', 'P', 'S', 'W'][fourPlayerIndex];
            }
            else if (p1UsedDcount >= 100) {
                return ['R', 'P', 'S', 'W'][fourPlayerIndex];//take a chance if p2 uses dynamate
            }
        }

        return ['R', 'P', 'S'][threePlayerIndex];

    }
}

module.exports = new Bot();