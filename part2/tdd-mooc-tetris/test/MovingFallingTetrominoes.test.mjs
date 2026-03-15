
import { describe, test, beforeEach } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { expect } from "chai";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling Tetromino can be moved right and left", ()=>{
    let board;
    
    beforeEach(() => {
        board = new Board(10, 6);
        
    });
   
    test("Test should move tetromino to right", ()=>{

   
        board.drop(Tetromino.T_SHAPE)
        board.moveRight()
        expect(board.toString()).to.equalShape(
           `....TTT...
            .....T....
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
            `.TTT......
            ..T.......
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
            ...TTT....
            ....T.....
            ..........
            ..........
            ..........`
        );  
    } )
})
    describe("Test Tetrominoes cannot go beyond board or through objects", ()=>{
    let board;
    
    beforeEach(() => {
        board = new Board(10, 6);
        
    });
    test("Test cannot go over right side", () =>{
            board.drop(Tetromino.T_SHAPE)
            board.moveRight().moveRight().moveRight().moveRight().moveRight().moveRight()
            expect(board.toString()).to.equalShape(
                `.......TTT
                ........T.
                ..........
                ..........
                ..........
                ..........`
            ); 
        }  
    )

    test("Test cannot go over left side", () =>{
        board.drop(Tetromino.T_SHAPE)
        board.moveLeft().moveLeft().moveLeft().moveLeft().moveLeft().moveLeft()
        expect(board.toString()).to.equalShape(
        `TTT.......
         .T........
         ..........
         ..........
         ..........
         ..........`
    );
    })

    test("Test cannot be moved right through other blocks", () =>{
        board.drop(Tetromino.O_SHAPE)
        board.moveRight().moveRight().moveRight().moveRight().moveRight().moveRight()
        fallToBottom(board)
        board.drop(Tetromino.O_SHAPE)
        board.moveRight().moveRight().moveRight().moveRight().moveRight().moveRight()
        fallToBottom(board)

        board.drop(Tetromino.T_SHAPE)
        board.tick()
        board.tick()
        board.moveRight().moveRight()
        
        expect(board.toString()).to.equalShape(
        `..........
         ..........
         .....TTTOO
         ......T.OO
         ........OO
         ........OO`
        
    )});

    test("Test cannot be moved left through other blocks", () =>{
        board.drop(Tetromino.O_SHAPE)
        board.moveLeft().moveLeft().moveLeft().moveLeft().moveLeft().moveLeft()
        fallToBottom(board)
        board.drop(Tetromino.O_SHAPE)
        board.moveLeft().moveLeft().moveLeft().moveLeft().moveLeft().moveLeft()
        fallToBottom(board)

        board.drop(Tetromino.T_SHAPE)
        board.tick()
        board.tick()
        board.moveLeft().moveLeft().moveLeft()
        
        expect(board.toString()).to.equalShape(
        `..........
         ..........
         OOTTT.....
         OO.T......
         OO........
         OO........`
        );
        
    })

    test("Test cannot be moved down beyond the board (will stop falling)", () =>{
        board.drop(Tetromino.T_SHAPE)
        board.moveDown().moveDown().moveDown().moveDown().moveDown().moveDown().moveDown().moveDown()
        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ..........
         ..........
         ...TTT....
         ....T.....`
    );
    })

    test("Test cannot be moved down through other blocks (will stop falling)", () =>{
        board.drop(Tetromino.T_SHAPE)
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE)
        board.moveDown().moveDown().moveDown().moveDown().moveDown().moveDown().moveDown().moveDown()
        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...TTT....
         ....T.....
         ...TTT....
         ....T.....`
    );
    })
    


})