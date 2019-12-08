const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Towers{
    constructor(){
        this.rods = {A:[3,2,1],B:[],C:[]}
        this.moveCount = 0
        this.gameOver = false
    }

    isValidMove(oldRod,newRod){
        if(!this.rods[oldRod].length){
            return false
        } else if(!this.rods[newRod].length){
            return true
        } else if( this.rods[oldRod][(this.rods[oldRod]).length-1] > this.rods[newRod][(this.rods[newRod]).length-1]){
            return false
        } else {
            return true
        }
    }

    move(oldRod,newRod){
        if(this.isValidMove(oldRod,newRod)){
            this.rods[newRod].push(this.rods[oldRod][(this.rods[oldRod]).length-1])
            this.rods[oldRod].pop()
            this.moveCount +=1
        } else {
            console.log("Invalid Move")
            this.moveCount +=1
        }
    }

    gameWon() {
        if (this.rods["B"].length === 3 || this.rods["C"].length === 3) {
            return true
        } else {
            return false
        }
    }


    getMove(){
        rl.question(`${this.rods}What rod would you like to move?`, (oldRod)=>{
            rl.question("To which new rod would you like to move it to?", (newRod)=>{
                this.move(oldRod,newRod);
                console.log(this.rods)
            rl.close();
            }
    
        )}
        )

        return this.getMove()

    }
    play(){
        this.setDiscs()
        this.gameWon()
        if(this.gameWon()|| this.moveCount=== 12) return this.results()
            rl.question(`What rod would you like to move?`, (oldRod) => {
                rl.question("To which new rod would you like to move it to?", (newRod)=>{
                    this.move(oldRod.toUpperCase(),newRod.toUpperCase());
                    this.getMove()
                // rl.close();
                })
            })
        }
        
        results(){
            if(this.gameWon()){
                console.log(`Player Won with ${this.moveCount} moves, the BEST MOVES are 7 Steps`)
                rl.close()
            } else {
                console.log(`Player lost with ${this.moveCount} moves, the BEST MOVES are 7 Steps`)
                rl.close()
            }
        }
        
    }
    // play(){
    //     (!this.gameOver){
    //         this.getMove()
    //     }
    // }

let towers = new Towers()

towers.getMove()
// console.log(towers.rods)



// Move 1: move disk 1 to post C
// Move 2: move disk 2 to post B
// Move 1: move disk 1 to post B
// Move 4: move disk 3 to post C
// Move 5: move disk 1 to post A
// Move 6: move disk 2 to post C
// Move 7: move disk 1 to post C
// towers.move("A","C")
// console.log(towers.rods)
// towers.move("A","B")
// console.log(towers.rods)
// towers.move("C","B")
// console.log(towers.rods)
// towers.move("A","C")
// console.log(towers.rods)
// towers.move("B","A")
// towers.move("B","C")
// console.log(towers.rods)
// towers.move("A","C")
// console.log(towers.rods)
// towers.gameWon()



