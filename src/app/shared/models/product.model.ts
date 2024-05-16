export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public categories: string[],
        public tags: string[] = [],
        public isAvailable: boolean = true,
        public quantityInStock: number,
        public ratings: number,
        public orderQuantity: number = 1
    )
        {

    }
}