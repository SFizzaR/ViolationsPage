import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Username: string

    @Column({ unique: true })
    Email: string

    @Column()
    Password: string
}
