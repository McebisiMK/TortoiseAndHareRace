function TortoiseAndHareRace() {

    function race(speed1, speed2, distance, sleep, getup) {

        let minutes = getMinutesSlept(distance,getup,speed2);
        let winner = getWinner(speed1, speed2, distance, sleep, getup);

        return `${winner} The hare is sleeping for ${minutes} minutes.`

    }

    function getWinner(speed1, speed2, distance, sleep, getup) {

        let tortoiseTimeToFinish = ((getup) / speed2);
        let hareTimeToFinish = ((distance - sleep) / speed1);

        if (hareFinishesFirst()) {
            return `The hare won the race.`
        }
        else if (tortoiseFinishesFirst()) {
            return `The tortoise won the race.`
        }
        return `The hare and the tortoise tied.`

        function hareFinishesFirst() {
            return hareTimeToFinish < tortoiseTimeToFinish;
        }
    
        function tortoiseFinishesFirst() {
            return tortoiseTimeToFinish < hareTimeToFinish;
        }
    }

    function getMinutesSlept(distance,getup,speed2){
        let startPointtoGetUp = distance - getup;
        return ((startPointtoGetUp) - (speed2 * 5)) / speed2
    }

    return {
        race
    }
}