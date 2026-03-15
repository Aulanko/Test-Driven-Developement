
import { describe, test } from "vitest";
import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.ts";

function distinctOrientations(shape) {
  const distinct = new Set();
  let goingRight = shape;
  let goingLeft = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(goingRight.toString());
    goingRight = goingRight.rotateRight();
    distinct.add(goingLeft.toString());
    goingLeft = goingLeft.rotateLeft();
  }
  return distinct;
}

describe("The T shape", () => {
  const shape = Tetromino.T_SHAPE;

  test("initial orientation", () => {
   /*expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );*/
    expect(shape.toString()).to.equalShape(
      `TTT.\n.T..\n....`
    )
  });

  test("can be rotated right/clockwise", () => {
    /*expect(shape.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );*/

    expect(shape.rotateRight().toString()).to.equalShape(
       `.T..\nTT..\n.T..\n....`
    )

  });

  test("can be rotated left/counter-clockwise", () => {
    /*expect(shape.rotateLeft().toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );*/

    expect(shape.rotateLeft().toString()).to.equalShape(
       `.T..\n.TT.\n.T..\n....`
    )
  });

  test("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
});



describe("The I shape", () => {
  const shape = Tetromino.I_SHAPE;

  test("initial orientation", () => {
    /*expect(shape.toString()).to.equalShape(
      `.....
       .....
       IIII.
       .....
       .....`
    );*/

    expect(shape.toString()).to.equalShape(
        `IIII\n....\n....`
    )
  });

  test("can be rotated right/clockwise", () => {
    /*expect(shape.rotateRight().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );*/

    expect(shape.rotateRight().toString()).to.equalShape(
       `..I.\n..I.\n..I.\n..I.`
    )
  });

  test("can be rotated left/counter-clockwise", () => {
    /*expect(shape.rotateLeft().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );*/

    expect(shape.rotateLeft().toString()).to.equalShape(
       `..I.\n..I.\n..I.\n..I.`
    )
  });

  test("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(2);
  });
});



describe("The O shape", () => {
  const shape = Tetromino.O_SHAPE;

  test("initial orientation", () => {
    /*expect(shape.toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );*/

    expect(shape.toString()).to.equalShape(
        `.OO.\n.OO.\n....`
    )
  });

  test("cannot be rotated right/clockwise", () => {
    /*expect(shape.rotateRight().toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );*/

    expect(shape.rotateRight().toString()).to.equalShape(
        `.OO.\n.OO.\n....`
    )
  });

  test("cannot be rotated left/counter-clockwise", () => {
    /*expect(shape.rotateLeft().toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );*/

    expect(shape.rotateLeft().toString()).to.equalShape(
       `.OO.\n.OO.\n....`
    )
  });

  test("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(1);
  });
});

