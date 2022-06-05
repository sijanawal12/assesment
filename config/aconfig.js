module.exports = {
    HOST     : 'localhost',
    USER     : 'sijan',
    PASSWORD : 'awal',
    DB: 'db',
    dialect: 'mysql',
    PORT:'3307',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel:10000 

    }
}