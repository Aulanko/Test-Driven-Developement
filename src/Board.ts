export class Board {
  width;
  height;
  stringi = `...\n...\n...\n`

  constructor(width, height) {
    this.width = width;
    this.height = height;

  }

  toString() {
    return this.stringi
        }

  drop(block:string){

    this.stringi = `.${block}.\n...\n...\n`
  }
}
