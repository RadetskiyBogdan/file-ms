import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
} from 'typeorm';
import { MonthProjectHours } from './hours.entity';

@Entity()
export class Developer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column()
    rate: number;

    @Column()
    salary: number;

    @Column({ name: 'extra_rate' })
    extraRate: number;

    @Column()
    bonus: number;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', nullable: true })
    public updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp without time zone', name: 'deleted_at', nullable: true })
    public deletedAt: Date;

    @OneToMany(() => MonthProjectHours, (monthProjectHour) => monthProjectHour.developer)
    public monthProjectHours: MonthProjectHours[];
}
