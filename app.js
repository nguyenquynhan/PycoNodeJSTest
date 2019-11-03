const BookingService = require('./BookingService');
const RotatePictureService = require('./RotatePictureService');

main();

function main() {
    const appType = process.argv[2];
    switch(appType){
        case "1": 
            runRoratePictureApp();
            break;
        case "2":
            runBookingApp();
            break;
        
        default:
            console.log("Run application with parameter is 1 or 2. Example: node app.js 1");
    }
}


function runBookingApp() {
    const arrival = [1, 3, 5];
    const departure = [2, 6, 10];
    const n = 3;
    const k = 1;// number rooms   

    console.log("arrival:")
    printArrayN(arrival);

    console.log("departure:")
    printArrayN(departure);

    console.log("k:", k);

    const bookingService = new BookingService();
    const possible = bookingService.bookingPossible(arrival, departure, n, k);
    console.log("Possible:", possible);
}

function runRoratePictureApp() {
    const a = [
        [0, 16,  255],
        [8, 128,  32],
        [0, 0, 0]	
    ];    
    const k = 1;

    console.log("k:", k);

    console.log("Before rotate:")
    printArrayNN(a);

    const rotatePictureService = new RotatePictureService();
    rotatePictureService.rotate90Clockwise(a, k);

    console.log("\nAfter rotate", k, "time:");
    printArrayNN(a);
}

function printArrayNN(a){
    for(let i = 0; i < a.length; i++){
        let r = '';    
        for(let j = 0; j < a.length; j++){
            r += a[i][j];
            if(j != a.length) {
                r += ", ";
            }
        }
        console.log(r);
    }
}

function printArrayN(a){
    let r = '';    
    for(let j = 0; j < a.length; j++){
        r += a[j];
        if(j != a.length) {
            r += ", ";
        }
    }
    console.log(r);
}
