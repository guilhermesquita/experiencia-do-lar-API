import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'tbl_teacher'})
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
}