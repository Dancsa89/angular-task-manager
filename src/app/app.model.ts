export class AppModel {

  constructor(
    public title?: string,
    public checked: boolean = false,
    public category?: string,
    public text?: string) {
    Object.keys(Category);
  }

}

export enum Category {  // ENUM ha nem adsz meg String értéket, akkor a tömbben elfoglalt helyét fogja visszadni
  BILLING = 'BILLING', 
  HOUSE = 'HOUSE', 
  SHOPPING = 'SHOPPING', 
  TRAVEL = 'TRAVEL'
}

export interface AppInterface {
  title?: string;
  checked?: boolean;
  category?: string;
  text?: string;  
}