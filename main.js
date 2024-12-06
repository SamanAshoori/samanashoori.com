var game = 
        {
            oil:0,
            totalOil:0,
            totalClicks:0,
            clickValue: 1,
            sellPower:1,
            oilPrice: 1,
            dollars: 0.00,
            totalDollars: 0.00,
            version: 1.0,
            time: 0,

            addToOil: function(amount)
            {
                this.oil += amount;
                this.totalOil +=amount;
                display.updateOil();
                
            },

            getOilPerSecond: function(){
                var oilPerSecond = 0;
                for(i = 0;i < building.name.length;i++){
                    oilPerSecond += building.income[i] * building.count[i];
                }
                return oilPerSecond;
            },

            getSalesPerSecond: function()
            {
                var salesPerSecond = this.sellPower;
                for(i = 0;i < sales.name.length;i++){
                    salesPerSecond += sales.income[i] * sales.count[i];
                }
                return salesPerSecond;
            }

        };

        var building = {
            name:[
                "Bucket", //0
                "Pickaxe", //1
                "Labourer", //2
                "Manual Pump Jack", //3
                "Oil Tower", //4
                "Oil Refinery", //5
                "Offshore Oil Rig", //6
                "Time Machine" //7
            ],
            description:[
                "Pretty good bucket",
                "Lets you dig into ground for deeper oil",
                "Someones gotta do the dirty work",
                "What I imagine wildcat drilling looks like",
                "Oil goes BRRRR",
                "Turns crude oil into useful products",
                "Land oil is overrated",
                "bring modern dead people to the past so they decompose making more oil"

            ],
            image:[
                "bucket.png",
                "pickaxe.png",
                "labourer.png",
                "pumpJack.png",
                "oilTower.png",
                "oilRefinery.png",
                "oilRig.png",
                "timeMachine.png"

            ],
            count:[
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            income:[
                1,
                10,
                30,
                110,
                314,
                1200,
                150000,
                12000000
            ],
            cost:[
                10,
                100,
                1100,
                5300,
                12000,
                50000,
                1000000,
                40000000
            ],

            purchase:function(index)
            {
                if(game.dollars >= this.cost[index])
                {
                    game.dollars -= this.cost[index];
                    this.count[index] += 1;
                    this.cost[index] = Math.round(this.cost[index] * 1.05);
                    display.updateOil();
                    display.updateDollars();
                    display.updateShop();
                    display.updateSales();
                }
            }
        };

        var sales = {
            name:[
                "Salesman", // 0
                "Tiny Wagon", //1
                "Horse", //2
                "Covered Wagon", //3
                "Pickup Truck",//4
                "Tanker Truck", //5
                "Pipeline", //6
                "Oil Tanker" //7
            ],
            image:[
                "seller.png", //0
                "wagon.png", //1
                "Horse.png", //2
                "bigWagon.png", //3
                "miniTruck.png", //4
                "tankerTruck.png", //5
                "pipeline.png",
                "oilTanker.png"
            ],
            description:[
                "Let someone else make you money", //0
                "Lets you carry more oil to sell",//1
                "Big and strong animal to carry oil", //2
                "Wagon but bigger", //3
                "Used to haul oil", //4
                "Can haul a lot of oil",//5
                "Oil goes weeee!", //6
                "I honestly dont know any more" //7
            ],
            count:[
                0, //0
                0, //1
                0, //2
                0, //3
                0, //4
                0, //5
                0, // 6
                0
            ],
            income:[
                1, //0
                5, //1
                10, //2
                100, //3
                1800, //4
                12000, //5
                240000, //6
                3000000 //7
            ],
            cost:[
                50, //0
                500, //1
                1100, //2
                3500, //3
                12000 ,//4
                140000,//5
                12000000, //6
                1000000000 //7
            ],

            purchase:function(index)
            {
                if(game.dollars >= this.cost[index])
                {
                    game.dollars -= this.cost[index];
                    this.count[index] += 1;
                    this.cost[index] = Math.round(this.cost[index] * 1.05);
                    display.updateOil();
                    display.updateDollars();
                    display.updateShop();
                    display.updateSales();
                }
            }
        };

        var upgrade = 
        {
            name:[
                "Bigger Buckets", //Building 0
                "Bigger Buckets II", //Building 0 - 20
                "Bigger Buckets III", //Building 0 - 100
                "Bigger Buckets IV", //Building 0 - 200#
                "Bigger Buckets V", //Building 0 - 500
                "Bigger Buckets VI", //Building 0 -1000
                "Bigger Buckets2",//building 0 - 50
                "Bigger Buckets3", //buckets 0 - 350
                "Bigger Buckets4", //buckets 0 - 750

                "Clicking Haste", //Clicking 1

                "Pickhead Upgrade", //Building[1] 5 
                "Pickhead Upgrade II", //Building[1] 20
                "Pickhead Upgrade III", //Building[1] 50
                "Pickhead Upgrade IV", //Building[1] 100
                "Pickhead Upgrade V", //Building[1] 200
                "Pickhead Upgrades VI", //Building[1] 350
                "Pickhead Upgrade VII", //Building[1] 500
                "Pickhead Upgrade VIII", //Building[1] 750
                "Pickhead Upgrade IX", //Bulding[1] 1000

                "Sales Training", //Sales 5
                "Sales Training III", //Sales 20
                "Sales Traning II", //Sales 10
                "Sales Training IV", //Sales 50
                "Sales Training V", //Sales 100
                "Sales Training VI", //Salesman 200
                "Sales Training VII", //Salesman 350
                "Sales Training VIII", //Salesman 500
                "Salesman Training IX", //Salesman 750
                "Salesman Training X", //Salesman 1000

                "Tiny Wagon Upgrade", //Tinywagon 5
                "Tiny Wagon Upgrade", //Tinywagon 20
                "Tiny Wagon Upgrade", //Tinywagon 50
                "Tiny Wagon Upgrade", //Tinywagon 100
                "Tiny Wagon Upgrade", //Tinywagon 200
                "Tiny Wagon Upgrade", //Tinywagon 350
                "Tiny Wagon Upgrade", //Tinywagon 500
                "Tiny Wagon Upgrade", //Tinywagon 750
                "Tiny Wagon Upgrade", //Tinywagon 1000

                "Horse Upgrade", //Horse 5
                "Horse Upgrade", //Horse 20
                "Horse Upgrade", //Horse 50
                "Horse Upgrade", //Horse 100
                "Horse Upgrade", //Horse 200
                "Horse Upgrade", //Horse 350
                "Horse Upgrade", //Horse 500
                "Horse Upgrade", //Horse 750
                "Horse Upgrade", //Horse 1000

                "Wagon Upgrade", //wagon 5
                "Wagon Upgrade", //wagon 20
                "Wagon Upgrade", //wagon 50
                "Wagon Upgrade", //wagon 100
                "Wagon Upgrade", //wagon 200
                "Wagon Upgrade", //wagon 350
                "Wagon Upgrade", //wagon 500
                "Wagon Upgrade", //wagon 750
                "Wagon Upgrade", //wagon 1000

                "Pickup Upgrade", //Pickup 5
                "Pickup Upgrade", //Pickup 20
                "Pickup Upgrade", //Pickup 50
                "Pickup Upgrade", //Pickup 100
                "Pickup Upgrade", //Pickup 200
                "Pickup Upgrade", //Pickup 350
                "Pickup Upgrade", //Pickup 500
                "Pickup Upgrade", //Pickup 750
                "Pickup Upgrade", //Pickup 1000

                "Truck Upgrade", //Truck 5
                "Truck Upgrade", //Truck 20
                "Truck Upgrade", //Truck 50
                "Truck Upgrade", //Truck 100
                "Truck Upgrade", //Truck 200
                "Truck Upgrade", //Truck 350
                "Truck Upgrade", //Truck 500
                "Truck Upgrade", //Truck 750
                "Truck Upgrade", //Truck 1000

                "Pipeline Upgrade", //Pipeline 5
                "Pipeline Upgrade", //Pipeline 20
                "Pipeline Upgrade", //Pipeline 50
                "Pipeline Upgrade", //Pipeline 100
                "Pipeline Upgrade", //Pipeline 200
                "Pipeline Upgrade", //Pipeline 350
                "Pipeline Upgrade", //Pipeline 500
                "Pipeline Upgrade", //Pipeline 750
                "Pipeline Upgrade", //Pipeline 1000

                "Tanker Upgrade", //Tanker 5
                "Tanker Upgrade", //Tanker 20
                "Tanker Upgrade", //Tanker 50
                "Tanker Upgrade", //Tanker 100
                "Tanker Upgrade", //Tanker 200
                "Tanker Upgrade", //Tanker 350
                "Tanker Upgrade", //Tanker 500
                "Tanker Upgrade", //Tanker 750
                "Tanker Upgrade", //Tanker 1000

                "Self Training", // Selling 100

                "Clicking Haste II", //Clicking 100
                "Clicking Haste III", //Clicking 500
                "Clicking Haste 1.1", //clicking 10
                "Clicking Haste IV", //clicking 1000
                "Clicking Upgrade Beta", //Clicking 250
                "Clicking Upgrade Alpha", //Clicking 50
                "Clicking Mini Grade", //clicking 5

                "Labourer Motivation", //Labourer 5
                "Labourer Motivation II", //Labourer 20
                "Labourer Motivation III", //Labourer 50
                "Labourer Motivation IV", //Labourer 100
                "Labourer Motivation V", //Labourer 200
                "Labourer Motivation VI",//Labourer 350
                "Labourer Motivation VII",//Labourer 500
                "Labourer Motivation VIII",//Labourer 750
                "Labourer Motivation IX",//Labourer 1000

                "Manual Pump Jack Upgrade I", //MPJ 5
                "Manual Pump Jack Upgrade II", //MPJ 20
                "Manual Pump Jack Upgrade III", //mpj 50
                "Manual Pump Jack Upgrade IV", //MPJ 100
                "Manual Pump Jack Upgrade V", //MPJ 200
                "Manual Pump Jack Upgrade VI", //mpj 350
                "Manual Pump Jack Upgrade VII", //MPJ 500
                "Manual Pump Jack Upgrade VIII", //MPJ 750
                "Manual Pump Jack Upgrade IX", //mpj 1000

                "Oil Tower Upgrade I", //OT 5
                "Oil Tower Upgrade II", //OT 20
                "Oil Tower Upgrade III", //OT 50
                "Oil Tower Upgrade IV", // OT 100
                "Oil Tower Upgrade V", //OT 200
                "Oil Tower Upgrade VI", //OT 350
                "Oil Tower Upgrade VII", //OT 500
                "Oil Tower Upgrade VIII", //OT 750
                "Oil Tower Upgrade IX", // OT 1000

                "Oil Refinery Upgrade I", // OR 5
                "Oil Refinery Upgrade II", // OR 20
                "Oil Refinery Upgrade III", // OR 50
                "Oil Refinery Upgrade IV", // OR 100
                "Oil Refinery Upgrade V", // OR 200
                "Oil Refinery Upgrade VI", // OR 350
                "Oil Refinery Upgrade VII", // OR 500
                "Oil Refinery Upgrade VIII", // OR 750
                "Oil Refinery Upgrade IX", // OR 1000

                "Oil Rig Upgrade I", // OR 5
                "Oil Rig Upgrade II", // OR 20
                "Oil Rig Upgrade III", // OR 50
                "Oil Rig Upgrade IV", // OR 100
                "Oil Rig Upgrade V", // OR 200
                "Oil Rig Upgrade VI", // OR 350
                "Oil Rig Upgrade VII", // OR 500
                "Oil Rig Upgrade VIII", // OR 750
                "Oil Rig Upgrade IX", // OR 1000

                "Time Machine I",//TM 5
                "Time Machine II",//TM 20
                "Time Machine III",//TM 50
                "Time Machine IV",//TM 100
                "Time Machine V",//TM 200
                "Time Machine VI",//TM 350
                "Time Machine VII",//TM 500
                "Time Machine VIII",//TM 750
                "Time Machine IX",//TM 1000

                "Charisma Lessons" //Selling 500
            ],
            description:[
                "Buckets can hold twice the volume", //Bucket = 5 = double
                "Those are some pretty big buckets", //Bucket = 20 - double
                "R&D might be going too far", //Bucket = 100
                "HUUUGE Buckets", //bucket 200
                "I think we can call it a vat now", //bucket 500
                "Pretty Big Vat", //Bucket 1000
                "Bigger Buckets", //Bucket 50
                "Biggest Buckets - sike", //buckets 350
                "Buckets I think",
                
               
                "Clicking is upgraded", //clicking 1

                "Pickaxes are now twice as strong", //building [1] 5
                "Pickaxes are now thrice as strong", //building[1] 20
                "Pickaxes are now twice as strong", //building[1] 50
                "Pickaxes are now 5x better", //building[1] 100
                "Pickaxes are now 2x better", //building[1]200
                "Pickaxes are now 2x better", //building[1]350
                "Pickaxes are now 2x better", //building[1]500
                "Pickaxes are now 2x better", //building[1]750
                "Pickaxes are now 5x better", //building[1]1000

                "Salesman are now twice as charming", //sales 5
                "Salesman are now twice as charming", //sales 20
                "Salesman are now twice as charming", //sales 10
                "Salesman are now 5x as charming", //sales 50
                "Salesman are now twice as charming", //sales 100
                "Salesman are now twice as charming", //sales 200
                "Saleman are now twice as charming",//sales 350
                "Salesman are now twice as charming",//salesman 500
                "Salesman are now twice as charming",//salesman 750
                "Salesman are 5x as charming", //salesman 1000

                "Tiny Wagon Upgrade", //Tinywagon 5
                "Tiny Wagon Upgrade", //Tinywagon 20
                "Tiny Wagon Upgrade", //Tinywagon 50
                "Tiny Wagon Upgrade", //Tinywagon 100
                "Tiny Wagon Upgrade", //Tinywagon 200
                "Tiny Wagon Upgrade", //Tinywagon 350
                "Tiny Wagon Upgrade", //Tinywagon 500
                "Tiny Wagon Upgrade", //Tinywagon 750
                "Tiny Wagon Upgrade", //Tinywagon 1000

                "Horse Upgrade", //Horse 5
                "Horse Upgrade", //Horse 20
                "Horse Upgrade", //Horse 50
                "Horse Upgrade", //Horse 100
                "Horse Upgrade", //Horse 200
                "Horse Upgrade", //Horse 350
                "Horse Upgrade", //Horse 500
                "Horse Upgrade", //Horse 750
                "Horse Upgrade", //Horse 1000

                "Wagon Upgrade", //wagon 5
                "Wagon Upgrade", //wagon 20
                "Wagon Upgrade", //wagon 50
                "Wagon Upgrade", //wagon 100
                "Wagon Upgrade", //wagon 200
                "Wagon Upgrade", //wagon 350
                "Wagon Upgrade", //wagon 500
                "Wagon Upgrade", //wagon 750
                "Wagon Upgrade", //wagon 1000

                "Pickup Upgrade", //Pickup 5
                "Pickup Upgrade", //Pickup 20
                "Pickup Upgrade", //Pickup 50
                "Pickup Upgrade", //Pickup 100
                "Pickup Upgrade", //Pickup 200
                "Pickup Upgrade", //Pickup 350
                "Pickup Upgrade", //Pickup 500
                "Pickup Upgrade", //Pickup 750
                "Pickup Upgrade", //Pickup 1000

                "Truck Upgrade", //Truck 5
                "Truck Upgrade", //Truck 20
                "Truck Upgrade", //Truck 50
                "Truck Upgrade", //Truck 100
                "Truck Upgrade", //Truck 200
                "Truck Upgrade", //Truck 350
                "Truck Upgrade", //Truck 500
                "Truck Upgrade", //Truck 750
                "Truck Upgrade", //Truck 1000

                "Pipeline Upgrade", //Pipeline 5
                "Pipeline Upgrade", //Pipeline 20
                "Pipeline Upgrade", //Pipeline 50
                "Pipeline Upgrade", //Pipeline 100
                "Pipeline Upgrade", //Pipeline 200
                "Pipeline Upgrade", //Pipeline 350
                "Pipeline Upgrade", //Pipeline 500
                "Pipeline Upgrade", //Pipeline 750
                "Pipeline Upgrade", //Pipeline 1000

                "Tanker Upgrade", //Tanker 5
                "Tanker Upgrade", //Tanker 20
                "Tanker Upgrade", //Tanker 50
                "Tanker Upgrade", //Tanker 100
                "Tanker Upgrade", //Tanker 200
                "Tanker Upgrade", //Tanker 350
                "Tanker Upgrade", //Tanker 500
                "Tanker Upgrade", //Tanker 750
                "Tanker Upgrade", //Tanker 1000

                "Your selling is twice as effective", //selling

                "Clicking Upgrade", //clicking 100
                "Clicking Upgrade", //clicking 500
                "Clicking Upgrade", //clicking 10
                "Clicking Upgrade", //clicking 1000
                "Clicking Upgrade", //Clicking 250
                "Clicking Upgrade", //Clicking 50
                "clicking upgrade", //clicking 5

                "Labourers Work Harder", //Labourer 5
                "Labourers Work Harder", //Labourer 20
                "Labourers Work Harder", //Labourer 50
                "Labourers Work Harder", //Labourer 100
                "Labourers Work Harder", //Labourer 200
                "Labourers Work Harder",//Labourer 350
                "Labourers Work Harder",//Labourer 500
                "Labourers Work Harder",//Labourer 750
                "Labourers Work Harder",//Labourer 1000

                "Your pump jacks are now more effective", //MPJ 5
                "Your pump jacks are now more effective", //MPJ 20
                "Your pump jacks are now more effective", //MPJ 50
                "Your pump jacks are now more effective", //MPJ 100
                "Your pump jacks are now more effective", //MPJ 200
                "Your pump jacks are now more effective", //MPJ 350
                "Your pump jacks are now more effective", //MPJ 500
                "Your pump jacks are now more effective", //MPJ 750
                "Your pump jacks are now more effective", //MPJ 1000

                "Your oil towers are now more effective", //OT 5
                "Your oil towers are now more effective", //OT 20
                "Your oil towers are now more effective", //OT 50
                "Your oil towers are now more effective", //OT 100
                "Your oil towers are now more effective", //OT 200
                "Your oil towers are now more effective", //OT 350
                "Your oil towers are now more effective", //OT 500
                "Your oil towers are now more effective", //OT 750
                "Your oil towers are now more effective", //OT 1000

                "Your oil refinerys are now more effective", //OR 5
                "Your oil refinerys are now more effective", //OR 20
                "Your oil refinerys are now more effective", //OR 50
                "Your oil refinerys are now more effective", //OR 100
                "Your oil refinerys are now more effective", //OR 200
                "Your oil refinerys are now more effective", //OR 350
                "Your oil refinerys are now more effective", //OR 500
                "Your oil refinerys are now more effective", //OR 750
                "Your oil refinerys are now more effective", //OR 1000

                "Your oil rigs are now more effective", //OR 5
                "Your oil rigs are now more effective", //OR 20
                "Your oil rigs are now more effective", //OR 50
                "Your oil rigs are now more effective", //OR 100
                "Your oil rigs are now more effective", //OR 200
                "Your oil rigs are now more effective", //OR 350
                "Your oil rigs are now more effective", //OR 500
                "Your oil rigs are now more effective", //OR 750
                "Your oil rigs are now more effective", //OR 1000

                "Your time machines are now more effective", //TM 5
                "Your time machines are now more effective", //TM 20
                "Your time machines are now more effective", //TM 50
                "Your time machines are now more effective", //TM 100
                "Your time machines are now more effective", //TM 200
                "Your time machines are now more effective", //TM 350
                "Your time machines are now more effective", //TM 500
                "Your time machines are now more effective", //TM 750
                "Your time machines are now more effective", //TM 1000

                "Your selling is now twice as effective" //selling
            ],
            image:[
                "bucket.png", //bucket 5
                "bucket.png", //bucket 10
                "bucket.png", //bucket 100
                "bucket.png", //bucket 200
                "bucket.png", //bucket 500
                "bucket.png", //bucket 1000
                "bucket.png", //bucket 50
                "bucket.png", //buckets 350
                "bucket.png",

                "cursor.png", //clicking 1

                "pickaxe.png", //building[1]5
                "pickaxe.png", //building[1]20
                "pickaxe.png", //building[1]50
                "pickaxe.png", //building[1]100
                "pickaxe.png",//building[1]200
                "pickaxe.png",//building[1]350
                "pickaxe.png",//building[1]500
                "pickaxe.png",//buidling[1]750
                "pickaxe.png",//building[1]1000

                "seller.png", //salesman 5
                "seller.png", //salesman 20
                "seller.png",//salesman 10
                "seller.png",//salesman 50
                "seller.png",//salesman 100
                "seller.png", //salesman 200
                "seller.png",//salesman 350
                "seller.png",//salesman 500
                "seller.png",//salesman 750
                "seller.png", //salesman 1000

                "wagon.png", //Tinywagon 5
                "wagon.png", //Tinywagon 20
                "wagon.png", //Tinywagon 50
                "wagon.png", //Tinywagon 100
                "wagon.png", //Tinywagon 200
                "wagon.png", //Tinywagon 350
                "wagon.png", //Tinywagon 500
                "wagon.png", //Tinywagon 750
                "wagon.png", //Tinywagon 1000

                "horse.png", //Horse 5
                "horse.png", //Horse 20
                "horse.png", //Horse 50
                "horse.png", //Horse 100
                "horse.png", //Horse 200
                "horse.png", //Horse 350
                "horse.png", //Horse 500
                "horse.png", //Horse 750
                "horse.png", //Horse 1000

                "bigWagon.png", //wagon 5
                "bigWagon.png", //wagon 20
                "bigWagon.png", //wagon 50
                "bigWagon.png", //wagon 100
                "bigWagon.png", //wagon 200
                "bigWagon.png", //wagon 350
                "bigWagon.png", //wagon 500
                "bigWagon.png", //wagon 750
                "bigWagon.png", //wagon 1000

                "minitruck.png", //Pickup 5
                "minitruck.png", //Pickup 20
                "minitruck.png", //Pickup 50
                "minitruck.png", //Pickup 100
                "minitruck.png", //Pickup 200
                "minitruck.png", //Pickup 350
                "minitruck.png", //Pickup 500
                "minitruck.png", //Pickup 750
                "minitruck.png", //Pickup 1000

                "tankerTruck.png", //Truck 5
                "tankerTruck.png", //Truck 20
                "tankerTruck.png", //Truck 50
                "tankerTruck.png", //Truck 100
                "tankerTruck.png", //Truck 200
                "tankerTruck.png", //Truck 350
                "tankerTruck.png", //Truck 500
                "tankerTruck.png", //Truck 750
                "tankerTruck.png", //Truck 1000

                "pipeline.png", //Pipeline 5
                "pipeline.png", //Pipeline 20
                "pipeline.png", //Pipeline 50
                "pipeline.png", //Pipeline 100
                "pipeline.png", //Pipeline 200
                "pipeline.png", //Pipeline 350
                "pipeline.png", //Pipeline 500
                "pipeline.png", //Pipeline 750
                "pipeline.png", //Pipeline 1000

                "oilTanker.png", //Tanker 5
                "oilTanker.png", //Tanker 20
                "oilTanker.png", //Tanker 50
                "oilTanker.png", //Tanker 100
                "oilTanker.png", //Tanker 200
                "oilTanker.png", //Tanker 350
                "oilTanker.png", //Tanker 500
                "oilTanker.png", //Tanker 750
                "oilTanker.png", //Tanker 1000

                "dollar.png", //selling 100

                "cursor.png", //clicking 100
                "cursor.png", //clicking 500
                "cursor.png", //clicking 10
                "cursor.png", //clicking 1000
                "cursor.png", //clicking 250
                "cursor.png", //clicking 50
                "cursor.png", //clicking 5

                "labourer.png", //Labourer 5
                "labourer.png", //labourer 20
                "labourer.png", //labourer 50
                "labourer.png", //labourer 100
                "labourer.png", //labourer 200
                "labourer.png", //labourer 350
                "labourer.png",//labourer 500
                "labourer.png",//labourer 750
                "labourer.png",//labourer 1000

                "pumpJack.png", //MPJ 5
                "pumpJack.png", //MPJ 20
                "pumpJack.png", //MPJ 50
                "pumpJack.png", //MPJ 100
                "pumpJack.png", //MPJ 200
                "pumpJack.png", //MPJ 350
                "pumpJack.png", //MPJ 500
                "pumpJack.png", //MPJ 750
                "pumpJack.png", //MPJ 1000

                "oilTower.png", //OT 5
                "oilTower.png", //OT 20
                "oilTower.png", //OT 50
                "oilTower.png", //OT 100
                "oilTower.png", //OT 200
                "oilTower.png", //OT 350
                "oilTower.png", //OT 500
                "oilTower.png", //OT 750
                "oilTower.png", //OT 1000

                "oilRefinery.png", //OR  5
                "oilRefinery.png", //OR 20
                "oilRefinery.png", //OR 50
                "oilRefinery.png", //OR 100
                "oilRefinery.png", //OR 200
                "oilRefinery.png", //OR 350
                "oilRefinery.png", //OR 500
                "oilRefinery.png", //OR 750
                "oilRefinery.png", //OR 1000

                "oilRig.png", //OR  5
                "oilRig.png", //OR 20
                "oilRig.png", //OR 50
                "oilRig.png", //OR 100
                "oilRig.png", //OR 200
                "oilRig.png", //OR 350
                "oilRig.png", //OR 500
                "oilRig.png", //OR 750
                "oilRig.png", //OR 1000

                "timeMachine.png", //TM  5
                "timeMachine.png", //TM 20
                "timeMachine.png", //TM 50
                "timeMachine.png", //TM 100
                "timeMachine.png", //TM 200
                "timeMachine.png", //TM 350
                "timeMachine.png", //TM 500
                "timeMachine.png", //TM 750
                "timeMachine.png", //TM 1000

                "dollar.png" //selling 500
            ],
            type:[
                "building", //bucket 5
                "building", //bucket 10
                "building", //bucket 100
                "building", //bucket 200
                "building", //bucket 500
                "building", //bucket 500
                "building", //bucket 50
                "building", //buckets 350
                "building",

                "click", //clicking 1

                "building", //pickaxe[1] 5
                "building", //building[1] 20
                "building", //building[1] 50
                "building", //building[1] 100
                "building",//building[1]200
                "building",//building[1]350
                "building",//building[1]500
                "building",//building[1]750
                "building",//building[1]1000

                "sales", //salesman 5
                "sales", //salesman 20
                "sales",//salesman 10
                "sales",//salesman 50
                "sales",//salesman 100
                "sales",//salesman 200
                "sales",//salesman 350
                "sales",//salesman 500
                "sales",//salesman 750
                "sales",//salesman 1000

                "sales", //tinywagon 5
                "sales", //tinywagon 20
                "sales",//tinywagon 10
                "sales",//tinywagon 50
                "sales",//tinywagon 100
                "sales",//tinywagon 200
                "sales",//tinywagon 350
                "sales",//tinywagon 500
                "sales",//tinywagon 750
                "sales",//tinywagon 1000
                
                "sales", //horse 5
                "sales", //horse 20
                "sales",//horse 10
                "sales",//horse 50
                "sales",//horse 100
                "sales",//horse 200
                "sales",//horse 350
                "sales",//horse 500
                "sales",//horse 750
                "sales",//horse 1000

                "sales", //wagon 5
                "sales", //wagon 20
                "sales",//wagon 10
                "sales",//wagon 50
                "sales",//wagon 100
                "sales",//wagon 200
                "sales",//wagon 350
                "sales",//wagon 500
                "sales",//wagon 750
                "sales",//wagon 1000

                "sales", //pickup 5
                "sales", //pickup 20
                "sales",//pickup 10
                "sales",//pickup 50
                "sales",//pickup 100
                "sales",//pickup 200
                "sales",//pickup 350
                "sales",//pickup 500
                "sales",//pickup 750
                "sales",//pickup 1000

                "sales", //truck 5
                "sales", //truck 20
                "sales",//truck 10
                "sales",//truck 50
                "sales",//truck 100
                "sales",//truck 200
                "sales",//truck 350
                "sales",//truck 500
                "sales",//truck 750
                "sales",//truck 1000

                "sales", //pipeline 5
                "sales", //pipeline 20
                "sales",//pipeline 10
                "sales",//pipeline 50
                "sales",//pipeline 100
                "sales",//pipeline 200
                "sales",//pipeline 350
                "sales",//pipeline 500
                "sales",//pipeline 750
                "sales",//pipeline 1000

                "sales", //ship 5
                "sales", //ship 20
                "sales",//ship 10
                "sales",//ship 50
                "sales",//ship 100
                "sales",//ship 200
                "sales",//ship 350
                "sales",//ship 500
                "sales",//ship 750
                "sales",//ship 1000

                "sellPower", //selling 100

                "click", //clicking 100
                "click", //clicking 500
                "click", //click 10
                "click", //click 1000
                "click", //click 250
                "click", //clicking 50
                "click", //clicking 5

                "building", //building[2] 5
                "building", //building[2] 20
                "building", //building[2] 50
                "building", //building[2] 100
                "building",//building[2]200
                "building",//building[2]350
                "building",//building[2]500
                "building",//building[2]750
                "building",//building[2]1000

                "building", //building[3] 5
                "building", //building[3] 20
                "building", //building[3] 50
                "building", //building[3] 100
                "building",//building[3]200
                "building",//building[3]350
                "building",//building[3]500
                "building",//building[3]750
                "building",//building[3]1000

                "building", //building[4] 5
                "building", //building[4] 20
                "building", //building[4] 50
                "building", //building[4] 100
                "building",//building[4]200
                "building",//building[4]350
                "building",//building[4]500
                "building",//building[4]750
                "building",//building[4]1000

                "building", //building[5] 5
                "building", //building[5] 20
                "building", //building[5] 50
                "building", //building[5] 100
                "building",//building[5]200
                "building",//building[5]350
                "building",//building[5]500
                "building",//building[5]750
                "building",//building[5]1000

                "building", //building[6] 5
                "building", //building[6] 20
                "building", //building[6] 50
                "building", //building[6] 100
                "building",//building[6]200
                "building",//building[6]350
                "building",//building[6]500
                "building",//building[6]750
                "building",//building[6]1000

                "building", //building[7] 5
                "building", //building[7] 20
                "building", //building[7] 50
                "building", //building[7] 100
                "building",//building[7]200
                "building",//building[7]350
                "building",//building[7]500
                "building",//building[7]750
                "building",//building[7]1000

                "sellPower" //selling 500
            ],
            cost:[
                200, //bigger buckets 5
                1000, // bigger buckets 20
                5000, //bigger buckets 100
                9000, //buckets 200
                15000, //bucket 500
                290840, //bucket 1000
                2800, //bucket 50
                13000, //buckets 350
                58940,


                100, //clicking haste 1

                1000, //pickhead upgrade 5
                4000, //pickhead upgrade 20
                7000, //pickhead upgrade 50
                20000, //pickhead upgrade 100
                43000,//pickhead upgrade 200
                60000,//pickhead upgrade 350
                100000,//pickhead upgrade 500
                2000000,//pickhead upgrade 750
                5000000,//pickhead upgrade 1000

                200, //salesman 5
                800, //salesman 20
                450,//salesman 10
                2000, //salesman 50
                5000,//salesman 100
                12000, //salesman 200
                25000,//salesman 350
                40000,//salesman 500
                60000,//salesman 750
                100000,//salesman 1000

                1000, //sales[1] upgrade 5
                4000, //sales[1] upgrade 20
                7000, //sales[1] upgrade 50
                20000, //sales[1] upgrade 100
                43000,//sales[1] upgrade 200
                60000,//sales[1] upgrade 350
                100000,//sales[1] upgrade 500
                2000000,//sales[1] upgrade 750
                5000000,//sales[1] upgrade 1000

                3000,//sales[2]5
                5000,//sales[2]20
                12000,//sales[2]50
                50000,//sales[2]100
                80000,//sales[2]200
                120000,//sales[2]350
                240000,//sales[2]500
                400000,//sales[2]750
                1000000,//sales[2]1000

                13000,//sales[3]5
                35000,//sales[3]20
                412000,//sales[3]50
                1050000,//sales[3]100
                9080000,//sales[3]200
                84120000,//sales[3]350
                94240000,//sales[3]500
                95400000,//sales[3]750
                911000000,//sales[3]1000

                21200,//sales[4]5
                350000,//sales[4]20
                4120000,//sales[4]50
                10500000,//sales[4]100
                5300000,//sales[4]200
                71200000,//sales[4]350
                53400000,//sales[4]500
                345000000,//sales[4]750
                120000000,//sales[4]1000

                41200,//sales[5]5
                650000,//sales[5]20
                8120000,//sales[5]50
                20500000,//sales[5]100
                10300000,//sales[5]200
                141200000,//sales[5]350
                103400000,//sales[5]500
                6450000000,//sales[5]750
                20200000000,//sales[5]1000

                4100200,//sales[6]5
                65000000,//sales[6]20
                812000000,//sales[6]50
                2050000000,//sales[6]100
                1030000000,//sales[6]200
                14120000000,//sales[6]350
                10340000000,//sales[6]500
                645000000000,//sales[6]750
                2020000000000,//sales[6]1000

                41000200,//sales[7]5
                650000000,//sales[7]20
                8120000000,//sales[7]50
                20500000000,//sales[7]100
                10300000000,//sales[7]200
                141200000000,//sales[7]350
                103400000000,//sales[7]500
                6450000000000,//sales[7]750
                20200000000000,//sales[7]1000

                50, //sellpower 100

                500, //clicking 100
                1000, //clicking 500
                110, //clicking 10
                13000, //clicking 1000
                600, //clicking 250
                200, //clicking 50
                150, //clicking 5

                3000,//building[2]5
                5000,//building[2]20
                12000,//building[2]50
                50000,//building[2]100
                80000,//building[2]200
                120000,//building[2]350
                240000,//building[2]500
                400000,//building[2]750
                1000000,//building[2]1000

                13000,//building[3]5
                35000,//building[3]20
                412000,//building[3]50
                1050000,//building[3]100
                9080000,//building[3]200
                84120000,//building[3]350
                94240000,//building[3]500
                95400000,//building[3]750
                911000000,//building[3]1000

                21200,//building[4]5
                350000,//building[4]20
                4120000,//building[4]50
                10500000,//building[4]100
                5300000,//building[4]200
                71200000,//building[4]350
                53400000,//building[4]500
                345000000,//building[4]750
                120000000,//building[4]1000

                41200,//building[5]5
                650000,//building[5]20
                8120000,//building[5]50
                20500000,//building[5]100
                10300000,//building[5]200
                141200000,//building[5]350
                103400000,//building[5]500
                6450000000,//building[5]750
                20200000000,//building[5]1000

                4100200,//building[6]5
                65000000,//building[6]20
                812000000,//building[6]50
                2050000000,//building[6]100
                1030000000,//building[6]200
                14120000000,//building[6]350
                10340000000,//building[6]500
                645000000000,//building[6]750
                2020000000000,//building[6]1000

                41000200,//building[7]5
                650000000,//building[7]20
                8120000000,//building[7]50
                20500000000,//building[7]100
                10300000000,//building[7]200
                141200000000,//building[7]350
                103400000000,//building[7]500
                6450000000000,//building[7]750
                20200000000000,//building[7]1000

                1000 //selling 500

            ],
            buildingIndex:[
                0, //bucket
                0, //bucket bucket
                0, //bucket bucket bucket
                0, //Bucket * 4
                0, //bucket 500
                0, //bucket 1000
                0, //bucket 50
                0, //buckets 350
                0,

                -1, //Clicks dont need 1

                1, //pickaxe 5
                1, //pickaxe 20
                1, //pickaxe 50
                1, //pickhead 100
                1,//pickhead 200
                1,//pickhead 350
                1,//pickhead 500
                1,//pickhead 750
                1,//pickhead 1000
 
                0, //salesmen 5
                0, //salesman 20
                0, //salesman 10
                0, //salesman 50
                0,//salesman 100
                0,//salesman 200
                0,//salesman 350
                0,//salesman 500
                0,//salesman 750
                0,//salesman 1000

                1, //tinywagon 5
                1, //tinywagon 20
                1, //tinywagon 50
                1, //tinywagon 100
                1,//tinywagon 200
                1,//tinywagon 350
                1,//tinywagon 500
                1,//tinywagon 750
                1,//tinywagon 1000

                2,//sales[2]5
                2,//sales[2]20
                2,//sales[2]50
                2,//sales[2]100
                2,//sales[2]200
                2,//sales[2]350
                2,//sales[2]500
                2,//sales[2]750
                2,//sales[2]1000

                3,//sales[3]5
                3,//sales[3]20
                3,//sales[3]50
                3,//sales[3]100
                3,//sales[3]200
                3,//sales[3]350
                3,//sales[3]500
                3,//sales[3]750
                3,//sales[3]1000

                4,//sales[4]5
                4,//sales[4]20
                4,//sales[4]50
                4,//sales[4]100
                4,//sales[4]200
                4,//sales[4]350
                4,//sales[4]500
                4,//sales[4]750
                4,//sales[4]1000

                5,//sales[5]5
                5,//sales[5]20
                5,//sales[5]50
                5,//sales[5]100
                5,//sales[5]200
                5,//sales[5]350
                5,//sales[5]500
                5,//sales[5]750
                5,//sales[5]1000

                6,//sales[6]5
                6,//sales[6]20
                6,//sales[6]50
                6,//sales[6]100
                6,//sales[6]200
                6,//sales[6]350
                6,//sales[6]500
                6,//sales[6]750
                6,//sales[6]1000

                7,//sales[7]5
                7,//sales[7]20
                7,//sales[7]50
                7,//sales[7]100
                7,//sales[7]200
                7,//sales[7]350
                7,//sales[7]500
                7,//sales[7]750
                7,//sales[7]1000

                -1, //sale power 100

                -1, //click 100
                -1, //click 500
                -1, //click 10
                -1, //click 1000
                -1, //click 250
                -1,//click 50
                -1, //click 5

                2,//building[2]5
                2,//building[2]20
                2,//building[2]50
                2,//building[2]100
                2,//building[2]200
                2,//building[2]350
                2,//building[2]500
                2,//building[2]750
                2,//building[2]1000

                3,//building[3]5
                3,//building[3]20
                3,//building[3]50
                3,//building[3]100
                3,//building[3]200
                3,//building[3]350
                3,//building[3]500
                3,//building[3]750
                3,//building[3]1000

                4,//building[4]5
                4,//building[4]20
                4,//building[4]50
                4,//building[4]100
                4,//building[4]200
                4,//building[4]350
                4,//building[4]500
                4,//building[4]750
                4,//building[4]1000

                5,//building[5]5
                5,//building[5]20
                5,//building[5]50
                5,//building[5]100
                5,//building[5]200
                5,//building[5]350
                5,//building[5]500
                5,//building[5]750
                5,//building[5]1000

                6,//building[6]5
                6,//building[6]20
                6,//building[6]50
                6,//building[6]100
                6,//building[6]200
                6,//building[6]350
                6,//building[6]500
                6,//building[6]750
                6,//building[6]1000

                7,//building[7]5
                7,//building[7]20
                7,//building[7]50
                7,//building[7]100
                7,//building[7]200
                7,//building[7]350
                7,//building[7]500
                7,//building[7]750
                7,//building[7]1000


                -1 //sellpower 500
            ],
            requirement:[
                5, //bucket
                20, //Bucket
                100, //bucket
                200, //bucket
                500, //buckets
                1000, // buckets 1000
                50, //buckets 50
                350, //buckets 350
                750,

                1, //clickpower 1

                5, //pickaxe 5
                20, //pickaxe 20
                50, //pickaxe 50
                100, //pickaxe 100
                200, //pickaxe 200
                350,//pickaxe 350
                500,//pickaxe 500
                750, //pickaxe 750
                1000,//pickaxe 1000

                5, //salesman 5
                20, //salesman 20
                10, //salesman 10
                50,//salesman 50
                100, //salesman 100
                200, //salesman 200
                350,//salesman 350
                500,//salesman 500
                750,//salesman 750
                1000,//salesman 1000

                5, //sales 5
                20, //sales 20
                50, //sales 50
                100, //sales 100
                200, //sales 200
                350,//sales 350
                500,//sales 500
                750, //sales 750
                1000,//sales 1000

                5,//building[2]5
                20,//building[2]20
                50,//building[2]50
                100,//building[2]100
                200,//building[2]200
                350,//building[2]350
                500,//building[2]500
                750,//building[2]750
                1000,//building[2]1000

                5,//sales[3]5
                20,//sales[3]20
                50,//sales[3]50
                100,//sales[3]100
                200,//sales[3]200
                350,//sales[3]350
                500,//sales[3]500
                750,//sales[3]750
                1000,//sales[3]1000

                5,//sales[4]5
                20,//sales[4]20
                50,//sales[4]50
                100,//sales[4]100
                200,//sales[4]200
                350,//sales[4]350
                500,//sales[4]500
                750,//sales[4]750
                1000,//sales[4]1000

                5,//sales[5]5
                20,//sales[5]20
                50,//sales[5]50
                100,//sales[5]100
                200,//sales[5]200
                350,//sales[5]350
                500,//sales[5]500
                750,//sales[5]750
                1000,//sales[5]1000

                5,//sales[6]5
                20,//sales[6]20
                50,//sales[6]50
                100,//sales[6]100
                200,//sales[6]200
                350,//sales[6]350
                500,//sales[6]500
                750,//sales[6]750
                1000,//sales[6]1000

                5,//sales[7]5
                20,//sales[7]20
                50,//sales[7]50
                100,//sales[7]100
                200,//sales[7]200
                350,//sales[7]350
                500,//sales[7]500
                750,//sales[7]750
                1000,//sales[7]1000

                100, //selling 100

                100, //clickpower 100
                500, //clickpower 500
                10, //clickpower 10
                1000, //clickpower 1000
                250, //clickpower 250
                50, //click 50
                5, //click 5

                5,//building[2]5
                20,//building[2]20
                50,//building[2]50
                100,//building[2]100
                200,//building[2]200
                350,//building[2]350
                500,//building[2]500
                750,//building[2]750
                1000,//building[2]1000

                5,//building[3]5
                20,//building[3]20
                50,//building[3]50
                100,//building[3]100
                200,//building[3]200
                350,//building[3]350
                500,//building[3]500
                750,//building[3]750
                1000,//building[3]1000

                5,//building[4]5
                20,//building[4]20
                50,//building[4]50
                100,//building[4]100
                200,//building[4]200
                350,//building[4]350
                500,//building[4]500
                750,//building[4]750
                1000,//building[4]1000

                5,//building[5]5
                20,//building[5]20
                50,//building[5]50
                100,//building[5]100
                200,//building[5]200
                350,//building[5]350
                500,//building[5]500
                750,//building[5]750
                1000,//building[5]1000

                5,//building[6]5
                20,//building[6]20
                50,//building[6]50
                100,//building[6]100
                200,//building[6]200
                350,//building[6]350
                500,//building[6]500
                750,//building[6]750
                1000,//building[6]1000

                5,//building[7]5
                20,//building[7]20
                50,//building[7]50
                100,//building[7]100
                200,//building[7]200
                350,//building[7]350
                500,//building[7]500
                750,//building[7]750
                1000,//building[7]1000

                500 //make 500 dollars to sell twice
            ],
            bonus:[
                2, //double bucket
                2, //double bucket 2
                3, //treb bucket
                3, //bucket 
                10, //500 bucket takes the cake imo
                100, //1000 buckets
                2, //buckets 50
                2, //buckets 350
                5,

                5, //clickpower 1

                2, //pickaxe 5
                3, //pickaxe 20
                2, //pickaxe 50
                5, //pickaxe 100
                2, //pickaxe 200
                2,//pickhead 350
                2,//pickaxe 500
                2,//pickaxe 750
                5,//pickaxe 1000

                2, //salesman 5
                3, //salesman 20
                2,//saleman 10
                5,//salesman 50
                2,//salesman 100
                2,//salesman 200
                2,//salesman 350
                2,//salesman 500
                2,//salesman 750
                5,//salesman 1000

                2, //sales[1] 5
                3, //sales[1] 20
                2, //sales[1] 50
                5, //sales[1] 100
                2, //sales[1] 200
                2,//sales[1] 350
                2,//sales[1] 500
                2,//sales[1] 750
                5,//sales[1] 1000

                2,//sales[2]5
                2,//sales[2]20
                2,//sales[2]50
                5,//sales[2]100
                2,//sales[2]200
                2,//sales[2]350
                5,//sales[2]500
                2,//sales[2]750
                10,//sales[2]1000

                2,//sales[3]5
                2,//sales[3]20
                2,//sales[3]50
                5,//sales[3]100
                2,//sales[3]200
                2,//sales[3]350
                5,//sales[3]500
                2,//sales[3]750
                10,//sales[3]1000

                2,//sales[4]5
                2,//sales[4]20
                2,//sales[4]50
                5,//sales[4]100
                2,//sales[4]200
                2,//sales[4]350
                5,//sales[4]500
                2,//sales[4]750
                10,//sales[4]1000
                
                2,//sales[5]5
                2,//sales[5]20
                2,//sales[5]50
                5,//sales[5]100
                2,//sales[5]200
                2,//sales[5]350
                5,//sales[5]500
                2,//sales[5]750
                10,//sales[5]1000

                2,//sales[6]5
                2,//sales[6]20
                2,//sales[6]50
                5,//sales[6]100
                2,//sales[6]200
                2,//sales[6]350
                5,//sales[6]500
                2,//sales[6]750
                10,//sales[6]1000

                2,//sales[7]5
                2,//sales[7]20
                2,//sales[7]50
                5,//sales[7]100
                2,//sales[7]200
                2,//sales[7]350
                5,//sales[7]500
                2,//sales[7]750
                10,//sales[7]1000

                2,//selling 100

                5, //clicking 100
                5, //clicking 500
                5, //clicking 10
                5, //clicking 1000
                5, //clicking 250
                5, //clicking 50
                5, //click 5

                2,//building[2]5
                2,//building[2]20
                2,//building[2]50
                5,//building[2]100
                2,//building[2]200
                2,//buidling[2]350
                5,//building[2]500
                2,//building[2]750
                10,//building[2]1000

                2,//building[3]5
                2,//building[3]20
                2,//building[3]50
                5,//building[3]100
                2,//building[3]200
                2,//buidling[3]350
                5,//building[3]500
                2,//building[3]750
                10,//building[3]1000

                2,//building[4]5
                2,//building[4]20
                2,//building[4]50
                5,//building[4]100
                2,//building[4]200
                2,//buidling[4]350
                5,//building[4]500
                2,//building[4]750
                10,//building[4]1000
                
                2,//building[5]5
                2,//building[5]20
                2,//building[5]50
                5,//building[5]100
                2,//building[5]200
                2,//buidling[5]350
                5,//building[5]500
                2,//building[5]750
                10,//building[5]1000

                2,//building[6]5
                2,//building[6]20
                2,//building[6]50
                5,//building[6]100
                2,//building[6]200
                2,//buidling[6]350
                5,//building[6]500
                2,//building[6]750
                10,//building[6]1000

                2,//building[7]5
                2,//building[7]20
                2,//building[7]50
                5,//building[7]100
                2,//building[7]200
                2,//buidling[7]350
                5,//building[7]500
                2,//building[7]750
                10,//building[7]1000

                2//sales 500
            ],
            purchased:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            
            purchase: function(index)
            {
                if(!this.purchased[index] && game.dollars >= this.cost[index])
                {
                    if(this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requirement[index])
                    {
                        game.dollars -= this.cost[index];
                        building.income[this.buildingIndex[index]] *= this.bonus[index];
                        this.purchased[index] = true;
                        
                        display.updateUpgrades();
                        display.updateDollars();
                    } 
                    else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index])
                    {
                        game.dollars -= this.cost[index];
                        game.clickValue *= this.bonus[index];
                        this.purchased[index] = true;
                        
                        display.updateUpgrades();
                        display.updateDollars();
                    }
                    else if(this.type[index] == "sales" && sales.count[this.buildingIndex[index]] >= this.requirement[index])
                    {
                        game.dollars -= this.cost[index];
                        sales.income[this.buildingIndex[index]] *= this.bonus[index];
                        this.purchased[index] = true;
                        
                        display.updateUpgrades();
                        display.updateDollars();
                    }
                    else if (this.type[index] == "sellPower" && game.totalDollars >= this.requirement[index])
                    {
                        game.dollars -= this.cost[index];
                        game.sellPower *= this.bonus[index];
                        this.purchased[index] = true;
                        
                        display.updateUpgrades();
                        display.updateDollars();
                    } 
                }
            }
        };

        var award = {
            name:[
                "Its a pretty good bucket", //buckets
                "Bronze Bucket", //buckets
                "Golden Bucket", //buckets
                "Diamond Bucket", //buckets

                "From Humble Beginings", //first oil
                "Bronze Oil", //100 oil
                "Gold Oil", //100k oil
                "Diamond Oil", //10m oil

                "Click N00B", //1 click

                "First Dollar", //1 dollar
                "Bronze Dollar", //100 dollars
                "Golden Dollar", //100k dollars
                "Diamond Dollar", //10M dollars

                "Are you pumped?", //1 pump

                "Click Centurion", //100 clicks
                "KiloClick", //1000 clicks
                "Diamond Cursor" //10k clicks
                
            ],
            description:[
                "Buy 1 bucket", //buckets
                "Buy 10 buckets", //buckets
                "Buy 100 Buckets", //buckets
                "Buy 500 Buckets", //buckets

                "Gather first oil", //oil
                "Gather 100 oil", //oil
                "Gather 100k Oil", //oil
                "Gather 10M Oil", //oil

                "Click oil once", //click

                "Make $1", //dollar
                "Make $100", //100 dollars
                "Make $100k", //100k dollars
                "Make $10M", //10m dollars

                "Get first pump jack", //pumpjack

                "Click 100 times", //100 click
                "Click 1000 times", //1000 clicks
                "Click 10,000 times" //10k clicks
            ],
            image:[
                "bucket.png", //1 bucket
                "bucketBronze.png", //10 bucket
                "bucketGold.png", //100 bucket
                "bucketDiamond.png", //1000 bucket

                "oil.png", //1 oil
                "oilBronze.png", //100 oil
                "oilGold.png", //100k oil
                "oilDiamond.png", //10m oil

                "cursor.png", //1 click

                "dollar.png", //1 dollar
                "dollarBronze.png", //100 dollar
                "dollarGold.png", //100k dollars
                "dollarDiamond.png", //10 Mill dollars
  

                "pumpJack.png", //1 pumpjack

                "cursorBronze.png",// 100 click
                "cursorGold.png", //1000 clicks
                "cursorDiamond.png" //10k clicks
            ],
            type:[
                "building", //bucket one
                "building", //bucket bronze
                "building", //bucket gold
                "building", //bucket diamond

                "oil", //1 oil
                "oil", //100 oil
                "oil", //100k oil
                "oil", //10m oil
                

                "click", //1 click

                "money", //1 dollar
                "money", //100 dollar
                "money", //100k dollars
                "money", //10M dollars

                "building", //1  pumpjack

                "click", //100 click
                "click", //1000 clicks
                "click" //10k clicks
            ],
            requirement:[
                1, //1 buckets
                10, //10 buckets
                100, //100 buckets
                500, //500 buckets

                1, //1 oil
                100, //100 oil
                100000, //100k oil
                10000000, //10m oil

                1, //1 click

                1, //1 dollar
                100, // 100 dollar
                100000, //100k dollars
                10000000, //10 mill dollars

                1, //1 pump

                100, //100 clicks for click cent
                1000, //1000 clicks
                10000 //10k clicks
            ],
            objectIndex:[
                0, //1 bucket
                0, //10 bucket
                0, //100 bucket
                0, //1000 buckets

                -1, //1 oil
                -1, //100 oil
                -1, //100k oil
                -1, //10m oil

                -1, //1 click

                -1, //1 dollar
                -1, //100 dollar
                -1, //10k dollars
                -1, //1m $

                3, //1 pump

                -1, //100 click
                -1, //1000 clicks
                -1 //10k clicks
            ],
            awarded:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            
            earn: function(index)
            {
                this.awarded[index] = true;
            }
        }

        var display = {
            updateOil: function(){
                document.getElementById("oil").innerHTML = formatNumber(game.oil);
                document.getElementById("oilPerSecond").innerHTML = formatNumber(game.getOilPerSecond());
                document.title = formatNumber(game.oil) + " Oil - There Will Be Clicks";
                document.getElementById("totalOil").innerHTML = "Total Oil: " + formatNumber(game.totalOil);
                document.getElementById("totalClicks").innerHTML = "Total Clicks: " + formatNumber(game.totalClicks);
            },
            updateDollars: function(){
                document.getElementById("dollars").innerHTML = '$' + formatNumber(game.dollars);
                document.getElementById("dollarsPerSecond").innerHTML = '$' + formatNumber(game.getSalesPerSecond());
                document.getElementById("totalDollars").innerHTML = "Total Dollars: " + formatNumber(game.totalDollars);
            },
            updateShop:function(){
                document.getElementById("shopContainer").innerHTML = "";
                for(i = 0; i<building.name.length;i++){
                    document.getElementById("shopContainer").innerHTML += '<table class = "shopButton unselectable" onclick="building.purchase('+i+')"><tr><td id = "image"><img src = "images/'+building.image[i]+'" title="'+building.description[i]+'"></td><td id = "nameAndCost"><p>'+building.name[i]+'</p><p>$<span>'+formatNumber(building.cost[i])+'</span></p></td><td id = "oilPerSecond"><p><span>'+formatNumber(building.income[i])+'</span> Oil p/s</td><td id="amount"><span>'+building.count[i]+'</span></td> </tr></table>';
                }
            },
            updateSales:function(){
                document.getElementById("salesContainer").innerHTML = "";
                for(i = 0; i<sales.name.length;i++){
                    document.getElementById("salesContainer").innerHTML += '<table class = "salesButton unselectable" onclick="sales.purchase('+i+')"><tr><td id = "image"><img src = "images/'+sales.image[i]+'" title="'+sales.description[i]+'"></td><td id = "nameAndCost"><p>'+sales.name[i]+'</p><p>$<span>'+formatNumber(sales.cost[i])+'</span></p></td><td id = "oilPerSecondSold"><p><span>'+formatNumber(sales.income[i])+'</span> Oil sold p/s</td><td id="amount"><span>'+sales.count[i]+'</span></td> </tr></table>';
                }
            },
            updateUpgrades:function()
            {
                document.getElementById("upgradeContainer").innerHTML = "";
                for(i = 0; i < upgrade.name.length;i++)
                {
                    if(!upgrade.purchased[i])
                    {
                        if(upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i])
                        {
                            document.getElementById("upgradeContainer").innerHTML += '<img src= "images/'+upgrade.image[i]+'" title = "'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ($'+upgrade.cost[i]+')" onclick="upgrade.purchase('+i+')">';
                        }
                        else if(upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i])
                        {
                            document.getElementById("upgradeContainer").innerHTML += '<img src= "images/'+upgrade.image[i]+'" title = "'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ($'+upgrade.cost[i]+')" onclick="upgrade.purchase('+i+')">';
                        }
                        if(upgrade.type[i] == "sales" && sales.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i])
                        {
                            document.getElementById("upgradeContainer").innerHTML += '<img src= "images/'+upgrade.image[i]+'" title = "'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ($'+upgrade.cost[i]+')" onclick="upgrade.purchase('+i+')">';
                        }
                        else if(upgrade.type[i] == "sellPower" && game.totalDollars >= upgrade.requirement[i])
                        {
                            document.getElementById("upgradeContainer").innerHTML += '<img src= "images/'+upgrade.image[i]+'" title = "'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ($'+upgrade.cost[i]+')" onclick="upgrade.purchase('+i+')">';
                        }
                    }
                }
            },

            updateAwards: function()
            {
                document.getElementById("awardContainer").innerHTML = "";
                for(i = 0;i < award.name.length;i++)
                {
                    if(award.awarded[i])
                    {
                        document.getElementById("awardContainer").innerHTML += '<img src = "images/'+award.image[i]+'" title = "'+award.name[i]+' &#10; '+award.description[i]+'">';
                    }
                }
            }
        };

        function saveGame()
        {
            var gameSave = {
                oil:game.oil,
                dollars:game.dollars,
                totalDollars:game.totalDollars,
                totalOil:game.totalOil,
                totalClicks:game.totalClicks,
                clickValue:game.clickValue,
                version:game.version,
                buildingCount:building.count,
                buildingIncome:building.income,
                salesCount:sales.count,
                salesIncome:sales.income,
                salesCost:sales.cost,
                buildingCost:building.cost,
                upgradePurchased:upgrade.purchased,
                awardAwared:award.awarded,
                time:Date.now()
            };
            localStorage.setItem("gameSave",JSON.stringify(gameSave));
        }

        function loadGame()
        {
            var savedGame = JSON.parse(localStorage.getItem("gameSave"));
            if(localStorage.getItem("gameSave") !== null){
                if(typeof savedGame.oil !== "undefined") game.oil = savedGame.oil;
                if(typeof savedGame.totalOil !== "undefined") game.totalOil = savedGame.totalOil;
                if(typeof savedGame.dollars !== "undefined") game.dollars = savedGame.dollars;
                if(typeof savedGame.totalDollars !== "undefined") game.totalDollars = savedGame.totalDollars;
                if(typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
                if(typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
                if(typeof savedGame.time !== "undefined") game.time = savedGame.time;
                if(typeof savedGame.buildingCount !== "undefined"){
                    for(i = 0; i<savedGame.buildingCount.length;i++){
                        building.count[i] = savedGame.buildingCount[i];
                    }
                }
                if(typeof savedGame.buildingIncome !== "undefined"){
                    for(i = 0; i<savedGame.buildingIncome.length;i++){
                        building.income[i] = savedGame.buildingIncome[i];
                    }
                }
                if(typeof savedGame.buildingCost !== "undefined"){
                    for(i = 0; i<savedGame.buildingCost.length;i++){
                        building.cost[i] = savedGame.buildingCost[i];
                    }
                }
                if(typeof savedGame.salesCount !== "undefined"){
                    for(i = 0; i<savedGame.salesCount.length;i++){
                        sales.count[i] = savedGame.salesCount[i];
                    }
                }
                if(typeof savedGame.salesIncome !== "undefined"){
                    for(i = 0; i<savedGame.salesIncome.length;i++){
                        sales.income[i] = savedGame.salesIncome[i];
                    }
                }
                if(typeof savedGame.salesCost !== "undefined"){
                    for(i = 0; i<savedGame.salesCost.length;i++){
                        sales.cost[i] = savedGame.salesCost[i];
                    }
                }
                if(typeof savedGame.upgradePurchased !== "undefined")
                {
                    for(i = 0;i< savedGame.upgradePurchased.length;i++)
                    {
                        upgrade.purchased[i] = savedGame.upgradePurchased[i];
                    }
                }
                if(typeof savedGame.awardAwared !== "undefined")
                {
                    for(i = 0;i< savedGame.awardAwared.length;i++)
                    {
                        award.awarded[i] = savedGame.awardAwared[i];
                    }
                }

            }
            //Offline Income
            var timeofLoad = Date.now();
            var timeDiff = timeofLoad - savedGame.time;
            //strip off ms
            timeDiff /= 1000;
            timeDiff = Math.round(timeDiff);
            if(timeDiff > 0)
            {
            //earn the offline oil
            var oilEarnt = Math.round((game.getOilPerSecond() * timeDiff) / 2);
            var dollarEarnt = Math.round((game.getSalesPerSecond() * timeDiff) / 2);
            if(oilEarnt < dollarEarnt) window.alert("Your production didnt match your sales so you have earnt nothing");
                else
                {
                game.oil += oilEarnt - dollarEarnt;
                let trueoil = 0;
                trueoil = oilEarnt - dollarEarnt;
                game.totalOil += oilEarnt;
                game.dollars += dollarEarnt;
                game.totalDollars += dollarEarnt;
                window.alert("Since your last save you have earnt " + formatNumber(trueoil) +  " oil and earnt $" + formatNumber(dollarEarnt));
                }
            }
        }

        function resetGame()
        {
        if(confirm("Are you sure you wish to reset?"))
            {
                var gameSave = {};
                localStorage.setItem("gameSave",JSON.stringify(gameSave));
                location.reload();

            }   
        }

        function fadeOut(element,duration,finalOpacity,callback){
            opacity = 1;

            let elementFadingInterval = window.setInterval(function(){
                opacity -= 50 / duration;

                if (opacity <= finalOpacity){
                    clearInterval(elementFadingInterval);
                    callback();
                }

                element.style.opacity = opacity;
            },50)
        }

        function createNumberonClicker(event){

            //Grab the clicker
            let clicker = document.getElementById("clicker");

            //Grab the positon on where the clicker was clicked
            let clickerOffset = clicker.getBoundingClientRect();
            let positon = {
                x: event.pageX - clickerOffset.left,
                y: event.pageY - clickerOffset.top
            }

            //Create the number
            let element = document.createElement("div");
            element.textContent = "+" + formatNumber(game.clickValue);
            element.classList.add("number","unselectable");
            element.style.left = positon.x + "px";
            element.style.top = positon.y + "px";

            //Add the number to the clicker
            clicker.appendChild(element);

            //Slowly rise the element
            let movementInterval = window.setInterval(function(){
                if(typeof element == "undefined" && element == null) clearInterval(movementInterval);

                positon.y -= 2;
                element.style.top = positon.y + "px";
            },10)

            //slowly fade out
            fadeOut(element,2500,0.5,function(){
                element.remove();
            })
        }
         
        document.getElementById("clicker").addEventListener('click',function(event){
            game.totalClicks++;
            game.addToOil(game.clickValue);

            createNumberonClicker(event);
        },false);

        window.onload = function(){
            loadGame();
            display.updateOil();
            display.updateDollars();
            display.updateUpgrades();
            display.updateShop();
            display.updateSales();
            display.updateAwards();
            document.getElementById("gameVersion").innerHTML = "Game Version: " + game.version;
        };

        setInterval(function(){
            if(game.oil >= game.getSalesPerSecond())
            {
                for(i = 0; i <award.name.length;i++){
                    if (award.type[i] == "oil" && game.totalOil >= award.requirement[i]) award.earn(i);
                    else if (award.type[i] == "click" && game.totalClicks >= award.requirement[i]) award.earn(i);
                    else if (award.type[i] == "building" && building.count[award.objectIndex[i]] >= award.requirement[i])award.earn(i);
                    else if (award.type[i] == "money" && game.totalDollars >= award.requirement[i]) award.earn(i);
                }
                game.oil += game.getOilPerSecond();
                game.totalOil += game.getOilPerSecond();          
                game.oil -= game.getSalesPerSecond();
                game.dollars += game.getSalesPerSecond() * game.oilPrice;         
                game.totalDollars += game.getSalesPerSecond() * game.oilPrice;
                display.updateOil();
                display.updateDollars();
                display.updateAwards();
                display.updateSales();
                display.updateShop();
            }
            else
            {
                for(i = 0; i <award.name.length;i++){
                    if (award.type[i] == "oil" && game.totalOil >= award.requirement[i]) award.earn(i);
                    else if (award.type[i] == "click" && game.totalClicks >= award.requirement[i]) award.earn(i);
                    else if (award.type[i] == "building" && building.count[award.objectIndex[i]] >= award.requirement[i])award.earn(i);
                    else if (award.type[i] == "money" && game.totalDollars >= award.requirement[i]) award.earn(i);
                }
                game.oil += game.getOilPerSecond();
                game.totalOil += game.getOilPerSecond();                   
                display.updateOil();
                display.updateDollars();
                display.updateAwards();
                display.updateSales();
                display.updateShop();
            }
            
        },1000);
        
        setInterval(function()
        {
            display.updateOil();
            display.updateDollars();
            display.updateUpgrades();
        },10000);

        setInterval(function()
        {
            if (Math.random() > 0.95)
            {
                function getRandomInt(min, max) 
                {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                }
                var oilLoss = Math.ceil(game.oil /getRandomInt(50,91));
                var moneyLoss = Math.ceil(game.dollars / getRandomInt(50,100));
                game.oil -= oilLoss;
                game.dollars -= moneyLoss;
                window.alert("There has been an oil spill you have lost " + oilLoss +  " oil and it cost $" + moneyLoss + " to clean up");
            }
            saveGame();
        },30000 );

        document.addEventListener("keydown", function(event)
        {
            if(event.ctrlKey && event.which == 83)
            {
                event.preventDefault();
                saveGame();
            }
        },false);

        function formatNumber(input){

            if(input <= 10000){
                return input;
            }
            else if(input < 1000000){
                input = input/1000;
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "K"
            }
            else if(input < 1000000000){
                input = input /1000000;
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "M"
            }
            else if (input < 1000000000000){ // < 1 trill
                input = input / 1000000000; //1 billion
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "B"
            }
            else if (input < 1000000000000000){ //< 1 quad
                input = input / 1000000000000; 
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "T"
            }
            else if (input < 1000000000000000000){ //< 1 quin
                input = input/1000000000000000;
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "q"
            }
            else{
                input = input/1000000000000000000;
                Math.round((input + Number.EPSILON) * 100) / 100;
                return input.toFixed(2) + "Q"
            }
        }

//array of news
const news = ["I removed all the old news tickets but trust me they were lame",
"Holy shit some of these were cringe",
"looking back at this code - I am going to have a hard time adding anything",
"This game was coded pre-chatgpt",
"Oil is exactly $1 because i cannot be bothered to work in floats",
"Somehow this is a portfolio porject",
"Gamer moment",
"I spent too much money on a laptop to get back into this shit",
"No but for real why does javascript get hate",
"Service guarantees citizenship",
"Might even migrate this to a new JS framework",
"Graphics made by yours truly",
"I'd like to see paul allens clicker game",
"something funny here"
]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(news);

//logo
const logo = "<img src='images/oil2.png' width='25px' style='margin:0 8px'/>";
let tickerText = "";
let incNumber = 0;
//bro the shuffle feature is insane
//looping through the news array
while(incNumber<news.length)
{
  tickerText+=news[incNumber];
  //adds the logo in between news items
  if(incNumber!=news.length-1){
    tickerText+=logo;

  }
  incNumber++
}
shuffle(news)
incNumber = 0;

document.querySelector("#scroll").innerHTML = tickerText;