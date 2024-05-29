import { Teacher } from "@/domain/entities"

export interface LoadTeacherById {
    loadById: (id: number) => Promise <LoadTeacherById.Result>
}

export namespace LoadTeacherById{
    export type Result = Teacher
}