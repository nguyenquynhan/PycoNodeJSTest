class BookingService {

    bookingPossible(arrival, departure, n, k) {

        let booking = [];

        // move arrival and departure to a array and marked
        // arrival is 1, departure is -1
        for (let i = 0; i < n; i++) {
            booking.push([arrival[i], 1]);
            booking.push([departure[i], -1]);
        }

        // sort the array  base on arrival and departure alphabetically
        booking = booking.sort((s1, s2) => s1[0] - s2[0]);

        let currentActive = 0;
        let maxActive = 0;
        for (let i = 0; i < booking.length; i++) {
            currentActive += booking[i][1]; // if arrival is increment, is departure is decrement
            maxActive = Math.max(maxActive, currentActive); // update the max active value
        }

        return k >= maxActive; //if k always greater or equal than the max active, then return true
    }
}
module.exports = BookingService;
/**
* Time = arrival = O(nlogn), departure = O(nlogn), k = O(1)
* Memory = arrival = O(n), departure = O(n), k = O(1)
*/