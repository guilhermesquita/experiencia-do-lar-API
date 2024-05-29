import { Controller } from "@/application/contracts"
import { AddRegisterController } from "@/application/controllers"
import { makeDbAddRegister } from "../../domain/usecases"
import { makePgTransactionController } from "../decorators"


export const makeAddRegisterController = (): Controller => {
  const controller = new AddRegisterController(
    makeDbAddRegister(),
  )
  return makePgTransactionController(controller)
}