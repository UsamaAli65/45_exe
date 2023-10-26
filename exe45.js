function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const MyCar = createCar('BMW', 'X5', ['color', 'red'], ['engine', '2.0'], ["speed", "KM/Hour"]);
console.log(MyCar);
export {};
