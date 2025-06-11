function score(dice) {
    let records = {};
    let total = 0;
​
    
    for (let i = 0; i < dice.length; i++) {
        records[dice[i]] = (records[dice[i]] || 0) + 1;
    }
​
    for (let num in records) {
        let count = records[num];
        num = Number(num); 
​
       
        if (count >= 3) {
            if (num === 1) {
                total += 1000;
            } else {
                total += num * 100;
            }
            count -= 3;
        }
​
        
        if (num === 1) {
            total += count * 100;
        } else if (num === 5) {
            total += count * 50;
        }
    }
​
    return total;
}
​