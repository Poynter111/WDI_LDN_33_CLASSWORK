const firstName = 'Jhon';
const lastName = 'Doe';
const age = 19;

function displayPerson(fname, lname){
  const prefix = 'Mr';
  let fullname = null;

  function getFullName(){
    const suffix = 'Esq.';
    return fullname = `${prefix} ${fname} ${lname} ${suffix}`
  }

  return getFullName();

}

function removeYears(){
  const minusYears = 10;
  const age = 49;
  return age - minusYears;
}


console.log(displayPerson(firstName, lastName));
console.log(removeYears());
