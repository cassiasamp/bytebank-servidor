const servidor = require('http').createServer();
const gerarValores = require('./gerarValores');
const socket = require('socket.io')(servidor);

setInterval(function repeticao(){
	socket.emit('atualizaBarras', gerarValores());
}, 5000);

servidor.listen(process.env.PORT || 3000);
