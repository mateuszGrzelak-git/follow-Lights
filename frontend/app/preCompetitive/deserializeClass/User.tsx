// ./deserializeClass/User.ts

export class User {
  id: string = "";
  username: string = "";
  password: string = "";
  email: string = "";
  userProgress: any;

  copyInto(data: any) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.userProgress = data.userProgress;
  }
}
