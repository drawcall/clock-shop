const arrShuffle = (arr) => {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let end = len - 1;
        let index = (Math.random() * (end + 1)) >> 0;
        let t = arr[end];
        arr[end] = arr[index];
        arr[index] = t;
    }

    return arr;
};

export { arrShuffle };