// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should not modify the input', function() {
    stringifiableObjects.forEach(function(test) {
      var obj = {before:test};
      obj.result = stringifyJSON(test);
      expect(obj.before).to.equal(test);
    });
  });


  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });

});
