export class Board {
  width;
  height;
  stringi;
  blocki;
  onImpact;
  finalBlocks;
  

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
    this.finalBlocks =[]
    this.stringi = []
    this.blocki = {type:"",y:0,x:1};
    this.onImpact = 2

    for (let i = 0; i<height; i++){
      let lista = []
      for (let i = 0; i<width; i++){
        lista.push(".")
      }
      this.stringi.push(lista)
    }

  }

  toString() {
    let res = ""
    for (const i of this.stringi){
      res += i.join("")+"\n"
    }

    return res
  }

  drop(block:any){
    if(this.hasFalling() && this.blocki.type!=""){
      throw new Error("already falling")
    }

    
    let bottomIndex =0

    if(typeof block =="string"){
      this.finalBlocks = [block]
    }
    else{
      const currentShape = block.getCurrentShape();
      const shapeString = currentShape.toString()
      this.finalBlocks = shapeString.trim().split("\n")

      if (this.finalBlocks[0][1] =="T"){
        bottomIndex = 1
        this.blocki.type ="T"
      }
      if(this.finalBlocks[2][1] =="I"){
        bottomIndex = 2
        this.blocki.type ="I"
      }
      if(this.finalBlocks[0][1]=="O"){
        bottomIndex =1
        this.blocki.type="O"
      }

      
    }

   

    
    let startX = Math.floor((this.width -this.finalBlocks[0].length)/2)

    this.blocki = {type: block, y: bottomIndex, x: startX};
    
    for(let r = 0; r<this.finalBlocks.length;r++){
      for(let col=0; col<this.finalBlocks[r].length; col++){
        this.stringi[r][startX +col]=this.finalBlocks[r][col]
      }
    }
    
    
    this.onImpact = 0
  }

  tick(){

    const bottomRow = this.stringi[this.blocki.y]
    
    const hasDefinedFreeSpace = this.blocki.y+1<this.stringi.length?  this.stringi[this.blocki.y+1][this.blocki.x]==".":false

    let startX = Math.floor((this.width -this.finalBlocks[0].length)/2)
    /*
    for(let r = 0; r<this.finalBlocks.length;r++){
      for(let col=0; col<this.finalBlocks[r].length; col++){
        this.stringi[r][startX +col]=this.finalBlocks[r][col]
      }
    }
    */

    if (hasDefinedFreeSpace){
      
      this.stringi[this.blocki.y][this.blocki.x] ="."
      this.stringi[this.blocki.y+1][this.blocki.x] =this.blocki.type
      this.blocki.y +=1   
    
    } 
    else{
      
      this.onImpact -=1
      
      
    }
    
  
  }

  hasFalling(){
    if(this.onImpact<0){
      return false
    }
    return true
  }

}
