const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return "fizz-buzz", "bizz", "bizz" or the number entered.', function(){
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 5, expected: 'buzz'},
			{num: 3, expected: 'fizz'},
			{num: 1, expected: 1}
		];
		normalCases.forEach(function(input){
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);

		});
	});
	it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a', true, '15'
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});