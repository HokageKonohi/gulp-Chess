

/*        Раскаментировать при октеваций Плеера */
var tracks = ['./imges/music/Peyton Parrish - Valhalla Calling.mp3'];
var players = document.getElementById('players');
var current = 0;
players.src = tracks[0];
players.onended = function () {
    current++;
    if (current >= tracks.length) current = 0;
    players.src = tracks[current];
    players.play();
}





const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const click = new Audio('./imges/music/[PX] - Loose {Perc}.mp3')

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
    click.play()
})

// Шахмотная доска 
function drawChess() {
    let mainBlock = document.querySelector('.chess__gemes');
    let block;
    let flag = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;
            block = document.createElement('div');   // добовления клетки 
            if (flag) {
                block.className = `block black`;  // добовляем цвет клетки 
                block.setAttribute("data-x", j);  // получаем кординак клетки по x
                block.setAttribute("data-y", i); // получаем кординак клетки по y
                // const dfrth = document.querySelector('[data-x="' + 0 + '"]')
            } else {
                block.className = `block white`;     // добовляем цвет клетки 
                block.setAttribute("data-x", j);  // получаем кординак клетки по x
                block.setAttribute("data-y", i);   // получаем кординак клетки по y
            }
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}
drawChess();

//  Пешки белые
function peshka_2deistvie() {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')

    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y


    if (+x + 1 <= 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.add('bpeshka')
    }
    if (+x - 1 >= 0 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.add('bpeshka')
    }

}
//  Пешки черные 
function bpeshka_2deistvie() {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y

    if (+x + 0 < 8 && +y + 1 <= 8) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y + 1 <= 8) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.add('bpeshka')
    }
    if (+x - 1 >= 0 && +y + 1 <= 8) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.add('bpeshka')
    }

}
//   Пешки черные
function bpeshka() {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y
    if (+x + 1 < 8 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 2}"]`).classList.add('active')
    }
    this.removeEventListener('click', peshka); // после клика удаляем его
    this.addEventListener('click', bpeshka_2deistvie)
}
//   Пешки белые
function peshka() {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y

    if (+x + 0 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x + 0 < 8 && +y - 2 >= 0) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 2}"]`).classList.add('active')
    }
    this.removeEventListener('click', peshka); // после клика удаляем его
    this.addEventListener('click', peshka_2deistvie)
}
//   Король
function KingItem(event) {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y

    if (+x + 1 < 8 && +y + 0 < 8) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 0}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x + 0 < 8 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x + 0 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x - 1 >= 0 && +y + 0 < 8) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 0}"]`).classList.add('active')
    }
    if (+x - 1 >= 0 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x - 1 >= 0 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.add('active')
    }
}

