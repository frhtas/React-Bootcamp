export interface IUser {
    name: string,
    surname: string,
    age?: number, // ? -> uygulamada bu değişken optional olarak kullanılabilir
    status?: boolean
}