// 41._ Magicians: Make a array of magician’s names.
// Pass the array to a function called
// show_magicians(), which prints the name of each
// magician in the array.


const magiciansName: string[] = ["alice", "david", "carolina", "juan", "carlos", "maria"];
function showMagicians(magicians: string[]): void {
   
    for (const items of magicians) {
        console.log(items);
    }
}
 showMagicians(magiciansName);