//   Лодя
function RookwItem(event) {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    // console.log(event.target)
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y

    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y + 0 < 8) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y + 0}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - 0 >= 0 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - 0}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y + 0 < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y + 0}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x + 0 < 8 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
}
//   Конь
function KnightItem(event) {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    // console.log(event.target)
    // console.log(parentElement)
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y
    // console.log(x + "    " + y)

    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
    }
    if (+x - 2 >= 0 && +y - 1 >= 0) {
        document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y - 2 >= 0) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
    }
    if (+x - 1 >= 0 && +y - 2 >= 0) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
        document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
    }
    if (+x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
    }
}
//   Слон
function BishopItem(event) {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')
    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y
    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y - i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y - i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
}
//   Королева
function QueenItem(event) {
    document.querySelectorAll(' .block').forEach(function (element) {
        element.classList.remove('active')
        element.classList.remove('bpeshka')

    })
    var parentElement = event.target.parentNode;
    let x = parentElement.dataset.x
    let y = parentElement.dataset.y
    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y - i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y - i}"]`)
            console.log(eli)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x + i < 8 && +y + 0 < 8) {
            var eli = document.querySelector(`.block[data-x="${+x + i}"][data-y="${+y + 0}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - 0 >= 0 && +y + i < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - 0}"][data-y="${+y + i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x - i >= 0 && +y + 0 < 8) {
            var eli = document.querySelector(`.block[data-x="${+x - i}"][data-y="${+y + 0}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
    for (let i = 1; i < 8; i++) {
        if (+x + 0 < 8 && +y - i >= 0) {
            var eli = document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - i}"]`)
            eli.classList.add('active')
            if (eli) {
                var imgElements = eli.getElementsByTagName('img')
                if (imgElements.length > 0) {
                    eli.classList.add('bpeshka')
                    break
                }
            }
        }
    }
}
// window.addEventListener('mousemove', Mousemove, false)
// function Mousemove(event) {
//     console.log(event.screenY)
// }
//=========================================================================  Фигуры =============================================================


// Лодя Черные
const bRook = () => {
    const rook = document.querySelector('[data-x="0"]')
    // rook.setAttribute('draggable', 'true')
    rook.setAttribute('id', '3')
    const rookImg = document.createElement('img')
    rookImg.classList.add('item')
    rookImg.setAttribute('draggable', 'true')
    rookImg.setAttribute('id', '0')
    rookImg.classList.add('item')
    rookImg.src = './imges/bRook.png'
    rook.appendChild(rookImg)

    rookImg.addEventListener('click', RookwItem)
}
bRook()
// Конь Черные
const bKnight = () => {
    const knight = document.querySelector('[data-x="1"]')
    // knight.setAttribute('draggable', 'true')
    knight.setAttribute('id', '3')
    const knightImg = document.createElement('img')
    knightImg.setAttribute('draggable', 'true')
    knightImg.setAttribute('id', '0')
    knightImg.classList.add('item')
    knightImg.src = './imges/bKnight.png'
    knight.appendChild(knightImg)

    knightImg.addEventListener('click', KnightItem)
}
bKnight()
// Слон  Черные
const bBishop = () => {
    const bishop = document.querySelector('[data-x="2"]')
    // bishop.setAttribute('draggable', 'true')
    bishop.setAttribute('id', '3')
    const bishopImg = document.createElement('img')
    bishopImg.setAttribute('draggable', 'true')
    bishopImg.setAttribute('id', '0')
    bishopImg.classList.add('item')
    bishopImg.src = './imges/bBishop.png'
    bishop.appendChild(bishopImg)

    bishopImg.addEventListener('click', BishopItem)
}
bBishop()
// Королева  Черные
const bQueen = () => {
    const queen = document.querySelector('[data-x="3"]')
    // queen.setAttribute('draggable', 'true')
    queen.setAttribute('id', '3')
    const queenImg = document.createElement('img')
    queenImg.setAttribute('draggable', 'true')
    queenImg.setAttribute('id', '0')
    queenImg.classList.add('item')
    queenImg.src = './imges/bQueen.png'
    queen.appendChild(queenImg)

    queenImg.addEventListener('click', QueenItem)
}
bQueen()
// Король Черные
const bKing = () => {
    const king = document.querySelector('[data-x="4"]')
    // king.setAttribute('draggable', 'true')
    king.setAttribute('id', '3')
    const kingImg = document.createElement('img')
    kingImg.setAttribute('draggable', 'true')
    kingImg.setAttribute('id', '10')
    kingImg.classList.add('item')
    kingImg.src = './imges/bKing.png'
    king.appendChild(kingImg)

    kingImg.addEventListener('click', KingItem)

}
bKing()
// Слон  Черные
const bBishop2 = () => {
    const bishop2 = document.querySelector('[data-x="5"]')
    // bishop2.setAttribute('draggable', 'true')
    bishop2.setAttribute('id', '3')
    const bishop2Img = document.createElement('img')
    bishop2Img.setAttribute('draggable', 'true')
    bishop2Img.setAttribute('id', '0')
    bishop2Img.classList.add('item')
    bishop2Img.src = './imges/bBishop.png'
    bishop2.appendChild(bishop2Img)

    bishop2Img.addEventListener('click', BishopItem)
}
bBishop2()
// Конь Черные
const bKnight2 = () => {
    const knight2 = document.querySelector('[data-x="6"]')
    // knight2.setAttribute('draggable', 'true')
    knight2.setAttribute('id', '3')
    const knight2Img = document.createElement('img')
    knight2Img.setAttribute('draggable', 'true')
    knight2Img.setAttribute('id', '0')
    knight2Img.classList.add('item')
    knight2Img.src = './imges/bKnight.png'
    knight2.appendChild(knight2Img)

    knight2Img.addEventListener('click', KnightItem)
}
bKnight2()
// Лодя Черные
const bRook2 = () => {
    const rook2 = document.querySelector('[data-x="7"]')
    // rook2.setAttribute('draggable', 'true')
    rook2.setAttribute('id', '3')
    const rook2Img = document.createElement('img')
    rook2Img.setAttribute('draggable', 'true')
    rook2Img.setAttribute('id', '0')
    rook2Img.classList.add('item')
    rook2Img.src = './imges/bRook.png'
    rook2.appendChild(rook2Img)

    rook2Img.addEventListener('click', RookwItem)
}
bRook2()
// Пешка Черные
const bPawn1 = () => {
    const pawn1 = document.querySelector('[data-x="0"][data-y="1"]')
    // pawn1.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn1.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}
bPawn1()
const bPawn2 = () => {
    const pawn2 = document.querySelector('[data-x="1"][data-y="1"]')
    // pawn2.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn2.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}

bPawn2()
const bPawn3 = () => {
    const pawn3 = document.querySelector('[data-x="2"][data-y="1"]')
    // pawn3.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn3.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}
bPawn3()
const bPawn4 = () => {
    const pawn4 = document.querySelector('[data-x="3"][data-y="1"]')
    // pawn4.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn4.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}
bPawn4()
const bPawn5 = () => {
    const pawn5 = document.querySelector('[data-x="4"][data-y="1"]')
    // pawn5.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn5.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}
bPawn5()
const bPawn6 = () => {
    const pawn6 = document.querySelector('[data-x="5"][data-y="1"]')
    // pawn6.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn6.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', bpeshka)

}
bPawn6()
const bPawn7 = () => {
    const pawn7 = document.querySelector('[data-x="6"][data-y="1"]')
    // pawn7.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn7.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)
    function peshka() {
        document.querySelectorAll(' .block').forEach(function (element) {
            element.classList.remove('active')
            element.classList.remove('bpeshka')
        })
        var parentElement = event.target.parentNode;
        let x = parentElement.dataset.x
        let y = parentElement.dataset.y
        if (+x + 1 < 8 && +y + 1 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 1}"]`).classList.add('active')
        }
        if (+x + 1 < 8 && +y + 2 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 2}"]`).classList.add('active')
        }
        bpawnImgi.removeEventListener('click', peshka); // после клика удаляем его
        bpawnImgi.addEventListener('click', bpeshka_2deistvie)
    }
}
bPawn7()
const bPawn8 = () => {
    const pawn8 = document.querySelector('[data-x="7"][data-y="1"]')
    // pawn8.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '0.5')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/bPawn.png'
    pawn8.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)
    function peshka() {
        document.querySelectorAll(' .block').forEach(function (element) {
            element.classList.remove('active')
            element.classList.remove('bpeshka')
        })
        var parentElement = event.target.parentNode;
        let x = parentElement.dataset.x
        let y = parentElement.dataset.y
        if (+x + 0 < 8 && +y + 1 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 1}"]`).classList.add('active')
        }
        if (+x + 0 < 8 && +y + 2 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y + 2}"]`).classList.add('active')
        }
        bpawnImgi.removeEventListener('click', peshka); // после клика удаляем его
        bpawnImgi.addEventListener('click', bpeshka_2deistvie)
    }
}
bPawn8()
//////////////////////////////////////////////////////////////////////////////////////////==================

// Лодя Белы
const wRook = () => {
    const rook = document.querySelector('[data-x="0"][data-y="7"]')
    // rook.setAttribute('draggable', 'true')
    rook.setAttribute('id', '3')
    const rookImg = document.createElement('img')
    rookImg.setAttribute('draggable', 'true')
    rookImg.setAttribute('id', '1')
    rookImg.classList.add('item')
    rookImg.src = './imges/wRook.png'
    rook.appendChild(rookImg)

    rookImg.addEventListener('click', RookwItem)
}
wRook()
// Конь Белы
const wKnight = () => {
    const rnight = document.querySelector('[data-x="1"][data-y="7"]')
    // rnight.setAttribute('draggable', 'true')
    rnight.setAttribute('id', '3')
    const rnightImg = document.createElement('img')
    rnightImg.setAttribute('draggable', 'true')
    rnightImg.setAttribute('id', '1')
    rnightImg.classList.add('item')
    rnightImg.src = './imges/wKnight.png'
    rnight.appendChild(rnightImg)

    rnightImg.addEventListener('click', KnightItem)

}
wKnight()
// Слон  Белы
const wBishop = () => {
    const bishop = document.querySelector('[data-x="2"][data-y="7"]')
    // bishop.setAttribute('draggable', 'true')
    bishop.setAttribute('id', '3')
    const bishopImg = document.createElement('img')
    bishopImg.setAttribute('draggable', 'true')
    bishopImg.setAttribute('id', '1')
    bishopImg.classList.add('item')
    bishopImg.src = './imges/wBishop.png'
    bishop.appendChild(bishopImg)

    bishopImg.addEventListener('click', BishopItem)

}
wBishop()
// Королева  Белы
const wQueen = () => {
    const queen = document.querySelector('[data-x="3"][data-y="7"]')
    // queen.setAttribute('draggable', 'true')
    queen.setAttribute('id', '3')
    const queenImg = document.createElement('img')
    queenImg.setAttribute('draggable', 'true')
    queenImg.setAttribute('id', '1')
    queenImg.classList.add('item')
    queenImg.src = './imges/wQueen.png'
    queen.appendChild(queenImg)

    queenImg.addEventListener('click', QueenItem)

}
wQueen()
// Король  Белы
const wKing = () => {
    const king = document.querySelector('[data-x="4"][data-y="7"]')
    // king.setAttribute('draggable', 'true')
    king.setAttribute('id', '3')
    const kingImg = document.createElement('img')
    kingImg.setAttribute('draggable', 'true')
    kingImg.setAttribute('id', '5')
    kingImg.setAttribute('data-king', 'king')
    kingImg.classList.add('item')
    kingImg.src = './imges/wKing.png'
    king.appendChild(kingImg)

    kingImg.addEventListener('click', KingItem)

}
wKing()
// Слон  Белы
const wBishop2 = () => {
    const bishop2 = document.querySelector('[data-x="5"][data-y="7"]')
    // bishop2.setAttribute('draggable', 'true')
    bishop2.setAttribute('id', '3')
    const bishop2Img = document.createElement('img')
    bishop2Img.setAttribute('draggable', 'true')
    bishop2Img.setAttribute('id', '1')
    bishop2Img.classList.add('item')
    bishop2Img.src = './imges/wBishop.png'
    bishop2.appendChild(bishop2Img)

    bishop2Img.addEventListener('click', BishopItem)
}
wBishop2()
// Конь Белы
const wKnight2 = () => {
    const knight2 = document.querySelector('[data-x="6"][data-y="7"]')
    // knight2.setAttribute('draggable', 'true')
    knight2.setAttribute('id', '3')
    const knight2Img = document.createElement('img')
    knight2Img.setAttribute('draggable', 'true')
    knight2Img.setAttribute('id', '1')
    knight2Img.classList.add('item')
    knight2Img.src = './imges/wKnight.png'
    knight2.appendChild(knight2Img)

    knight2Img.addEventListener('click', KnightItem)
}
wKnight2()
// Лодя Белы
const wRook2 = () => {
    const rook2 = document.querySelector('[data-x="7"][data-y="7"]')
    // rook2.setAttribute('draggable', 'true')
    rook2.setAttribute('id', '3')
    const rook2Img = document.createElement('img')
    rook2Img.setAttribute('draggable', 'true')
    rook2Img.setAttribute('id', '1')
    rook2Img.classList.add('item')
    rook2Img.src = './imges/wRook.png'
    rook2.appendChild(rook2Img)




    rook2Img.addEventListener('click', RookwItem)

}
wRook2()
// Пешка Белы
const wPawn1 = () => {
    const pawn1 = document.querySelector('[data-x="0"][data-y="6"]')
    // pawn1.setAttribute('draggable', 'true')
    const queenImg = document.createElement('img')
    queenImg.setAttribute('draggable', 'true')
    queenImg.setAttribute('id', '1.5')
    queenImg.setAttribute('data-action', 'white')
    queenImg.classList.add('item')
    queenImg.src = './imges/wPawn.png'
    pawn1.appendChild(queenImg)



    queenImg.addEventListener('click', peshka)

}
wPawn1()
const wPawn2 = () => {
    const pawn2 = document.querySelector('[data-x="1"][data-y="6"]')
    // pawn2.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn2.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)


}
wPawn2()
const wPawn3 = () => {
    const pawn3 = document.querySelector('[data-x="2"][data-y="6"]')
    // pawn3.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn3.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)

}
wPawn3()
const wPawn4 = () => {
    const pawn4 = document.querySelector('[data-x="3"][data-y="6"]')
    // pawn4.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn4.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)

}
wPawn4()
const wPawn5 = () => {
    const pawn5 = document.querySelector('[data-x="4"][data-y="6"]')
    // pawn5.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn5.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)

}
wPawn5()
const wPawn6 = () => {
    const pawn6 = document.querySelector('[data-x="5"][data-y="6"]')
    // pawn6.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn6.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)

}
wPawn6()
const wPawn7 = () => {
    const pawn7 = document.querySelector('[data-x="6"][data-y="6"]')
    // pawn7.setAttribute('draggable', 'true')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn7.appendChild(bpawnImgi)

    bpawnImgi.addEventListener('click', peshka)
    function peshka() {
        document.querySelectorAll(' .block').forEach(function (element) {
            element.classList.remove('active')
            element.classList.remove('bpeshka')
        })
        var parentElement = event.target.parentNode;
        let x = parentElement.dataset.x
        let y = parentElement.dataset.y

        if (+x + 1 < 8 && +y + 1 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 1}"]`).classList.add('active')
        }
        if (+x + 1 < 8 && +y + 1 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 2}"]`).classList.add('active')
        }
        bpawnImgi.removeEventListener('click', peshka); // после клика удаляем его
        bpawnImgi.addEventListener('click', peshka_2deistvie)
    }
}
wPawn7()
const wPawn8 = () => {// 7-6
    const pawn8 = document.querySelector('[data-x="7"][data-y="6"]')
    const bpawnImgi = document.createElement('img')
    bpawnImgi.setAttribute('draggable', 'true')
    bpawnImgi.setAttribute('id', '1.5')
    bpawnImgi.setAttribute('data-action', 'white')
    bpawnImgi.classList.add('item')
    bpawnImgi.src = './imges/wPawn.png'
    pawn8.appendChild(bpawnImgi)
    bpawnImgi.addEventListener('click', peshka)

    function peshka() {
        document.querySelectorAll(' .block').forEach(function (element) {
            element.classList.remove('active')
            element.classList.remove('bpeshka')
        })
        var parentElement = event.target.parentNode;
        let x = parentElement.dataset.x
        let y = parentElement.dataset.y
        if (+x + 0 < 8 && +y + 0 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 1}"]`).classList.add('active')
        }
        if (+x + 0 < 8 && +y + 0 < 8) {
            document.querySelector(`.block[data-x="${+x + 0}"][data-y="${+y - 2}"]`).classList.add('active')
        }
        bpawnImgi.removeEventListener('click', peshka); // после клика удаляем его
        bpawnImgi.addEventListener('click', peshka_2deistvie)
    }

}
wPawn8()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



