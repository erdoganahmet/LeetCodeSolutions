var romanToInt = function(s) {
    s = s.split('');
    let total = 0;
    rVals = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    for (let i=s.length-1;i>=0;i--) {
        total += (rVals[s[i]] < (rVals[s[i+1]||0])? -rVals[s[i]] : rVals[s[i]]);
    }
    return total;
};
console.log(romanToInt('III'));
//III kısmına çevirmesini istediğimiz romen sayı değerini yazıyoruz.