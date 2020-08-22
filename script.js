let msgBox = document.getElementById('msgbox');

console.log('** welcome to matrix **');

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

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
        message: 'Type something really funny!',
        typing: false
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { id: 0, text: 'learn Vue.js'},
            { id: 1, text: 'finish this stupid military service'}
        ]
    }
});

function checkMsgBoxEnterKey(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let content = document.querySelector('#msgbox').value;
        app4.todos.push({ text: content });
    };
};

let typingTimeout;
msgBox.onkeypress = () => {
    if (typingTimeout != undefined) {
        clearTimeout(typingTimeout);
        app3.typing = true;
    };
    typingTimeout = setTimeout(isTyping, 250);
};

function isTyping() {
    return app3.typing = false;
};
