export class Board {
  width;
  height;
  stringi;
  
  //`...\n...\n...\n`

  constructor(width, height) {
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
      let rowindeksi = i.indexOf("X")
      let colindeksi = this.stringi.indexOf(i)
      if(rowindeksi && i!= this.stringi[-1]){
        i[rowindeksi] = "."
        this.stringi[colindeksi+1][rowindeksi] ="X"
      }
    } 
  }
}
