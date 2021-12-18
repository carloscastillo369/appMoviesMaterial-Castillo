export class CartMovieModel {
    
    constructor(
        public id: number,
        public Title: string,
        public Image: string,
        public Year: number,
        public Runtime: number,
        public Type: string,
        public Price: number 
    ){}

}
