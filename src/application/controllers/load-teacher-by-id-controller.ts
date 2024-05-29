import { Controller, HttpResponse } from '../contracts'
import { LoadTeacherById } from "../../domain/contracts/repos"
import {noContent, ok, serverError} from '../helpers'

export class LoadTeacherByIdController implements Controller{
    constructor(
        private readonly loadTeacherById: LoadTeacherById 
    ){}

    async handle(request: LoadTeacherByIdController.Request): Promise<HttpResponse>{
        try {
            const teacher = await this.loadTeacherById.loadById(request.id)
            return teacher ? ok(teacher) : noContent()
        } catch (error: any) {
            return serverError(error)
        }
    };
}
export namespace LoadTeacherByIdController{
    export type Request = {
        id: number
    }
}