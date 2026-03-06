
import { describe, test, beforeEach } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { expect } from "chai";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Test Rotating I shape", () =>{
    let board;
    beforeEach(()=>{
        new Board(15,10);
    })
    
    test("Test I shape dropping and rotation", ()=>{
      //  board.drop(Tetromino.I_SHAPE)
        
    })

})