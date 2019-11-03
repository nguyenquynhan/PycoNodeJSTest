# PYCO - Technical test for Node.js
# How run the tests
    * '''Rotate picture 90 degrees clockwise''' test
        * Run `node app.js 1`
        * Time = O(n2), O(k)
        * Memory = O(n2), O(k)
        * Input:
            1. grid = [
                [0, 16,  255],
                [8, 128,  32],
                [0,    0,     0]	
            ]
            2. K = 1
        * Output:
            [
                [0, 8, 0],
                [0, 128,  16],
                [0, 32,  255]
            ]
    * '''Hotel Reservation''' test
        * Run `node app.js 2`
        * Time = arrival = O(nlogn), departure = O(nlogn), k = O(1)
        * Memory = arrival = O(n), departure = O(n), k = O(1)
        * Input:
            - arrivals = [1, 3, 5]
            - departures = [2, 6, 10]
            - K = 1
        * Output: false