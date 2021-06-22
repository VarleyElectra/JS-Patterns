// Фасад стоит использовать когда вам нужно представить простой или урезанный интерфейс к сложной подсистеме.
// Пример популярного Фасада - библиотека Jquery и её $(''), этот фасад позволяет легко получать доступ 
// к элементам страницы и проводить с ними работу

class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) { }

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

// Данный класс является фасадом, позволяющим упростить регистрацию жалоб (complaints) и сделать её в едином интерфейсе
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints()
        }

        return complaint.add({ id, customer, details })
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Alex', 'service', 'dont have access'))
console.log(registry.register('Elena', 'product', 'error 404'))