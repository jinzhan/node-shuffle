export default arr => {
    const target = arr.slice(0);
    const len = target.length;
    for (let i = len - 1; i >= 0; i--) {
        const r = parseInt((i + 1) * Math.random(), 10);
        const temp = target[i];
        target[i] = target[r];
        target[r] = temp;
    }
    return target;
};