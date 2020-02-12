const shuffle = require('../dist/index.js');

describe('概率', () => {
    it('数组shuffle后长度不变', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const newArr = shuffle(arr);
        expect(arr.length).toEqual(newArr.length);
    });

    it('数字随机出现的概率相同', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const time = 1000000;
        let counts = [];
        for(let i = 0; i < time; i++) {
            let tempArr = shuffle(arr);
            let temp = tempArr[0];
            counts[temp - 1] = counts[temp - 1] || 0;
            counts[temp - 1]++;
        }
        console.log(JSON.stringify(counts));
        const expectTime = time/arr.length;
        for(let i = 0; i < arr.length; i++) {
            const rate = counts[i]/expectTime;
            expect(Math.round(rate)).toEqual(1);
        }
    });   
});