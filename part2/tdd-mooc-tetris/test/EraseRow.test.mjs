import { describe, test, beforeEach } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { expect } from "chai";

function fallToBottom(board){
    for(let i=0; i<16;i++){
        board.tick()
    }
}

function moveToLeftEdge(board){
    for(let i=0; i<16; i++){
        board.moveLeft()
    }
}

function moveToRightEdge(board){
    for(let i=0; i<16;i++){
        board.moveRight()
    }
}

describe("Erasing a single row of same type from bottom", ()=>{
    let board;
    beforeEach(()=>{
        board = new Board(8,10)
    })

    test("the bottom row gets removed, when its full", ()=>{
        board.drop(Tetromino.I_SHAPE)
       
        moveToLeftEdge(board)
        fallToBottom(board)
        expect(board.toString()).to.equalShape(
           `........
            ........
            ........
            ........
            ........
            ........
            ........
            ........
            ........
            IIII....` 
        )
        board.drop(Tetromino.I_SHAPE)
        fallToBottom(board)
        


    })

})