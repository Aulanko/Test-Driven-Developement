export class Board {
  width;
  height;
  stringi = [[".",".","."],
             [".",".","."],
             [".",".","."]]
  
  //`...\n...\n...\n`

  constructor(width, height) {
    this.width = width;
    this.height = height;

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
    this.stringi[0][1] ="."
    this.stringi[1][1] = "X"
  }
}
