// cách đầu tiên hoidanIt chỉ 
// const { Sequelize } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('hoidanit', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// let connectDB =async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// module.exports = connectDB;


// Cách đơn giản nhất để kết nối Database với Sequelize, do AI tạo( giúp đi từ cổng localhost:8080 được luôn, không cần phải cấu hình gì thêm, chỉ cần thay đổi thông tin database là xong)
const { Sequelize } = require('sequelize');

// Khởi tạo thực thể sequelize duy nhất
// Thay đổi 'hoidanit', 'root', 'null' bằng thông tin Database của em
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // Em đang dùng MySQL đúng không?
    logging: false    // Giúp terminal sạch sẽ hơn, không in log SQL thừa
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('--- Kết nối Database thành công! ---');
    } catch (error) {
        console.error('Lỗi kết nối Database:', error);
    }
}

module.exports = connectDB;
