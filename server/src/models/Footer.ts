import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Footer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    adress: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    email2: string

    @Column()
    linkInstagram: string

    @Column()
    linkFacebook: string
 
    @Column()
    linkLinkedin: string
}