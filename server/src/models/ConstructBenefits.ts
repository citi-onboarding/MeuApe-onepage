import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ConstructBenefits {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tag: string

    @Column()
    title: string

    @Column()
    text: string

    @Column()
    image: string

}
