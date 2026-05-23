/*Interview One-Line Answer
var creates one shared variable, so async callbacks print final value.
let creates separate block-scoped variables for each iteration.*/

if (true) {

    var x = 10;
}
console.log(x);

