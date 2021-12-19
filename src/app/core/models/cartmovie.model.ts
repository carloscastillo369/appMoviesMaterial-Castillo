export class CartMovieModel {
    
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public year: number,
        public runtime: number,
        public type: string,
        public price: number 
    ){}

}
