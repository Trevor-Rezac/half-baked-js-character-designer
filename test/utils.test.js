// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have changed the head 2 times, the middle 2 times, and the bottom 3 times!`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(2, 2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
