import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Developer } from './developer.entity';
import { Project } from './project.entity';

@Entity()
export class MonthProjectHours {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Developer, (developer) => developer.monthProjectHours)
    @JoinColumn({ name: 'developer_id' })
    public developer: Developer;

    @ManyToOne(() => Project, (project) => project.monthProjectHours)
    @JoinColumn({ name: 'project_id' })
    public project: Project;

    @Column()
    public month: string;

    @Column()
    public hours: number;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', nullable: true })
    public updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp without time zone', name: 'deleted_at', nullable: true })
    public deletedAt: Date;
}
