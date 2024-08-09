const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('VEHICULOSPOWER', 'axel', 'Axel_2024', {
//     host: 'localhost',
//     dialect: 'mssql',
//     port: 1433, // Asegúrate de usar el puerto correcto
// });

const sequelize = new Sequelize('VEHICULOSPOWER', 'axel', 'P@ssw0rd123!', {
    host: 'axelpower.database.windows.net',
    dialect: 'mssql',
    port: 1433, // Asegúrate de usar el puerto correcto
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a la base de datos.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
module.exports=sequelize