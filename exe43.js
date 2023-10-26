const soldierNames = ["Buran Alp", "Tugut Alp", "Gercutai Alp", "Konur Alp", "Auguz Alp", "Kutan Alp"];
function showSoldierNames(soldiers) {
    for (let soldier of soldiers) {
        console.log(soldier);
    }
}
function makeGreat(soldiers) {
    const greatSoldiers = soldiers.map(soldier => `the Great ${soldier}`);
    return greatSoldiers;
}
const greatSoldierNames = makeGreat(soldierNames);
console.log("Great Soldier Names:");
showSoldierNames(soldierNames);
console.log("\nGreat Soldier Names:");
showSoldierNames(greatSoldierNames);
export {};
