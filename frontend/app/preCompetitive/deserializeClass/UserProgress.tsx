export class UserProgress {
  Id: string = "";
  Results: number[] = [];
  Rank: number = 0;
  UpdateTime: string = "";
  UserId: string = "";

  copyInto(data: any) {
    this.Id = data.Id;
    this.Results = data.Results;
    this.Rank = data.Rank;
    this.UpdateTime = data.UpdateTime;
    this.UserId = data.UserId;
  }
}
