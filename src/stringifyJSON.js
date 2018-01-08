// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var nullReplace = function(str) {
  	return (str === undefined) ? null : str ;
  }

var processArray = function(array) {

  if(array.length === 0) {
    //if array is empty, return blank
    return '';
  }
  var element = array.shift()
  //get first element of array
    //stringify 
    //if element is undefined, ret null
  str = nullReplace(stringifyJSON(element));
  //if last element
  if(array.length === 0) {
    return(str)
  }
  //otherwise, get next element
  return str + ',' + processArray(array);

}

var processObject = function(ob, keys) {
  if(keys.length > 0) {
    //get next key
    var key = keys.shift();
    var element = stringifyJSON(ob[key]);
    if(element === undefined) {
      //if element is undefined, omit (get next element)
  	  return processObject(ob, keys);
    }

    if(keys.length === 0) {
      //if last element
      return stringifyJSON(key) + ':' + element;
    }
    //if not last element in ob, get next element
    return stringifyJSON(key) + ':' + element + ',' + processObject(ob, keys);

  } else {
    //if object is empty
    return '';
  }

}


var stringifyJSON = function(obj) {
  // your code goes here
  console.log(JSON.stringify(obj));

  //Base Casses
  if(typeof(obj) === 'string') {
    //a string
    //return " + value + "
    return '\"' + obj + '\"';	
  } else if (typeof(obj) === 'number') {
  	//a number
      //return value as string
    return String(obj);
  } else if (typeof(obj) === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  } else if (obj === undefined || typeof(obj) === 'function' || typeof(obj) === 'symbol') {
  	//undefined, function, symbol
      //return undefined
    return undefined;
  } else if (obj === null) {
  	return 'null';
  //recursive cases
  } else if (typeof(obj) === 'object') {
  	if(Array.isArray(obj)) {
    //an array
      return '[' + processArray(obj) + ']';
  	} else {
    //an object
      //each element in the object, stringify key, stringify element
      //if undefined, omit
      var keys = Object.keys(obj);
      return '{' + processObject(obj, keys) + '}';
  	}
  } else {
  	//unrecognized type
  	console.log('strinigyJSON encountered an unrecognized type' + typeof(obj) + ':' + obj);
  	return undefined;
  }






  
  

};
