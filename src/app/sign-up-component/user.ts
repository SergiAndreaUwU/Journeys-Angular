export class User{


    constructor(
        public userId:number,
        public firstName='',
        public lastName: string,
        public dateOfBirth: Date,
        public email:string,
        public state: string,
        public country: string

    ){
    
    }
    
}