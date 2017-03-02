/**
 * Created by thanhdat21293 on 3/2/17.
 */

let Ptb2 = (a, b, c) => {
    let str = '';
    let delta, x1, x2, a2;

    if (isNaN(a)) {
        throw new Error('a is not number');
    }
    if (isNaN(b)) {
        throw new Error('b is not number');
    }
    if (isNaN(c)) {
        throw new Error('c is not number');
    }


    delta = b * b - 4 * a * c;
    a2 = 2 * a;
    if (delta < 0) {
        throw new Error('PT vô nghiệm');
    } else if (delta > 0) {
        let canDelta = Math.sqrt(delta);
        x1 = (-b - canDelta) / a2;
        x2 = (-b + canDelta) / a2;
        return (x1, x2);
    } else {
        var x = -b / a2;
        return x;
    }
}
let log = console.log;
log(Ptb2(1, -5, 3));
