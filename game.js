// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

class Towers{
    constructor(){
        this.rods = {A:[],B:[],C:[]}
        this.moveCount = 0

    }

    setDiscs(){
        this.rods.A = [3,2,1]
    }
    isValidMove(oldRod,newRod){
        if(!this.rods[newRod].length){
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
    gameWon(){
        if(this.rods["B"].length === 3 ||this.rods["C"] === 3){
            return true
        } else {
            return false
        }
    }
    getMove(){
        
    }
    
}

let towers = new Towers()

towers.setDiscs()

console.log(towers.rods)
towers.move("A","C")
towers.move("A","B")
console.log(towers.rods)
towers.move("B","C")
towers.move("C","A")
towers.move("A","B")
towers.move("A","B")
towers.move("B","C")
towers.move("B","A")

console.log(towers.rods)
console.log(towers.moveCount)
