import { Teacher } from "../../entities/teacher"

export interface LoadTeacherAll {
    loadAll: () => Promise <LoadTeacherAll.Result>
}

export namespace LoadTeacherAll{
    export type Result = Teacher[] | undefined
}