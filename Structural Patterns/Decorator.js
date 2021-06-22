class bankAccount {
    constructor(firstName, secondName, money) {
        this.firstName = firstName
        this.secondName = secondName
        this._money = money
    }

    getMoney() {
        return this._money
    }

    getOwnerInfo() {
        return `${this.firstName} ${this.secondName}\n`
    }
}

// Декоратор - расширяет функционал какого-либо объекта и возвращает этот объект.
// Таким образом можно строить пропускать объект через цепочку различных декораторов 
// и тем самым расширять его функционал, а также создавать комбинированные объекты
function credit(bankAccount, percent) {
    bankAccount._isCredit = true
    bankAccount._percent = percent
    bankAccount.getCreditInfo = function() {
        return `Credit Statius: ${bankAccount._isCredit}\nCredit percent: ${bankAccount._percent}`
    }
    return bankAccount
}

const alexBankAcc = new bankAccount('Alex', 'Gerasimov', 250000)
const creditedAlexBankAcc = credit(alexBankAcc, 10)

console.log(creditedAlexBankAcc.getOwnerInfo())
console.log(creditedAlexBankAcc.getCreditInfo())