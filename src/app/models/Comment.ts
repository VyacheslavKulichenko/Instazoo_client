export interface Comment{
  id?: number;
  massage: string;
  username: string;

  push(data: any): number;
}
