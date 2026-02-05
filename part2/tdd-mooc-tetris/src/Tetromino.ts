import { RotatingShape } from "./RotatingShape";

export class Tetromino{



   
    currentPosition:number;
    differentPositions:object[];
    constructor(currentPosition:number, differentPositions:object[]){
    
        this.currentPosition=currentPosition
        this.differentPositions = differentPositions
    }

    static fromString(currentPosition:number, numberOfPositions:number, initialShape:string){
        let shape = RotatingShape.fromString(initialShape)
        const differentPositions = [
            shape,
            shape.rotateRight(),
            shape.rotateRight().rotateRight(),
            shape.rotateLeft()
        ].slice(0,numberOfPositions)
        return new Tetromino(currentPosition, differentPositions)
    }   

    static T_SHAPE = Tetromino.fromString(
        0,
        4,
        `.T.\nTTT\n...\n`

    )

    getCurrentShape(){  
        return this.differentPositions[this.currentPosition]
    }

    toString(){    
        return this.getCurrentShape().toString()
    }

   

    rotateRight(){
        return new Tetromino((this.currentPosition+1+this.differentPositions.length)%4,
             this.differentPositions) }

    rotateLeft(){
        return new Tetromino((this.currentPosition-1+this.differentPositions.length)%4,
         this.differentPositions) }

    
    
    
}