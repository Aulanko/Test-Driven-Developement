export class Tetromino{

    base:string;
    constructor(){
        this.base = ""
    }

    toString(){
        
        return this.base

    }
    static get T_SHAPE():Tetromino{
        let shape = new Tetromino()
        shape.base = '.T.\nTTT\n...\n'
        

        return shape
    }
}