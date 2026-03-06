
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
   
    test("Test should move tetromino to right", ()=>{

   
        board.drop(Tetromino.T_SHAPE)
        board.moveRight()
        expect(board.toString()).to.equalShape(
            `.....T....
            ....TTT...
            ..........
            ..........
            ..........
            ..........`
        );  
        }
    ) 

    test("Test should move tetromino to left", ()=>{
        board.drop(Tetromino.T_SHAPE)
        board.moveLeft()
        expect(board.toString()).to.equalShape(
            `...T......
            ..TTT.....
            ..........
            ..........
            ..........
            ..........`
        );  
    } )

    test("Test should move tetromino to down", ()=>{
        board.drop(Tetromino.T_SHAPE)
        board.moveDown()
        expect(board.toString()).to.equalShape(
            `..........
            ....T.....
            ...TTT....
            ..........
            ..........
            ..........`
        );  
    } )

    test.skip("Test cannot go over right side", () =>{
            board.drop(Tetromino.T_SHAPE)
            board.moveRight().moveRight().moveRight().moveRight().moveRight().moveRight()
            expect(board.toString()).to.equalShape(
                `........T.
                .......TTT
                ..........
                ..........
                ..........
                ..........`
            ); 
        }  
    )

    test.skip("Test cannot go over left side", () =>{
        board.drop(Tetromino.T_SHAPE)
        board.moveLeft().moveLeft().moveLeft().moveLeft().moveLeft().moveLeft()
        expect(board.toString()).to.equalShape(
        `.T........
         TTT.......
         ..........
         ..........
         ..........
         ..........`
    );
    })
    


})