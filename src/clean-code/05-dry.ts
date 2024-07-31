type productSize = ''|'S' | 'M' | 'L';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: productSize = '',
    ) {}

    isProductReady(): boolean {
        for (const key in this) {
            switch ( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0) throw Error('Error: the name must be a string');
                    break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0) throw Error('Error: the price must be a a positive number');
                    break;
                    default:
                        throw Error(`${typeof this[key]} is not a valid type`);
            }
       }
       return true;
    }

    toString() {
        if (!this.isProductReady()) return;

        return `Product: ${this.name} (price: ${this.price}), size: ${this.size}`;
    }
}

// Invocar la función autoejecutable correctamente
(() => {
    const bluePants = new Product('blue pants');
    console.log(bluePants.toString());
})();