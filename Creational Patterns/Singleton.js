class Database {
    constructor(dbName) {
        //При создании объекта, проверяем существует ли уже экземпляр, если существует, то возвращаем его
        if (Database.exists) {
            console.log(`Database ${this._dbName} already exists`)
            return Database.instance
        }
        Database.exists = true
        Database.instance = this
        this._dbName = dbName
    }

    getName() {
        return this._dbName
    }
}

const mysql = new Database('mysql')
console.log(mysql.getName())
const msServer = new Database('msserver')
console.log(msServer.getName())