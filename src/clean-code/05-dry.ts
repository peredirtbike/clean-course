type productSize = ''|'S' | 'M' | 'L';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: productSize = '',
    ) {}

    toString() {
        if(this.name.length <=0) throw Error('Error: the name must be a string');
        if(this.price <=0) throw Error('Error: the price must be a number');
        if(this.size.length <=0) throw Error('Error: size is empty');

        return `Product: ${this.name} (price: ${this.price}), size: ${this.size}`;
    }
}

// Invocar la función autoejecutable correctamente
(() => {
    const bluePants = new Product('blue pants');
    console.log(bluePants.toString());
})();