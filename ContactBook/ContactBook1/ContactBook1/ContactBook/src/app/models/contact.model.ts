export class Contact{
     Id : number;
     Name: string;
     Email: string;
     Mobile: string;
     Phone: string;
     Website: string;
     Address: string;

     constructor(args) {
      this.Id = args.id;
      this.Name = args.name;
      this.Email = args.email;
      this.Mobile = args.mobile;
      this.Phone = args.phone;
      this.Website = args.website;
      this.Address = args.address;
     }
  }
