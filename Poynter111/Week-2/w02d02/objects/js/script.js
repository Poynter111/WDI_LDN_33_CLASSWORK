var monkey = {
  name: 'Alex',
  species: 'Spider',
  foodsEaten: [],
  eatsSomething: function(food){
    this.foodsEaten.push(food);
  },
  introduce(){
    return (`Hi my name is ${this.name} i am a ${this.species}monkey and today i have eaten ${this.foodsEaten}`)
  }
};
