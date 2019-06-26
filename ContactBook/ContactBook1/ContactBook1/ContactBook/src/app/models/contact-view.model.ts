export class ContactView {
  Id: number;
  Name: string;
  Email: string;
  Mobile: string;

  constructor(args) {
    this.Id = args.id;
    this.Name = args.name;
    this.Email = args.email;
    this.Mobile = args.mobile;
  }
}
