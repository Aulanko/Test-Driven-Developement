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

  drop(block:string){
    
    this.blocki = {type:"",y:0,x:1};
    this.stringi[0][1] = block
    this.blocki.type = block
    this.onImpact = 2
  }

  tick(){
    const hasDefinedFreeSpace = this.blocki.y+1<this.stringi.length?  this.stringi[this.blocki.y+1][this.blocki.x]==".":false
    if (hasDefinedFreeSpace){
      this.stringi[this.blocki.y][this.blocki.x] ="."
      this.stringi[this.blocki.y+1][this.blocki.x] =this.blocki.type
      this.blocki.y +=1   } this.onImpact -=1
    /*
    for (const i of this.stringi){
      let colindeksi = i.indexOf(this.blocki.type)
      let rowindeksi = this.stringi.indexOf(i)
      const hasDefinedFreeSpace = this.blocki.y+1<this.stringi.length?  this.stringi[this.blocki.y+1][this.blocki.x]==".":false
      if(hasDefinedFreeSpace){
          if(this.blocki.y < this.stringi.length-1){
            i[colindeksi] = "."
            this.stringi[rowindeksi+1][colindeksi] =this.blocki.type
            this.blocki.y +=1
            continue }
          this.onImpact -=1}   
    } */
  }

  hasFalling(){
    if(this.onImpact<0){
      return false
    }
    return true
  }

}
