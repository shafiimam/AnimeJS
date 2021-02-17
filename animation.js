// // add animation here
// const anim = window.anime({
//         targets: '#box',
//         duration: 2000,
//         opacity: 0.5,
//         easing: 'linear',
//     })
//     // single html element
// const page = document.getElementById('page');
// // css selector
// const circle = '.page #circle';
// // html collection
// const boxes = document.getElementsByClassName('js-box');
// // query selector

// const allBoxes = document.querySelectorAll('.js-box');

// const myAnim = anime({
//     targets: circle,
//     scale: 1.3,
//     autoplay: false
// })

// const myAnim = anime({
//     targets: '#box',
//     translateX: ['100px', '200px'],
//     duration: 3000,
//     easing: 'linear',
//     autoplay: false
// })

// passing object values

// const myAnim = anime({
//     targets: '.js-box',
//     autoplay: false,
//     duration: 1000,
//     delay: 1000,
//     easing: 'easeInOutElastic',

//     translateX: {
//         value: ['100px', '1200px'],
//         duration: 500,
//         easing: 'linear',
//         delay: 500
//     },

//     scale: 0.5,
//     borderRadius: '50%'

// })

// function as values

const myAnim = anime({
    targets: '.js-box',
    autoplay: false,
    duration: setDuration,
    delay: setDelay,
    translateX: {
        value: [xInitial, xPosAbsolute],
        duration: 2000,
    },
    scale: 0.5,
    borderRadius: '50%'
})

function xPosAbsolute(node, index) {
    /*
    index = o => 100
    index =1 => 200
    */
    return (index * 100) + 100;
}

function xPosRelative(node, index) {
    /*
    index = o => +=100
    index =1 => +=200
    */
    return '+=' + ((index * 100) + 100);
}

function xInitial(node, index) {
    /*
    index= 0 => 50
    index= 1 => 100 
    */
    return (index * 50) + 50;
}

function setDuration(node, index) {
    /*
    index= 0 => 500ms
    index= 1 => 1000ms 
    */
    return index * 500 + 200;
}

function setDelay(node, index) {
    /**
     index =0 => 0ms
     index = 1 =>1000ms
     */
    return (index * 500) + 2000;
}