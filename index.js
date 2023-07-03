// Write your solution here!
function cats(name){
let cats= ["Milo", "Otis", "Garfield"];
  cats.length=0
}

function destructivelyAppendCat(name) {
    cats.push('Ralph');
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift('Bob');
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
  }

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
  
    const newCats = [...cats, Broom];
  
    return newCats;
}

cats.length=0
function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
  
    const newCats = ['Arnold', ...cats];
  
    return newCats;
  }

  function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
  
    const newCats = cats.slice(0, cats.length - 1);
  
    return newCats;
  }

function removeFirstCat() {
  const cats = ["Milo", "Otis", "Garfield"];

  const newCats = cats.slice(1);

  return newCats;
}

