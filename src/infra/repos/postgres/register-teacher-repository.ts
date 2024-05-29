import { LoadRlByTeacherId } from "@/domain/contracts/repos/load-rl-by-teacher-id";
import { PgConnection } from "./helpers";
import { PgRegisterTeacher } from "./entities/rl-register-teacher.entity";
import { RegisterTeacher } from "@/domain/entities";

export class PgRegisterTeacherRepository implements LoadRlByTeacherId{
    async loadById(id: number): Promise<RegisterTeacher[]>{
        const pgTeacherRepo = PgConnection.getInstance()
       .connect()
       .getRepository(PgRegisterTeacher)

       const RlPg = await pgTeacherRepo.find({
        where: {
            cd_teacher: id
        },
        relations: {
            cd_register: true,
            cd_teacher: true
        }
       })

       return RlPg as unknown as RegisterTeacher[]
    }
}