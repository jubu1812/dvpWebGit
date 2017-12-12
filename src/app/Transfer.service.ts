import { Transfer } from './Transfer';

export class GetTransfers{
    getTransfers():Transfer[]{
        
        return [new Transfer(1,'t1',11), new Transfer(2,'t2',22),new Transfer(2,'t2',22)];
    }
}