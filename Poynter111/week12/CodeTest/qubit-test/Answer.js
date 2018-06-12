/* eslint-disable no-unused-vars */

var $ = function(selector) {
  var elements = [];
  // var getByTag;
  // var getByClass;
  // var getById;

  //div#some_id.some_class
  //div.some_class#some_id

  const bits = selector.split(/[#.]/);
  const tagName = bits[0];
  let className;
  let id;

  if(selector.charAt(tagName.length) === '.'){
    className = bits[1];
    id = bits[2];
  }

  if(selector.charAt(tagName.length) === '#'){
    id = bits[1];
    className = bits[2];
  }

  if(tagName && !className && !id){
    elements = document.getElementsByTagName(tagName);
  }

  if(tagName && className && !id){
    elements = [ ...document.getElementsByTagName(tagName) ]
      .filter(element => element.classList.contains(className));
  }

  if(!tagName && !className && id){
    elements = [document.getElementById(id)];
  }

  if(!tagName && className && !id){
    elements = document.getElementsByClassName(className);
  }

  if(tagName && !className && id){
    elements = [ ...document.getElementsByTagName(tagName) ]
      .filter(element => element.id === id);
  }

  if(tagName && className && id){
    elements = [ ...document.getElementsByTagName(tagName) ]
      .filter(element => element.classList.contains(className) && element.id === id);
  }
  //----------------------------------------------------------------------
  // if(selector.includes('.') && selector.includes('#')){
  //   var array1 = selector.split(/[#.]+/);
  //   console.log(array1);
  //   // return getAttribute('class') document.getElementsByTagName(array1[0]);
  // }
  //
  // if(selector.includes('.')){
  //   var id = selector.split('.');
  //   elements = document.getElementsByTagName(id[0]);
  // }
  //
  // if(selector.charAt(0) === '.'){
  //   elements = document.getElementsByClassName(selector.substring(1));
  // }
  //
  // if(selector.charAt(0) === '#'){
  //   elements = [document.getElementById(selector.substring(1))];
  // }
  //
  // if(selector === 'div'){
  //   elements = document.getElementsByTagName(selector);
  // }
  return elements;
};
