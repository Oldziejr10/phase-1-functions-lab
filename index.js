function distanceFromHqInBlocks(someValue) {
    if(someValue === 43) {
        return 1 
    } else if(someValue === 50) {
        return 8 
    } else if (someValue < 42) {
        return 8
    }
}
function distanceFromHqInFeet(someFeet) {
    if (someFeet === 43) {
        return 264
    } else if (someFeet === 50) {
    return 2112
    } else if (someFeet < 42) {
        return 2112
    }
}

function distanceTravelledInFeet(start, destination) {
    if( start > destination) {
        return (start-destination) * 264
    } else if (start < destination) {
        return (destination - start)* 264
    }

}

function calculatesFarePrice(start, destnation) {
    const distance = distanceTravelledInFeet(start,destnation);
    const fareMiles = distance - 400
    if (distance < 400) {
        return 0 
    } else if (distance > 400 && distance < 2000) {
        return (fareMiles * 0.02)
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
}
    