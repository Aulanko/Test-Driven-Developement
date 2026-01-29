export class Board {
  width;
  height;
  stringi;
  
  //`...\n...\n...\n`

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
    this.stringi = []
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

    this.stringi[0][1] = "X"
  }

  tick(){
    for (const i of this.stringi){
      let colindeksi = i.indexOf("X")
      let rowindeksi = this.stringi.indexOf(i)
      if(rowindeksi!= this.stringi.length-1){
        i[colindeksi] = "."
        this.stringi[rowindeksi+1][colindeksi] ="X"
      }
    } 
  }

  hasFalling(){
    for (const i of this.stringi){
      let colindeksi = i.indexOf("X")
      let rowindeksi = this.stringi.indexOf(i)
      if(this.stringi[rowindeksi+1][colindeksi]=="."){
        return true
     }
     else{
      return false
     }}}

}
