# PYCO - Technical test for Node.js
# How run the tests
* Rotate picture 90 degrees clockwise test
	* Run `node app.js 1`
	* Time = O(n2), O(k)
	* Memory = O(n2), O(k)
	* Input:
		<pre>
			grid = [
				[0, 16,  255],
				[8, 128,  32],
				[0,    0,     0]	
			]
			K = 1
		</pre>
	* Output:
		<pre>
			[
				[0, 8, 0],
				[0, 128,  16],
				[0, 32,  255]
			]
		</pre>
* Hotel Reservation test
	* Run `node app.js 2`
	* Time = arrival = O(nlogn), departure = O(nlogn), k = O(1)
	* Memory = arrival = O(n), departure = O(n), k = O(1)
	* Input:
		<pre>
		- arrivals = [1, 3, 5]
		- departures = [2, 6, 10]
		- K = 1
		</pre>
	* Output: false