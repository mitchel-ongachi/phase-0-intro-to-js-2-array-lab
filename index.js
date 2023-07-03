// write your solution here
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
        return cats;
   }

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats;
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
  
    const newCats = [...cats, name];
  
    return newCats;
}

cats.length=0
function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
  
    const newCats = [name, ...cats];
  
    return newCats;
  }

  

  function removeLastCat(){
    return cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}