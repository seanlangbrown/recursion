// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var nullReplace = function(str) {
  	return (str === undefined) ? null : str ;
  }

  var processArray = function(array) {
	//get first element of array
      var element = array.shift()
        //stringify 
      //if element is not an object, stringify
      //if element is an object, stringify
      str = nullReplace(stringifyJSON(element));
      //if last element
      if(obj.length === 0) {
        return(str)
      }
      //otherwise, return 
      return str + ',' + processArray(array);
  	  //each element in the array, call strigifyJSON
  	  //if element is undefined, ret null
  }

  var processObject = function(ob) {
    var keys = Object.keys(ob);
    
    var element = stringifyJSON(ob[key]);
    if(element === undefined) {
    	return '';
    }


    return keyname + ':' + element;




  }

  //Base Casses
  if(typeof(obj) === 'string') {
    //a string
    //return " + value + "
    return '\"' + obj + '\"';	
  } else if (typeof(obj) === 'number') {
  	//a number
      //return value as string
    return String(obj);
  } else if (obj === undefined || typeof(obj) === 'function' || typeof(obj) === 'symbol') {
  	//undefined, function, symbol
      //return undefined
    return undefined;
  } else if (typeof(obj) === 'null') {
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
      return '{' + processObject(obj) + '}';
  	}
  } else {
  	//unrecognized type
  	console.log('strinigyJSON encountered an unrecognized type' + typeof(obj) + ':' + obj.tostring());
  	return undefined;
  }






  
  

};
