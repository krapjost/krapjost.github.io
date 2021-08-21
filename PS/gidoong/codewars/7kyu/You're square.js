
/*
        주어진 숫자에 제곱근이 있다면 true || false

        25 => true
        26 => false
*/

// my solution
function isSquare(n) {
        return Number.isInteger(Math.sqrt(n))
}

// clever
function isSquare(n) {
        n = Math.sqrt(n);
        return ~~n === n;
}
/*
        제곱근을 구하는 내장함수 sqrt
        '~' 연산자는 비트를 역전시킨다.

        0 => 1; 1 => 0;

        비트 연산자는 내부적으로 연산되는 수를 32-bit integer로 다룬다.
        따라서 float 타입을 integer로 변환시키는 작업에도 사용할 수 있다.

        ~12.1234 === -13;
        ~~12.1234 === 12;

        하지만 큰 수의 경우 과도한 메모리 사용으로 오버플로우가 일어날 가능성이 있기에 실제로 사용되진 않는다.
*/
