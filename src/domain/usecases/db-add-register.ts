import { LoadTeacherById } from "../contracts/repos";
import { AddRegister } from "../contracts/repos/add-register";
import { LoadRlByTeacherId } from "../contracts/repos/load-rl-by-teacher-id";

export class DbAddRegister implements AddRegister {
    constructor(
        private readonly addRegister: AddRegister,
        private readonly loadTeacherById: LoadTeacherById,
        private readonly loadRegisterTeacherById: LoadRlByTeacherId
    ){}
    async add(register: AddRegister.Params): Promise<AddRegister.Result>{
        const teacher = await this.loadTeacherById.loadById(register.cd_teacher)
        const rl = await this.loadRegisterTeacherById.loadById(register.cd_teacher)
        if(rl.length >= teacher.vacancies){
            return {
                id_register: 0,
                message: 'Não foi possível realizar o cadastro, pois o professor já está lotado.',
                statusCode: 400
            }
        }
        return await this.addRegister.add(register)
    };
}