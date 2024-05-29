import { AddRegister } from "@/domain/contracts/repos/add-register";
import { PgRegister } from "./entities";
import { PgConnection } from "./helpers";
import { PgRegisterTeacher } from "./entities/rl-register-teacher.entity";

export class PgRegisterRepository implements AddRegister {
    async add(register: AddRegister.Params): Promise<AddRegister.Result> {
        const pgRegister = new PgRegister()
        pgRegister.nm_register = register.nm_register
        pgRegister.status_register = register.status_register
        pgRegister.telephone_register = register.telephone_register

        const entityManager = PgConnection.getInstance().connect().createEntityManager()

        await entityManager.transaction(async manager => {
            const saved = await manager.save(PgRegister, pgRegister)
            await manager.save(saved)

            const pgRegisterTeacher = new PgRegisterTeacher()
            pgRegisterTeacher.cd_register = pgRegister.id_register
            pgRegisterTeacher.cd_teacher = register.cd_teacher

            const savedRegisterTeacher = await manager.save(PgRegisterTeacher, pgRegisterTeacher)
            await manager.save(savedRegisterTeacher)
        })
        return {
            id_register: pgRegister.id_register,
            message: 'Criado com sucesso',
            statusCode: 201
        }
    };
}