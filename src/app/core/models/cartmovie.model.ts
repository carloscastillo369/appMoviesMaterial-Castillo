export class CartMovieModel {
    
    constructor(
        public id: string,
        public title: string,
        public image: string,
        public year: number,
        public runtime: number,
        public type: string,
        public price: number 
    ){}

}
