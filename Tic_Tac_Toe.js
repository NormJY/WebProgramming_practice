// 3X3 table 
var body = document.body;
var tabel = document.createElement('table');
var rows = [];
var matrix = [];
var turn = 'X';
var result = document.createElement('div');

var callbacks = function callback(event) {

    var local_of_row = rows.indexOf(event.target.parentNode);
    console.log('Row? ', local_of_row);
    var local_of_column = matrix[local_of_row].indexOf(event.target);
    console.log('Column? ', local_of_column);

    if (matrix[local_of_row][local_of_column].textContent !== '') { // 칸이 이미 채워져 있는가?
        console.log('빈칸이 아닙니다.');
        
    } else {
        console.log('빈칸입니다.');
        matrix[local_of_row][local_of_column].textContent = turn;

        // 세 칸 완성 여부 확인
        var done = false;
        // 가로줄 검사
        if (matrix[local_of_row][0].textContent === turn 
            && matrix[local_of_row][1].textContent === turn 
            && matrix[local_of_row][2].textContent === turn) {
                done = true;
        }
        // 세로줄 검사
        if (matrix[0][local_of_column].textContent === turn
            && matrix[1][local_of_column].textContent === turn
            && matrix[2][local_of_column].textContent === turn) {
                done = true;
        }
        
        // 대각선 검사
        if (local_of_row - local_of_column === 0) {
            if (matrix[0][0].textContent === turn
                && matrix[1][1].textContent === turn
                && matrix[2][2].textContent === turn) {
                    done = true;
            }
        }

        // 대각선 검사 2
        if (Math.abs(local_of_row - local_of_column) === 2) {
            if (matrix[0][2].textContent === turn
                && matrix[1][1].textContent === turn
                && matrix[2][0].textContent === turn) {
                    done = true;
            }
        }

        // 세 칸 완성
        if (done) {
            result.textContent = turn + '님의 승리!';
            // 초기화 코드
            turn = 'X';
            matrix.forEach(function (row) {
                row.forEach(function (cell) {
                    cell.textContent = '';
                });
            });

        } else{
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
        
    }
};



for (var i = 0; i < 3; i += 1) {
    var row = document.createElement('tr');
    rows.push(row);
    matrix.push([]);
    for (var j = 0; j < 3; j += 1) {
        var cell = document.createElement('td');
        cell.addEventListener('click', callbacks);
        matrix[i].push(cell);
        row.appendChild(cell);
    }
    tabel.appendChild(row);
}

body.appendChild(tabel);
body.appendChild(result);
console.log(rows, matrix);


