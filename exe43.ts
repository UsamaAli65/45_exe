// 43._ Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have 
// one array of the original names and one array with the Great added to each magician’s name.



const soldierNames: string[] = ["Buran Alp", "Tugut Alp", "Gercutai Alp", "Konur Alp", "Auguz Alp", "Kutan Alp"];

function showSoldierNames(soldiers: string[]): void {
    for (let soldier of soldiers) {
        console.log(soldier);
    }
}

function makeGreat(soldiers: string[]): string[] {
    const greatSoldiers: string[] = soldiers.map(soldier => `the Great ${soldier}`);
    return greatSoldiers;
}

const greatSoldierNames: string[] = makeGreat(soldierNames);

console.log("Great Soldier Names:");
showSoldierNames(soldierNames);

console.log("\nGreat Soldier Names:");
showSoldierNames(greatSoldierNames);
