import express from 'express';
import RouterNumeros from './router/numeros.js'; 
import config from './config.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/numeros', new RouterNumeros().start());

const server = app.listen(config.PORT, () => console.log(`Servidor arriba http://localhost:${config.PORT}`));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));

