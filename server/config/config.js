//===================
//PUERTO
//===================

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================
// Base de datos
// ==================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://orlandoosoria:BPN81MDlBecV58DV@cluster0-jv49s.mongodb.net/cafe'
}

process.env.URLDB = urlDB;