export interface AddRegister {
    add: (register: AddRegister.Params) => Promise<AddRegister.Result>
}

export namespace AddRegister {
    export type Params = {
        nm_register: string
        status_register: string
        telephone_register: string
        cd_teacher: number
    }
    export type Result = {
        id_register: number
        message: string
        statusCode: number
    }
}