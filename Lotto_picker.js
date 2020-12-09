// 로또추첨기
var numbers = Array(45)
.fill()
.map(function(element, idx) {
    return idx + 1;
});
console.log(numbers);

var suffle = [];
while (numbers.length > 0) {
    var num = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    suffle.push(num)
};

console.log(suffle);

var bonus = suffle[suffle.length - 1];
var lotto_number = suffle.slice(0, 6).sort((a, b) => a - b);  // int value 오름차순 정렬법
// sort(): ASCII code 순서로 정렬되기 때문에, 숫자가 문자형처럼 정렬됨

console.log(lotto_number, bonus);

function coloring_ball(num, result) {
    var ball = document.createElement('div');
    ball.textContent = num;

    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '10px';
    ball.className = 'ballID' + num;
    ball.style.fontSize = '12px';

    var backgroundcolor;
    if (num <= 10) {
        backgroundcolor = 'red';
    } else if (num <= 20) {
        backgroundcolor = 'orange';
    } else if (num <= 30) {
        backgroundcolor = 'yellow';
    } else if (num <= 40) {
        backgroundcolor = 'blue';
    } else {
        backgroundcolor = 'green';
    }
    ball.style.backgroundColor = backgroundcolor;
    result.appendChild(ball);
}

var result_window = document.querySelector('#result_window');
setTimeout(function callback() {
    coloring_ball(lotto_number[0], result_window);
}, 1000); // ms
setTimeout(function callback() {
    coloring_ball(lotto_number[1], result_window);
}, 2000); // ms
setTimeout(function callback() {
    coloring_ball(lotto_number[2], result_window);
}, 3000); // ms
setTimeout(function callback() {
    coloring_ball(lotto_number[3], result_window);
}, 4000); // ms
setTimeout(function callback() {
    coloring_ball(lotto_number[4], result_window);
}, 5000); // ms
setTimeout(function callback() {
    coloring_ball(lotto_number[5], result_window);
}, 6000); // ms

             
setTimeout(function callback() {
    var cell_of_bonus = document.querySelector('.bonus_number');
    coloring_ball(bonus, cell_of_bonus);
}, 7000);