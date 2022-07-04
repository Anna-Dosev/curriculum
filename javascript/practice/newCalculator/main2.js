function digitize (num) {
    const array = num.toString().split('').reverse();
    const result = array.map(item =>item*1)
    console.log(result);
}
digitize(123456)
