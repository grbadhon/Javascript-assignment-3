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

// Budget Calculator Problem End 


//Hotel Cost Problem Start 

function hotelCost(numberOfDays) {
    if (numberOfDays < 0) {
        //if negative value as input
        console.log("Please Give Valid Input");
    } else if (numberOfDays == 0) {
        //if  zero as input
        console.log("Please Stay Minimum One Day To Get Cost");

    } else {
        var totalBill = 0;

        if (numberOfDays <= 10) {
            //for first ten days
            totalBill = numberOfDays * 100;
        } else if (numberOfDays <= 20) {
            //for first twenty days
            var firstTenDays = 10 * 100;
            var remainingDays = numberOfDays - 10;
            var secondTenDays = remainingDays * 80;
            totalBill = firstTenDays + secondTenDays;
        } else {
            //for beyond twenty days
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = numberOfDays - 20;
            var laterDays = remainingDays * 50;
            totalBill = firstTenDays + secondTenDays + laterDays;
        }
        return totalBill;
    }
}
//Hotel Cost Problem end

//Mega Friends Problem Start

function megaFriend(friendsArray) {
    if (friendsArray.length <= 0) {
        //if the array is empty
        console.log("Input Array Can't be empty");
    } else {
        var megaFriend = "";
        for (var i = 0; i < friendsArray.length; i++) {
            if (friendsArray[i].length > megaFriend.length) {
                megaFriend = friendsArray[i];
            }
        }
        return megaFriend;
    }

}

//Mega Friends Problem End



