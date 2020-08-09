console.log('welcome to matrix');

var app = new Vue({
    el: '#app',
    data: {
        message: 'oi innit bruv'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: `This page got loaded up on ${new Date().toLocaleString()}, innit!`
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        message: 'Type something really funny!'
    }
})