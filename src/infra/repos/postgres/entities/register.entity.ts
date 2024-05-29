import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PgRegisterTeacher } from "./rl-register-teacher.entity";

@Entity({name:'tbl_register'})
export class PgRegister {
    @PrimaryGeneratedColumn()
    id_register: number;

    @Column()
    nm_register: string;

    @Column()
    status_register: string;

    @Column()
    telephone_register: string;

    @OneToMany(() => PgRegisterTeacher, registerClient => registerClient.cd_teacher)
    registerTeacherTP: PgRegisterTeacher[]
}