const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return  cats.splice(4, 0, "Ralph");
}
function destructivelyPrependCat() {
    return cats.splice(0, 0, "Bob");
}
function destructivelyRemoveLastCat() {
    return cats.splice(2, 1);
}
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}
function appendCat() {
    return [...cats, "Broom"];
}
function prependCat() {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    return cats.slice(0, 2);
}
function removeFirstCat() {
    return cats.slice(-2);
}