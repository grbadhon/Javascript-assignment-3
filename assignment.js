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