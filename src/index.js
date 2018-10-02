module.exports = function getZerosCount(number, base) {
    let sum = 0;
    let sum2 = 0;
    let MaxPrimes = 0;
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
    for(let i = 0; i<primes.length; i++){
        if (base % primes[i] == 0)
            MaxPrimes = primes[i];
        }
    while (base % MaxPrimes == 0){
        base = base / MaxPrimes;
        sum2++;
    }
    while (number >= MaxPrimes){
        sum += Math.floor(number / MaxPrimes);
        Math.floor(number = number / MaxPrimes);
    }
    return Math.floor(sum / sum2);
}