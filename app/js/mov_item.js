let timer = document.querySelector('.minutes')
timer.onclick = function times() {
    var test = prompt("На сколко времени в секундах");
    var x = Number(test)
}

let Timer = function () {
    'use strict';
    let timerEl;
    let interval;
    let time = 600;
    //600
    const init = function (id) {
        timerEl = document.getElementById(id);
        setEl();
    }
    const countdown = function () {
        if (time < 1)
            Swal.fire({
                title: clearInterval(interval),
                text: 'Вы проиграли!!!',
                imageUrl: './imges/proigch.jpg',
                imageWidth: 421,
                imageHeight: 502,
                imageAlt: 'Custom image',
            })
        else {
            time -= 1;
            setEl();
        }
    }
    const getMinutes = function () {
        return Math.floor(time / 60);
    }
    const getSeconds = function () {
        return time - getMinutes() * 60;
    }
    const start = function () {
        timerEl.classList.add('activei');
        interval = setInterval(countdown, 1000);
    }
    const pause = function (event) {
        timerEl.classList.remove('activei');
        clearInterval(interval);
    }
    const setEl = function () {
        timerEl.querySelectorAll('.minutes')[0].innerHTML = getMinutes();
        timerEl.querySelectorAll('.seconds')[0].innerHTML = getSeconds();
    }
    return {
        init: init,
        start: start,
        pause: pause
    };
}

const t1 = new Timer();
const t2 = new Timer();
t1.init('timer1');
t2.init('timer2');

let player;

const play = function () {
    // pause current player and switch
    pause();
    // play
    player.start();
}

const pause = function () {
    // pause current player and switch
    if (player) player.pause();
    switchPlayer();
    // console.log(player)
}
const switchPlayer = function () {
    player = (player === t1) ? t2 : t1;

}