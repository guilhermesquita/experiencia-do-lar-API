import { Controller, HttpResponse } from '../contracts'
import { LoadTeacherAll } from "../../domain/contracts/repos"
import {ok, serverError} from '../helpers'

export class LoadTeacherAllController implements Controller{
    constructor(
        private readonly loadTeacherAll: LoadTeacherAll 
    ){}

    async handle(): Promise<HttpResponse>{
        try {
            return ok(await this.loadTeacherAll.loadAll())
        } catch (error: any) {
            return serverError(error)
        }
    };
}