import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Violation {
    @PrimaryGeneratedColumn() //Primary Key 
    id: number;

    @Column()
    vehicleNum: string;

    @Column()
    violationType: string;

    @Column()
    violationNum: number;

    @Column()
    dateTime: Date

    @Column('decimal', {
        precision: 6,
        scale: 4
    })

    latitude: number //number includes float too

    @Column('decimal', {
        precision: 6,
        scale: 4
    })
    longitude: number
}
