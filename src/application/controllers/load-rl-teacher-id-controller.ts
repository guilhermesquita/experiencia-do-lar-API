import { LoadRlByTeacherId } from '@/domain/contracts/repos/load-rl-by-teacher-id'
import { Controller, HttpResponse } from '../contracts'
import {noContent, ok, serverError} from '../helpers'

export class LoadRlByTeacherIdController implements Controller{
    constructor(
        private readonly loadRlByTeacherId: LoadRlByTeacherId
    ){}

    async handle(request: LoadRlByTeacherIdController.Request): Promise<HttpResponse>{
        try {
            const rl = await this.loadRlByTeacherId.loadById(request.id)
            return rl ? ok(rl) : noContent()
        } catch (error: any) {
            return serverError(error)
        }
    };
}
export namespace LoadRlByTeacherIdController{
    export type Request = {
        id: number
    }
}