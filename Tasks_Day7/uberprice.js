class UberPrice {
    constructor(distance) {
        this.distance = distance;
    }
    
    get getPrice() {
        const basePrice = 50.00;
        const minDistance = 3;
        const pricePerKM = 15.00;
        let priceTotal;
        if(this.distance <= minDistance){
            return basePrice;
        } else {
            return basePrice + (this.distance-minDistance) * pricePerKM;
        }
    }
}

const user = new UberPrice(9);
console.log(user.getPrice);