
import { describe, test, beforeEach } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { expect } from "chai";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling Tetromino can be moved right", ()=>{
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });
    test.skip()
})