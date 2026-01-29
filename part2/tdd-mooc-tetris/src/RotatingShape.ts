export class RotatingShape{
    base;
    constructor(){
        this.base = ""   
    }
    static fromString(stringi:string):RotatingShape{
        const linet = stringi.split("\n")
        .map(line => line.trim()).filter(line=>line!="")
        const shape = new RotatingShape()

        shape.base = linet.join("\n")+"\n"
        return shape  
    }
    toString(){
        return this.base    
    }}