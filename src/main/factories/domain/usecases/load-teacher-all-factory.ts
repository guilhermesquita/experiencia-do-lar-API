import { LoadTeacherAll } from '../../../../domain/contracts/repos'
import { DbLoadTeacherAll } from '../../../../domain/usecases'
import { PgTeacherRepository } from '../../../../infra/repos/postgres'

export const makeDbLoadTeacherAll = (): LoadTeacherAll => {
  const pgTeacherRepository = new PgTeacherRepository()
  return new DbLoadTeacherAll(pgTeacherRepository)
}