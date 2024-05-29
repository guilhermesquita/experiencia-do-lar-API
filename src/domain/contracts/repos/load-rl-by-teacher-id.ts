import { RegisterTeacher } from "@/domain/entities"

export interface LoadRlByTeacherId {
    loadById: (id: number) => Promise <LoadRlByTeacherId.Result>
}

export namespace LoadRlByTeacherId{
    export type Result = RegisterTeacher[]
}