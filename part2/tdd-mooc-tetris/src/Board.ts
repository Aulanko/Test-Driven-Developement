import { IntegerType } from "mongodb";
import { Tetromino } from "./Tetromino";

export class Board {
  width;
  height;
  stringi;
  blocki;
  onImpact;
  finalBlocks:string[];
  fallingTetromino:any;
  

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
    this.finalBlocks =[]
    this.stringi = []
    this.fallingTetromino = null
   
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

    
    this.fallingTetromino = block

    if(typeof block =="string"){
      this.finalBlocks = [block]
    }
    else{
      const currentShape = block.getCurrentShape();
      const shapeString = currentShape.toString()
      this.finalBlocks = shapeString.trim().split("\n")

      if (this.finalBlocks[0][1] =="T"){
        this.blocki.type ="T"
        
      }
      if(this.finalBlocks[2][1] =="I"){
        this.blocki.type ="I"
       
      }
      if(this.finalBlocks[0][1]=="O"){
        this.blocki.type="O"
      }

      
    }

   

    
    let startX = Math.floor((this.width -this.finalBlocks[0].length)/2)

    this.blocki = {type: block, y: 0, x: startX};
    
    for(let r = 0; r<this.finalBlocks.length;r++){
      for(let col=0; col<this.finalBlocks[r].length; col++){
        this.stringi[r][startX +col]=this.finalBlocks[r][col]
      }
    }
    
    
    this.onImpact = 0
  }



  tick(){
    if(!this.finalBlocks||this.finalBlocks.length===0){
      return
    }

    const bottomRow = this.stringi[this.blocki.y]
    
    const hasDefinedFreeSpace = this.blocki.y+1<this.stringi.length?  this.stringi[this.blocki.y+1][this.blocki.x]==".":false

    
    const blocksFalling = this.getFallingBlocks()
   

    let hasFreeDown = true

    for(let block of blocksFalling){
      let rowBelow = block.row+1
      if(rowBelow>=this.height){
        hasFreeDown=false
        break
      }

      const blockBelow = this.stringi[rowBelow][block.col]
      if(blockBelow!=="."){
        const partOfShape= blocksFalling.some(i=>i.row===rowBelow&&i.col===block.col)
        if(!partOfShape){
          hasFreeDown=false
          break
        }
      }
      }
      if(hasFreeDown){
        for(const block of blocksFalling){
          this.stringi[block.row][block.col]="."
        }
       
      this.blocki.y ++;

      for(let row = 0; row<this.finalBlocks.length;row++){
        for(let col = 0; col<this.finalBlocks[row].length;col++){
         if(this.finalBlocks[row][col]!=="."){
          this.stringi[this.blocki.y+row][this.blocki.x+col] = this.finalBlocks[row][col]
            }
          }
        }
      } else{
        this.onImpact -=1
         if (this.onImpact <0 ){
          this.blocki = { type:"", y:0,x:1};
          this.finalBlocks= [];
        }
      }
    

    
    
  
  }

  hasFalling(){
    if(this.onImpact<0){
      return false
    }
    return true
  }

  getFallingBlocks(){
    const blocksFalling = []
    for(let row = 0; row<this.finalBlocks.length;row++){
      for(let col = 0; col<this.finalBlocks[row].length;col++){
        if(this.finalBlocks[row][col]!="."){
          const fallingRow = this.blocki.y+row
          const fallingCol = this.blocki.x+col
          blocksFalling.push({row:fallingRow, col:fallingCol})
        }
      }
    }
    return blocksFalling
  }

  reDrawFallingBlocks(){
    
    for(let row = 0; row<this.finalBlocks.length;row++){
        for(let col = 0; col<this.finalBlocks[row].length;col++){
         if(this.finalBlocks[row][col]!=="."){
          this.stringi[this.blocki.y+row][this.blocki.x+col] = this.finalBlocks[row][col]
            }
          }
        }
  }

  clearOldPosition(){
     const blocksFalling = this.getFallingBlocks();
        for(const block of blocksFalling) {
            this.stringi[block.row][block.col] = ".";
        }
  }

  shapeRotationPossible(newFinalBlocks:string[],x:any,y:any){
    for (let row = 0; row < newFinalBlocks.length; row++) {
      for (let col = 0; col < newFinalBlocks[row].length; col++) {
        if (newFinalBlocks[row][col] !== ".") {
         
          if (x + col >= this.width || x + col < 0) return false;
          

          const boardRow = y + row;
          const boardCol = x + col;
          if (boardRow < 0 || boardRow >= this.height) return false;

          const partOfShape = this.getFallingBlocks().some(
            block => block.row === boardRow && block.col === boardCol
          );
          if (!partOfShape && this.stringi[boardRow][boardCol] !== ".") {
            return false;
          }
        }
      }
  }
  return true;
  }

  applyRotation(rotatedTermino:any, newFinalBlocks:any, testX:number, testY:number){
    this.clearOldPosition()
    this.blocki.y = testY
    this.blocki.x = testX
    this.fallingTetromino = rotatedTermino
    this.finalBlocks = newFinalBlocks
      
    this.reDrawFallingBlocks()
  }


  moveRight(){
    const blocksFalling = this.getFallingBlocks()
    for(const block of blocksFalling) {
        if(block.col+1>=this.width){
          return this
        }
        if(this.stringi[block.row][block.col+1]!="."){
          const ispartOfShape = blocksFalling.some(b=>b.row===block.row&&b.col===block.col+1)
          if(!ispartOfShape){
            return this
          }
        }
    }
    for(const block of blocksFalling){
      this.stringi[block.row][block.col] = ".";
    }
    this.blocki.x++;

    this.reDrawFallingBlocks()
    return this
  }

  moveLeft(){
    const blocksFalling = this.getFallingBlocks()
    for(const block of blocksFalling) {
        if(block.col-1<0){
          return this
        }
        if(this.stringi[block.row][block.col-1]!="."){
          const ispartOfShape = blocksFalling.some(b=>b.row===block.row&&b.col===block.col-1)
          if(!ispartOfShape){
            return this
          }
        }
        
    }
    for(const block of blocksFalling){
      this.stringi[block.row][block.col] = ".";
    }
    this.blocki.x--;

    this.reDrawFallingBlocks()
    return this
  }

  moveDown(){
    const blocksFalling = this.getFallingBlocks()
    for(const block of blocksFalling){
      if(block.row+1 >= this.height){
        return this
      }
      if(this.stringi[block.row+1][block.col]!="."){
        const ispartOfShape = blocksFalling.some(b=>b.row===block.row+1&&b.col===block.col)
        if(!ispartOfShape){
            return this
          }
      }    }
    for(const block of blocksFalling) {
        this.stringi[block.row][block.col] = ".";
    }
    this.blocki.y++;
    this.reDrawFallingBlocks()
    return this
    return
  }

  rotateRight(){

   

    let rotatedTermino = this.fallingTetromino.rotateRight()


    let shape = rotatedTermino.getCurrentShape()
    let newFinalBlocks = shape.toString().trim().split("\n")

    let possibleKickDirections = [
      {kx:0, ky:0},
      {kx:-1,ky:0},
      {kx:1,ky:0}]
    if(this.fallingTetromino===Tetromino.I_SHAPE){
      possibleKickDirections = [{ kx: 0, ky: 0 }]
    }
   
    
    

    const ogX = this.blocki.x
    const ogY = this.blocki.y

    for(const kick of possibleKickDirections){
      let testX = ogX + kick.kx
      let testY = ogY
        
      
      if(this.shapeRotationPossible(newFinalBlocks, testX, testY)){
        
        this.applyRotation(rotatedTermino,newFinalBlocks,testX,testY)
        return this
      }

    }
    return this
  }

  rotateLeft(){

   

    let rotatedTermino = this.fallingTetromino.rotateLeft()
    let shape = rotatedTermino.getCurrentShape()
    let newFinalBlocks = shape.toString().trim().split("\n")
    let possibleKickDirections = [
      {kx:0, ky:0},
      {kx:-1,ky:0},
      {kx:1,ky:0}]
    if(this.fallingTetromino===Tetromino.I_SHAPE){
      possibleKickDirections = [{ kx: 0, ky: 0 }]
    }

    const ogX = this.blocki.x
    const ogY = this.blocki.y

    for(const kick of possibleKickDirections){
      let testX = ogX + kick.kx
      let testY = ogY
        
      
      if(this.shapeRotationPossible(newFinalBlocks, testX, testY)){
        
        this.applyRotation(rotatedTermino,newFinalBlocks,testX,testY)
        return this
      }

    }
    return this
  }

}


