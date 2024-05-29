import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { PgTeacher } from "./teacher.entity";
import { PgRegister } from "./register.entity";

@Entity({name:'rl_register_teacher'})
export class PgRegisterTeacher {
    @PrimaryGeneratedColumn()
    id_register_teacher: number;

    @ManyToOne(() => PgRegister, register => register.registerTeacherTP)
    @JoinColumn({name: 'cd_register'})
    cd_register: PgRegister | number;

    @ManyToOne(() => PgTeacher, teacher => teacher.registerTeacherTP)
    @JoinColumn({name: 'cd_teacher'})
    cd_teacher: PgTeacher | number;
}