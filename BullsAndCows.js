var body = document.body;

// 숫자 뽑기
function numberpick() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var numarray = [];
    for (var i = 0; i < 4; i += 1) {
        var pick = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        // push: 마지막에 순차적으로 추가
        // pop: 마지막 요소 추출
        // unshift: 처음에 추가
        // shift: 첫 요소 뽑기
        // splice(index, nums): 위치로부터 개수만큼 배열에서 추출
        numarray.push(pick);
    }
    console.log(numarray);
    return numarray 
}

numarray = numberpick();
// for (var i = 0; i < 4; i += 1) {
//     var pick = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     // push: 마지막에 순차적으로 추가
//     // pop: 마지막 요소 추출
//     // unshift: 처음에 추가
//     // shift: 첫 요소 뽑기
//     // splice(index, nums): 위치로부터 개수만큼 배열에서 추출
//     numarray.push(pick);
// }


// 화면 구성
var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
body.append(form);

var inputwindow = document.createElement('input');
inputwindow.type = 'number';
inputwindow.maxLength = 4;
form.append(inputwindow);

var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);


// 숫자야구 알고리즘
var incrr_cnt = 0;

form.addEventListener('submit', function callbacks(event) {
    event.preventDefault();
    var answer = inputwindow.value;
    console.log(answer);
    // console.log(numarray.join().replace(/,/gi, ''));

    if (answer === numarray.join().replace(/,/gi, '')) {
        // correct
        result.textContent = '홈런';
        inputwindow.value = '';
        inputwindow.focus();
        numarray = numberpick();
        incrr_cnt = 0;

    } else {
        // incorrect
        var ansarray = answer.split('');
        var strike = 0;
        var ball = 0;
        incrr_cnt += 1;
        if (incrr_cnt > 10) {
            result.textContent = '10회 이상 틀려서 실패, 정답: ' + numarray.join().replace(/,/gi, '');
            inputwindow.value = '';
            inputwindow.focus();
            numarray = numberpick();
            incrr_cnt = 0;
        } else {
            for (var i = 0; i < 4; i += 1) {
            if (Number(ansarray[i]) === numarray[i]) {
                strike += 1
                } else if (numarray.indexOf(Number(ansarray[i])) > -1) {
                ball += 1 
                }
            }
            result.textContent = strike + ' 스트라이크 ' + ball + ' 볼 입니다.';
            inputwindow.value = '';
            inputwindow.focus();
        }
        
    }
});