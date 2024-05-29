import { LoadTeacherById } from "@/domain/contracts/repos"
import { DbLoadTeacherById } from "@/domain/usecases"
import { PgTeacherRepository } from "@/infra/repos/postgres"

export const makeDbLoadTeacherById = (): LoadTeacherById => {
  const pgTeacherRepository = new PgTeacherRepository()
  return new DbLoadTeacherById(pgTeacherRepository)
}