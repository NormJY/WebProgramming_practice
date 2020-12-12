
var img_location = '0';
var dict = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

function computer_choice(img_location) {
    return Object.entries(dict).find(function(v) {
        return v[1] === img_location;
    })[0];
};

var interval;
function intervalmaker() {
    interval = setInterval(() => {  // 화살표 함수(최신 문법임...)
    if (img_location === dict.바위) {
        img_location = dict.가위;
    } else if (img_location === dict.가위) {
        img_location = dict.보;
    } else {
        img_location = dict.바위;
    }
    document.querySelector('#computer').style.background = 
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + img_location + ' 0';
}, 100);
    return interval
} 

interval = intervalmaker();

var scoreboard = {
    가위: 1,
    바위: 0,
    보: -1
};

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval);
        setTimeout(() => {
            interval = intervalmaker();
        }, 2000);
        var user_choice = this.textContent;
        var comp_choice = computer_choice(img_location);
        if (scoreboard[user_choice] - scoreboard[comp_choice] === 0) {
            console.log('비겼습니다.');
        } else if ([-1, 2].includes(scoreboard[user_choice] - scoreboard[comp_choice])) {
            console.log('이겼습니다.');
        } else {
            console.log('졌습니다.')
        }
    });
});
