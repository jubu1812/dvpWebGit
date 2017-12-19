
export class Transfer{
    
    public id:string;
    public title:string;
    public amount:number;
   
    constructor(id,title,amount)
    {
        this.id = id;
        this.title = title;
        this.amount = amount;
    }

}