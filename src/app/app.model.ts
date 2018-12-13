export class AppModel {

  constructor(
    public title?: string,
    public checked: boolean = false,
    public category?: string,
    public text?: string
  ) {

  }
}