const socket = io();

let msg = document.getElementById('msg');
let username = document.getElementById('username');
let btn = document.getElementById('btn');
let out = document.getElementById('out');
let act = document.getElementById('act');

btn.addEventListener('click', ()=>{
    socket.emit('mychat',{
        username: username.value,
        msg: msg.value
    })
    msg.value = ''
})

socket.on('mychat', (data)=>{
    act.innerHTML = ''
    out.innerHTML +=`<p>
    <b>${data.username}</b>: ${data.msg}
    </p>`
})

msg.addEventListener('keypress', ()=>{
    socket.emit('wr', username.value)
})

socket.on('wr', (data)=>{
    act.innerHTML = `<p>
    <b>${data}: esta escribiendo...</b>
    </p>
    `
})