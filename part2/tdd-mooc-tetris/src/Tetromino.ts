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
        this.base=['.T.','TT.','.T.']
    }

    rotateLeft(){
        let final_list = []
        let counter = this.base.length-1
        for (let i =0; i< this.base.length;i++){let new_list = ""
            for (let i of this.base){
                new_list +=i[counter] } counter --;
            final_list.push(new_list)}  this.base= final_list
        return this
    }
}