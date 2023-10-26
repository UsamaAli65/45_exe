// 41._ Magicians: Make a array of magician’s names.
// Pass the array to a function called
// show_magicians(), which prints the name of each
// magician in the array.
var magiciansName = ["alice", "david", "carolina", "juan", "carlos", "maria"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
showMagicians(magiciansName);
