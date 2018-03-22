window.addEventListener('DOMContentLoaded', () => {
  // code here
  const body = document.getElementsByTagName('body')[0];
  const heading = document.createElement('h1');
  heading.innerHTML = 'I am a heading';
  body.appendChild(heading);
  heading.style.backgroundColor = 'grey';
  heading.style.border = '2px solid green';
  heading.style.padding = '20px';
  const headingHeight = heading.offsetHeight;
  const box = document.createElement('div');
  box.innerHTML = 'I am a heading';
  body.appendChild(box);
  box.className = ('box');
  box.id = ('single');
  box.dataset.id='1';
  console.log('world working');
  console.log(headingHeight);
  console.log(body.children);
  console.log(box.offsetTop);
//-----------------------------------------------------------------------
  heading.addEventListener('click', function(){

  });














});
