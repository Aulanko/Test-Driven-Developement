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

    }
}