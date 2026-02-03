export class Tetromino{

    base:string[];
    constructor(){
        this.base = []
    }

    toString(){
        
        const res = this.base.join("\n")+"\n"
        return res   

    }
    static get T_SHAPE():Tetromino{
        let shape = new Tetromino()

        shape.base = ['.T.','TTT','...']
        

        return shape
    }

    rotateRight(){
        this.base=['.T.','.TT','.T.']
        return this
    }

    rotateLeft(){
        this.base=['.T.','TT.','.T.']
        return this
    }
}