import Explorer from './explorer/Explorer.js'

// import * as Animate from './explorer/Animate.js'
// import * as Diagnostics from './explorer/Diagnostics.js'
// import * as Test from './explorer/Test.js'

/**
* Global instance of the {@link Explorer} object
* @const
*/
const E = new Explorer();

/**
 * main.js - script to sequence the creating and display of the geometric model

 * primary interface for {@link main}
 * @author 𝚽 <phi@geometor.com>
 * @license MIT
 *
 * @function
 */
function main() {

  console.time("* main *");
  test_lines();
  // test_circles();
  console.timeEnd("* main *");

  // console.time("* play *");
  // TL_DRAW.play();
  // console.timeEnd("* play *");
  // checkAllSegments();
  //animateGoldenSegments();
}

function test_lines() {
  E.addPointByValue( "0", "0" )
  
  E.addPointByValue( "-1", "1" )
  E.addPointByValue( "1", "1" )

  E.addPointByValue( "-2", "-2" )
  E.addPointByValue( "1", "-2" )

  let L1 = E.addLine(1, 2)
  let L2 = E.addLine(3, 4)
  E.addLine(1, 4)
  E.addLine(2, 3)
  E.addLine(2, 4)
  E.addLine(0, 1)
  console.log(L1);

  // E.addLine(2, 3)
}
function test_circles() {
  E.addPointByValue( "0", "0" )
  
  E.addPointByValue( "-1", "1" )
  E.addPointByValue( "1", "1" )

  // E.addPointByValue( "-2", "-2" )
  // E.addPointByValue( "1", "-2" )

  // E.addCircle(2, 1)
  let C1 = E.addCircle(0, 1)
  console.log(C1)
  // let C2 = E.addCircle(1, 0)
  // console.log(C2)
  // E.addCircle(1, 2)
  // E.addCircle(1, 4)
  // E.addCircle(2, 3)
  // console.log(L1);

  // E.addLine(2, 3)
}

main();
