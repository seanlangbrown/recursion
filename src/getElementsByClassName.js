// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (targetClass) {


   //create object of HTMLCollection prototype to store results
   found =  Object.create(HTMLCollection);

   //create function for appending results
   appendSelection = function(node) {

	  	var index = Object.keys(found).length;

	  	found[index] = node;
	  };

  //start recursive search
  nodeWorker(document.body, targetClass);

  //convert results to array for HR testing
  foundArr = arrayFrom(found);

  return foundArr;

};




//
var nodeWorker = function(node, target) {

	//check node for match
	if(node.classList !== undefined && node.classList.contains(target)) {
	  //if it matches, append to collection
      appendSelection(node);
	}
	//check if node has children
	if(node.childElementCount > 0) {
      //has children, check children
      nodeWorker(node.childNodes[0], target)
	}
	//check for siblings
	if(node.nextSibling !== null) {
		//has a sibling, check it
		nodeWorker(node.nextSibling, target);
	}


	//when recursive cases complete, return
    return;
}



//create an array from an obj
var arrayFrom = function(obj) {

	    var arr = [];

    for (key in obj) {

    	arr.push(obj[key]);
    }
    return arr;
}
