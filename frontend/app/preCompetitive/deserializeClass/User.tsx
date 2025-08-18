export class User {
  Id: string = "";
  Username: string = "";
  Password: string = "";
  Email: string = "";
  UserProgress: any;

  copyInto(data: any) {
    this.Id = data.Id;
    this.Username = data.Username;
    this.Password = data.Password;
    this.Email = data.Email;
    this.UserProgress = data.UserProgress;
  }
}
