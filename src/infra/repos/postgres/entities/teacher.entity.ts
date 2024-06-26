import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PgRegisterTeacher } from "./rl-register-teacher.entity";

@Entity({ name: 'tbl_teacher' })
export class PgTeacher {
    @PrimaryGeneratedColumn()
    id_teacher: number;

    @Column()
    nm_teacher: string;

    @Column()
    address_teacher: string;

    @Column()
    day_teacher: string;

    @Column()
    vacancies: number

    @OneToMany(() => PgRegisterTeacher, registerClient => registerClient.cd_teacher)
    registerTeacherTP: PgRegisterTeacher[]
}