function TortoiseAndHareRace() {

    function race(speed1, speed2, distance, sleep, getup) {
        let startPointtoGetUp = distance - getup;
        let tortoiseTimeToFinish = ((getup) / speed2);
        let hareTimeToFinish = ((distance - sleep) / speed1);
        let minutes = ((startPointtoGetUp) - (speed2 * 5)) / speed2;
        let winnder = ""
        if (tortoiseFinishesFirst()) {
            winner = "The tortoise won the race."
        }
        else if (hareFinishesFirst()) {
            winner = "The hare won the race."
        }
        else {
            winner = "The hare and the tortoise tied."
        }
        return "" + winner + " The hare is sleeping for " + minutes + " minutes."

        function hareFinishesFirst() {
            return hareTimeToFinish < tortoiseTimeToFinish;
        }

        function tortoiseFinishesFirst() {
            return tortoiseTimeToFinish < hareTimeToFinish;
        }
    }

    return {
        race
    }
}