import { AddRegister } from "@/domain/contracts/repos/add-register"
import { DbAddRegister } from "@/domain/usecases"
import { PgRegisterRepository } from "@/infra/repos/postgres"

export const makeDbAddRegister = (): AddRegister => {
    const pgRegisterRepository = new PgRegisterRepository()
    return new DbAddRegister(pgRegisterRepository)
  }