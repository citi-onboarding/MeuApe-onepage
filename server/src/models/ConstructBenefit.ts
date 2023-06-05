import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ConstructBenefit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    tag: string;

    @Column({
        nullable: false,
    })
    title: string;

    @Column({
        nullable: false,
    })
    text: string;

    @Column({
        nullable: true,
    })
    image: string;
}
