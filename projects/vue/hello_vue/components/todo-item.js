Vue.component('todo-item', {
    props:['todo'],
    template:'<li>{{todo.val}}</li>'
});