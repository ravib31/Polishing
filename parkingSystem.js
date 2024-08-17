class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    
    addCar(carType) {
        if (carType === 1) {
            if (this.big > 0) {
                this.big--;
                return true;
            }
        } else if (carType === 2) {
            if (this.medium > 0) {
                this.medium--;
                return true;
            }
        } else {
            if (this.small > 0) {
                this.small--;
                return true;
            }
        }
        return false;
    }
}

let parkingSystem = new ParkingSystem(2, 1, 1);
console.log(parkingSystem.addCar(1)); // true
console.log(parkingSystem.addCar(2)); // true
console.log(parkingSystem.addCar(3)); // false
console.log(parkingSystem.addCar(1)); // false
