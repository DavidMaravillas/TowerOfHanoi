const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Towers{
    constructor(){
        this.rods = {A:[],B:[],C:[]}

    }

    setDiscs(){
        this.rods.A = [3,2,1]
    }
    move(oldRod,newRod){

        this.rods[newRod].push(this.rods[oldRod][(this.rods[oldRod]).length-1])
        this.rods[oldRod].pop()
    }

    
}

let towers = new Towers()

towers.setDiscs()

console.log(towers.rods)
towers.move("A","C")
towers.move("A","B")
console.log(towers.rods)

