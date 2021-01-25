export interface Product {
    name: String; 
    count: Number;
    status: boolean;
    edit: boolean;
    id?: number;
}

let stat: Product = {} as any;

stat.status = false;
