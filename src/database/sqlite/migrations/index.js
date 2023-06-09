const sqliteConnection = require('../../sqlite')
const creatUsers = require('./creatUsers')

async function migrationRun(){
    const schemas = [
        creatUsers
    ].join('')

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationRun