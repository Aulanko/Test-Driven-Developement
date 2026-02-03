export class RotatingShape{
    
    base:string[];
    constructor(){
        this.base =[] 
    }


    static fromString(stringi:string):RotatingShape{
        const linet = stringi.split("\n")
        .map(line => line.trim()).filter(line=>line!="")
        
        
        const shape = new RotatingShape()

        shape.base = linet
        return shape  
    }


    toString(){
        const res = this.base.join("\n")+"\n"
        return res   
    }

    rotateRight(){
        let final_list = []
        let counter = 0
        for (let i =0; i< this.base.length;i++){

            let new_list = ""

            for (let i of this.base){

                new_list =i[counter]+new_list
            }
            counter ++;
            final_list.push(new_list)
        }
        this.base= final_list
        
        return this
    }

    rotateLeft(){
        let final_list = []
        let counter = this.base.length-1
        for (let i =0; i< this.base.length;i++){

            let new_list = ""

            for (let i of this.base){

                new_list =i[counter]+new_list
            }
            counter --;
            final_list.push(new_list)
        }
        this.base= final_list
        
        return this
    }
}