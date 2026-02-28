export class Board {
  width;
  height;
  stringi;
  blocki;
  onImpact;
  

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
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

    let finalBlocks;
    let bottomIndex =0

    if(typeof block =="string"){
      finalBlocks = [block]
    }
    else{
      const currentShape = block.getCurrentShape();
      const shapeString = currentShape.toString()
      finalBlocks = shapeString.trim().split("\n")
      if (finalBlocks[0][1] =="T"){
        bottomIndex = 1
      }if(finalBlocks[2][1] =="I"){
        bottomIndex = 2
      }      if(finalBlocks[0][1]=="O"){
        bottomIndex =1 }

      
    }

   

    
    let startX = Math.floor((this.width -finalBlocks[0].length)/2)

    this.blocki = {type: block, y: bottomIndex, x: startX};
    
    for(let r = 0; r<finalBlocks.length;r++){
      for(let col=0; col<finalBlocks[r].length; col++){
        this.stringi[r][startX +col]=finalBlocks[r][col]
      }
    }
    
    
    this.onImpact = 0
  }

  tick(){

    const hasDefinedFreeSpace = this.blocki.y+1<this.stringi.length?  this.stringi[this.blocki.y+1][this.blocki.x]==".":false
    
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
