describe("tortoiseAndHareRace",function(){
    describe("race",function(){
        describe("Given speed1 100,speed2 10, distance 1000,sleep 500,getup 40",function(){ 
            it("should return 'The tortoise won the race. The hare is sleeping for 91 minutes.'",function(){
         //----------------Arrange------------
         let tortoiseAndHareRace = new TortoiseAndHareRace();
    
         //----------------Act----------------
         let actual = tortoiseAndHareRace.race(100,10,1000,500,40);

         //----------------Assert-------------
         let expected = "The tortoise won the race. The hare is sleeping for 91 minutes.";         ;
         expect(actual).toBe(expected);

            })
        })

        describe("Given speed1 100,speed2 10, distance 1500,sleep 500,getup 100",function(){ 
            it("should return 'The hare and the tortoise tied. The hare is sleeping for 135 minutes.'",function(){
         //----------------Arrange------------
         let tortoiseAndHareRace = new TortoiseAndHareRace();
    
         //----------------Act----------------
         let actual = tortoiseAndHareRace.race(100,10,1500,500,100);

         //----------------Assert-------------
         let expected = "The hare and the tortoise tied. The hare is sleeping for 135 minutes.";         ;
         expect(actual).toBe(expected);

            })
        })
    
        describe("Given speed1 100,speed2 10, distance 1200,sleep 500,getup 100",function(){ 
            it("should return 'The hare won the race. The haresleeping for 105 minutes.'",function(){
         //----------------Arrange------------
         let tortoiseAndHareRace = new TortoiseAndHareRace();
    
         //----------------Act----------------
         let actual = tortoiseAndHareRace.race(100,10,1200,500,100);

         //----------------Assert-------------
         let expected =  "The hare won the race. The hare is sleeping for 105 minutes.";         ;
         expect(actual).toBe(expected);

            })
        })
    })


})