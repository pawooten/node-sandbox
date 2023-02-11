/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigTotal = big;
    this.mediumTotal = medium;
    this.smallTotal = small;
    this.bigCurrent = 0;
    this.mediumCurrent = 0;
    this.smallCurrent = 0;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch (carType) {
        case 1:
            if (this.bigCurrent < this.bigTotal) {
                this.bigCurrent++;
                return true;
            }
            return false;
        case 2:
            if (this.mediumCurrent < this.mediumTotal) {
                this.mediumCurrent++;
                return true;
            }
            return false;
        case 3:
            if (this.smallCurrent < this.smallTotal) {
                this.smallCurrent++;
                return true;
            }
            return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */