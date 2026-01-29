export class Board {
  width;
  height;
  stringi;
  blocki;
  
  //`...\n...\n...\n`

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
    this.stringi = []
    this.blocki = {type:"",y:0,x:1};

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

    this.stringi[0][1] = block
    this.blocki.type = block
  }

  tick(){
    for (const i of this.stringi){
      let colindeksi = i.indexOf(this.blocki.type)
      let rowindeksi = this.stringi.indexOf(i)
      if(rowindeksi!= this.stringi.length-1){
        i[colindeksi] = "."
        this.stringi[rowindeksi+1][colindeksi] =this.blocki.type
        this.blocki.y +=1
      }
    } 
  }

  hasFalling(){
    for (const i of this.stringi){
      let colindeksi = i.indexOf(this.blocki.type)
      let rowindeksi = this.stringi.indexOf(i)
      if(this.stringi[rowindeksi+1][colindeksi]=="."){
        return true
     }
     else{
      return false
     }}}

}
