import {LoadTeacherAll} from '../../../domain/contracts/repos'
import { PgConnection } from './helpers/connection'
import {PgTeacher} from './entities'
import { Teacher } from '../../../domain/entities/teacher'

export class PgTeacherRepository implements LoadTeacherAll{
    async loadAll(): Promise<LoadTeacherAll.Result>{
        const pgTeacherRepo = PgConnection.getInstance()
        .connect()
        .getRepository(PgTeacher)

        const TeacherPg = await pgTeacherRepo.find()
        return TeacherPg as unknown as Teacher[]
    };
}