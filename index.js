 /*const cats = ["Milo","Otis","Garfield"];
 function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
  return  [...cats,"Broom"]; 
}
function prependCat(name) {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    return cats.slice(0,cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1);
}  */
    const cats = ["Milo","Otis","Garfield"]
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(){
    return cats.push("Ralph");
}
function destructivelyPrependCat(){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(){
    return [...cats,"Broom"];
}
function prependCat(){
    return ["Arnold",...cats];
}
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
function removeFirstCat(){
    return cats.slice(1);
}





    // Write your solution here!
