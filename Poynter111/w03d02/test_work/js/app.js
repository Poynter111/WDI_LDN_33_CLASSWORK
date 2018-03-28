// window.addEventListener('DOMContentLoaded', function(){
//Test frame work structure.
//descirbe contsins several tests, describe helps to group tests per frame work.
// It refers to a block containing a test for a specific aspect of the code.
function describe(description, callback){
  console.log(description);
  callback();
}
function it(description, callback){
  console.log(`→${description}`);
  callback();
}
function expect(expectation){
  function log(result){
    if(!!result){
      console.log('%c' + 'pass', 'color: green')
    } else {
      console.log('%c' + 'fail', 'color: red')
    }
  }
  return{
    toEqual: function(condition){
      log(expectation === condition);
    },
    toBe: function(condition){
      log(typeof expectation === condition);
    },
    toHaveProperty: function(condition){
      log(expectation.hasOwnProperty(condition));
    }
  };
}
//Asserstion engine-------------------------------------------------------------
//expect , take an argument which asserstions will be based on.
//toEqual, when we need to compare an object to a similar one.
//toBe, when we want to check a dataType.
//toHaveProperty, will check if some complex object has some propertty as well as expected value for that property.
// WRITTING TEST BELOW
// (testing the test framwork that runs the tests)
//actual code
var array = [['name', 'london'], ['population', 3489000]];
var object ={
  name: 'London',
  population: 3489000
};

function arrayToObject(array){
  const obj = {};
  array.forEach((subArray) => obj[subArray[0]] = subArray[1] );
  return obj;
}
//code.spec.js
describe('ArrayToObject', function(){
  it('should return an object', function (){
    const expectation = typeof arrayToObject(array);
    const condition = 'object';
    expect(condition).toEqual(condition);
  });
  it('should return an object', function (){
    expect(arrayToObject(array)).toBe('object');
  });
  it('Should have the correct properties', function(){
    expect(arrayToObject(array)).toHaveProperty('name');
    expect(arrayToObject(array)).toHaveProperty('population');
  });
});
// console.log('Im working');
// });
