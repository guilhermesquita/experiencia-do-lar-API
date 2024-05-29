import { AddRegister } from "@/domain/contracts/repos/add-register";
import { Controller, HttpResponse } from "../contracts";
import { created, serverError } from "../helpers";

export class AddRegisterController implements Controller {
    constructor(
        private readonly addRegister: AddRegister
    ) { }

    async handle(request: AddRegisterController.Request): Promise<HttpResponse> {
        try {
            const { nm_register, status_register, telephone_register, cd_teacher } = request
            const result = await this.addRegister.add({
                nm_register,
                status_register,
                telephone_register,
                cd_teacher
            })
            return created(result)

        } catch (error: any) {
            return serverError(error)
        }
    };
}

export namespace AddRegisterController {
    export type Request = {
        nm_register: string
        status_register: string
        telephone_register: string
        cd_teacher: number
    }
}