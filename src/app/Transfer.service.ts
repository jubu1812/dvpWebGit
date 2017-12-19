import { Transfer } from './Transfer';

export class GetTransfers{
    getTransfers():Transfer[]{
        
        return [new Transfer('20.12.2017','t1',11), new Transfer('21.12.2017','t2',22),new Transfer('22.12.2017','t2',22)];
    }
}