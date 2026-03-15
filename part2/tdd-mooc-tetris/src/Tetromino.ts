import { RotatingShape } from "./RotatingShape";

export class Tetromino{



    whatShape:string;
    currentPosition:number;
    differentPositions:object[];
    constructor(currentPosition:number, differentPositions:object[], whatShape:string){
    
        this.whatShape = whatShape
        this.currentPosition=currentPosition
        this.differentPositions = differentPositions
    }

    static fromString(currentPosition:number, numberOfPositions:number, initialShape:string, whatShape:string){
        let shape = RotatingShape.fromString(initialShape)
        
        if(whatShape==="I"){
            const dafferentPositions = [
            `IIII\n....\n....`,
            `..I.\n..I.\n..I.\n..I.`
            ]
        }
        if(whatShape==="T"){
            const dafferentPositions = [
            `TTT.\n.T..\n....`,
            `.T..\nTT..\n.T..\n....`,
            `....\n.T..\nTTT.\n....`,
            `.T..\n.TT.\n.T..\n....`,
            ]
        }
        if(whatShape==="O"){
            const dafferentPositions =[
                `.OO.\n.OO.\n....`
            ]
        }

        const differentPositions = [
            shape,
            shape.rotateRight(),
            shape.rotateRight().rotateRight(),
            shape.rotateLeft()
        ].slice(0,numberOfPositions)

        return new Tetromino(currentPosition, differentPositions,whatShape)
    }   

    static T_SHAPE = Tetromino.fromString(
        0,
        4,
        `.T.\nTTT\n...\n`,
        "T"

    )

    static I_SHAPE = Tetromino.fromString(
        0,
        2,
        `.....\n.....\nIIII.\n.....\n.....`,
        "I"

    )

    static O_SHAPE = Tetromino.fromString(
        0,
        1,
        `.OO\n.OO\n...`,
        "O"

    )

    getCurrentShape(){  
        return this.differentPositions[this.currentPosition]
    }

    toString(){    
        return this.getCurrentShape().toString()
    }

   

    rotateRight(){
        return new Tetromino((this.currentPosition+1+this.differentPositions.length)%this.differentPositions.length,
             this.differentPositions, this.whatShape) }

    rotateLeft(){
        return new Tetromino((this.currentPosition-1+this.differentPositions.length)%this.differentPositions.length,
         this.differentPositions, this.whatShape) }

    
    
    
}