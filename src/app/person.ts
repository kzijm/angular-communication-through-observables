export class Person {
    firstName: string = 'Henk';
    lastName: string = 'van Buren';
    address: Address ;
    constructor(options) {
        this.firstName = options.firstName || null;
        this.lastName = options.lastName || null;
        this.address = options.address || new Address({});
    }
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    constructor(options) {
        this.street = options.street || null;
        this.city = options.city || null;
        this.state = options.state || null;
        this.zip = options.zip || null;
    }
}