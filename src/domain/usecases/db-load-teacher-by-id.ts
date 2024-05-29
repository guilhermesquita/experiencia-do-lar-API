import { LoadTeacherById } from "../contracts/repos";

export class DbLoadTeacherById implements LoadTeacherById {
    constructor(
        private readonly loadTeacherById: LoadTeacherById
    ){}
   async loadById(id: number): Promise<LoadTeacherById.Result>{
    return await this.loadTeacherById.loadById(id)
   };
}