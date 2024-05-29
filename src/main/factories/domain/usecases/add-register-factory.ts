import { AddRegister } from "@/domain/contracts/repos/add-register"
import { DbAddRegister } from "@/domain/usecases"
import { PgRegisterRepository, PgTeacherRepository } from "@/infra/repos/postgres"
import { PgRegisterTeacherRepository } from "@/infra/repos/postgres/register-teacher-repository"

export const makeDbAddRegister = (): AddRegister => {
    const pgRegisterRepository = new PgRegisterRepository()
    const pgTeachRepository = new PgTeacherRepository()
    const pgRlRepository = new PgRegisterTeacherRepository()
    return new DbAddRegister(pgRegisterRepository, pgTeachRepository, pgRlRepository)
  }