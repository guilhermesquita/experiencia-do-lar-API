import { LoadTeacherAll } from "../contracts/repos";

export class DbLoadTeacherAll implements LoadTeacherAll {
    constructor(
        private readonly loadTeacherAll: LoadTeacherAll
    ){}

   async loadAll(): Promise<LoadTeacherAll.Result>{
    return await this.loadTeacherAll.loadAll()
   };
}