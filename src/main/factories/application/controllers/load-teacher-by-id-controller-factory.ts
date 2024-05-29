import { Controller } from "@/application/contracts"
import { LoadTeacherByIdController } from "@/application/controllers"
import { makeDbLoadTeacherById } from "../../domain/usecases"
import { makePgTransactionController } from "../decorators"

export const makeLoadTeacherByIdController = (): Controller => {
  const controller = new LoadTeacherByIdController(
    makeDbLoadTeacherById(),
  )
  return makePgTransactionController(controller)
}