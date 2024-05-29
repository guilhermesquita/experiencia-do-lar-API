import {LoadTeacherAll, LoadTeacherById} from '../../../domain/contracts/repos'
import { PgConnection } from './helpers/connection'
import {PgTeacher} from './entities'
import { Teacher } from '../../../domain/entities/teacher'

export class PgTeacherRepository implements LoadTeacherAll, LoadTeacherById{
    async loadAll(): Promise<LoadTeacherAll.Result>{
        const pgTeacherRepo = PgConnection.getInstance()
        .connect()
        .getRepository(PgTeacher)

        const TeacherPg = await pgTeacherRepo.find()
        return TeacherPg as unknown as Teacher[]
    };

    async loadById(id: number): Promise<Teacher>{
        const pgTeacherRepo = PgConnection.getInstance()
       .connect()
       .getRepository(PgTeacher)

       const TeacherPg = await pgTeacherRepo.findOne({
        where: {
            id_teacher: id
        },
        relations: {
            registerTeacherTP: true
        }
       })

       return TeacherPg as unknown as Teacher
    }
}