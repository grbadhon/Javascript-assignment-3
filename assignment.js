// Kilometer To Meter Conversion Start

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("Distance Can not be negative")
    } else if (kilometer == 0) {
        // 0 kilometers = 0 meter
        return 0;
    } else {
        return kilometer * 1000;
        // 1 kilometer = 1000 meter
    }
}

// Kilometer To Meter Conversion End

// Budget Calculator Problem Start 

function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop) {
    // If enter any negative value
    if (numberOfClock < 0 && numberOfLaptop < 0 && numberOfLaptop < 0) {
        console.log("Please Give Valid Input");
    } 
    // If enter all values 0
    else if (numberOfClock == 0 && numberOfLaptop == 0 && numberOfLaptop == 0) {
        console.log("Buy at least one thing to get calculation");
    } 
    
    else {
        var budget = 0;
        if (numberOfClock < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
            console.log("Number of items can not be negative value");

        } else {
            budget = (numberOfClock * 50) + (numberOfPhone * 100) + (numberOfLaptop * 500);
            return budget;
        }
    }
}
console.log(budgetCalculator(0, 0, 8))

// Budget Calculator Problem End 