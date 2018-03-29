function foo(){
  return this;
}
// console.log('Im working', foo());

const me = {
  name: 'Mike',
  foo: foo
}

console.log(foo());
console.log(me.foo());



window.addEventListener('DOMContentLoaded',function(){


  const body = document.querySelector('body');
  body.onclick = function(){
    console.log(this)
  }
});