window.addEventListener('click', function (event) {
    document.querySelectorAll('.block').forEach(function (elemen) {
        elemen.classList.remove('red')
    })
    let kkkk = document.querySelectorAll('.active')
    for (let index = 0; index < kkkk.length; index++) {
        const element = kkkk[index];
        if (element.getElementsByTagName('img').length > 0) {
            var elementItem = element.querySelector('.item')
            if (event.target.id == '1.5' || event.target.id == '1') {
                if (elementItem.id == '10') {
                    element.classList.add('red')
                }
            }
            if (event.target.id == '0.5' || event.target.id == '0') {
                if (elementItem.id == '5') {
                    element.classList.add('red')
                }
            }
            if (event.target.id === '1' || event.target.id === '1.5') {
                if (elementItem.id == '1.5' || elementItem.id == '1' || elementItem.id == '5') {
                    element.classList.remove('bpeshka')
                }
            }
            if (event.target.id === '0.5' || event.target.id === '0') {
                if (elementItem.id == '0.5' || elementItem.id == '0' || elementItem.id == '10') {
                    element.classList.remove('bpeshka')
                }
            }
        }
        const imgElements = element.getElementsByTagName('img');
        if (imgElements.length > 0) {
            element.classList.remove('active')
        }
    }
})





let mainBlock = document.querySelector('.chess__gemes');
const block = document.getElementById('myBlock');
const arrayImg = document.querySelectorAll('.item')
let isFlipped = false;
block.addEventListener('click', () => {
    click.play()
    if (isFlipped) {
        arrayImg.forEach(function callback(array) {
            array.style.transform = 'rotate(0deg)'
        })
        mainBlock.style.transform = 'rotate(0deg)'
        mainBlock.style.bottom = '0em'
        mainBlock.style.left = '0px'
        mainBlock.style.transition = 'all .5s'
        isFlipped = false;
    } else {
        arrayImg.forEach(function callback(array) {
            array.style.transform = 'rotate(180deg)'
        })
        mainBlock.style.transform = 'rotate(180deg)'
        mainBlock.style.bottom = '-25em'
        mainBlock.style.left = '-18px'
        mainBlock.style.transition = 'all .5s'
        isFlipped = true;
    }
});


