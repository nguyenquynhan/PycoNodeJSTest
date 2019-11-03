class RotatePictureService {
    rotate90Clockwise(a, k) 
    { 
        const N = a.length;
        for(let h = 0; h < k; h++)  {
            for (let i = 0; i < N / 2; i++) { 
                for (let j = i; j < N - i - 1; j++) {
                    let temp = a[i][j]; 
                    a[i][j] = a[N - 1 - j][i]; 
                    a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j]; 
                    a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i]; 
                    a[j][N - 1 - i] = temp; 
                } 
            }
        }
    }
}

module.exports = RotatePictureService;
/**
 * Time = O(n2), O(k)
 * Memory = O(n2), O(k)
 */
