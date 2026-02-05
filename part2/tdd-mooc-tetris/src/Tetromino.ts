import { RotatingShape } from "./RotatingShape";

export class Tetromino{



    base:string[];
    position: number;
    #currentPosition:number;
    #differentPositions:object[];
    constructor(currentPosition:number, differentPositions:object[]){
        this.base = []
        this.position = 0
        this.#currentPosition=currentPosition
        this.#differentPositions = differentPositions
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

    toString(){
        return this.#differentPositions[this.#currentPosition]
    }

    
    
}