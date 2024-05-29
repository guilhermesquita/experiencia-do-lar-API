import { Controller } from '../../../../application/contracts'
import { LoadTeacherAllController } from '../../../../application/controllers'
import { makeDbLoadTeacherAll } from '../../domain/usecases'
import { makePgTransactionController } from '../decorators'

export const makeLoadTeacherAllController = (): Controller => {
  const controller = new LoadTeacherAllController(
    makeDbLoadTeacherAll(),
  )
  return makePgTransactionController(controller)
}