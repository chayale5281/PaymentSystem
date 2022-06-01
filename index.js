class Payment {
    constructor(DatePayment, amount, PaymentDescription, dealStatus, user) {
        this.DatePayment = DatePayment;
        this.amount = amount
        this.PaymentDescription = PaymentDescription
        this.dealStatus = dealStatus;
        this.user = user;

    }
}

class User {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}
class CreditCard extends Payment {
    constructor(cvc, DateOpPayment, sum, PaymentDescription, dealStatus, user) {
        super(DateOpPayment, sum, PaymentDescription, dealStatus, user)
        this.cvc = cvc;
    }
}
class ClearingCompany extends CreditCard {
    constructor(PaymentID, cvc, DateOpPayment, sum, PaymentDescription, dealStatus, user) {
        super(cvc, DateOpPayment, sum, PaymentDescription, dealStatus, user)
        this.PaymentID = PaymentID;
    }
}

function deal() {

    let type = document.getElementById("TypesOfPayment").ariaValueMax;
    switch (type) {
        case "check":
            return;
        case "creditCard":
            return;
        case "cash":
            return;
    }
}