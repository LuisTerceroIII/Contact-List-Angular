export interface User {
    id?: number; //Sacar a id de user, NO considero que sea una cualidad de Usuario, sino de la tabla que lista contactos
    fullname: string;
    email: string;
    phone: string;
    cell: string;
    location: string;
    picture?: string;
}
