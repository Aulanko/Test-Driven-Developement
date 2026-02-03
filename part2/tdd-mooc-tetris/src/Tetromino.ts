export class Tetromino{

    base:string[];
    position: number;
    constructor(){
        this.base = []
        this.position = 0
    }

    toString(){
        
        const res = this.base.join("\n")+"\n"
        return res   

    }
    static get T_SHAPE():Tetromino{
        let shape = new Tetromino()

        shape.base = ['.T.','TTT','...']
        shape.position = 0
        

        return shape
    }

    rotateRight(){
        const positions =[
            ['.T.','TTT','...'],
            ['.T.','.TT','.T.'],
            ['...','TTT','.T.'],
            ['.T.','TT.','.T.']
        ]
        this.position =(this.position+1)%4
        this.base=positions[this.position]
        return this
    }

      rotateLeft(){
        const positions =[
            ['.T.','TTT','...'],
            ['.T.','TT.','.T.'],
            ['...','TTT','.T.'],
            ['.T.','.TT','.T.']
        ]
        this.position =(this.position+3)%4
        this.base=positions[this.position]
        return this
    }
}