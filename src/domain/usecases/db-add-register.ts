import { AddRegister } from "../contracts/repos/add-register";

export class DbAddRegister implements AddRegister {
    constructor(
        private readonly addRegister: AddRegister
    ){}
    async add(register: AddRegister.Params): Promise<AddRegister.Result>{
        return await this.addRegister.add(register)
    };
}