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
        let counter = 0
        let final_list = []
        for(let i =0; i<this.base.length;i++){
            let new_list = ""
            for(let j of this.base){
                new_list = j[counter] + new_list}  final_list.push(new_list)
        } counter ++;
        this.base = final_list
        return this }}