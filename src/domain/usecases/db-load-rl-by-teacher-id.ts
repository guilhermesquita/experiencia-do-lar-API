import { LoadRlByTeacherId } from "../contracts/repos/load-rl-by-teacher-id";

export class DbLoadRlTeacherById implements LoadRlByTeacherId {
    constructor(
        private readonly loadRlByTeacherId: LoadRlByTeacherId
    ){}
   async loadById(id: number): Promise<LoadRlByTeacherId.Result>{
    return await this.loadRlByTeacherId.loadById(id)
   };
}