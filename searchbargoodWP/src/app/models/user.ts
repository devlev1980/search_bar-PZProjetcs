export interface IData{
  users: IUser[];
}

export interface IUser{
  id: number;
  name: string;
  email:string;
  srcImg: string;
  srcAlt: string;
}
