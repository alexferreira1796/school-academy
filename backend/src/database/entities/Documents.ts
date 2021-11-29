import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';
import { Types } from './Types';
import { Users } from './Users';

@Entity('documents')
class Documents extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name_file: string;

  @Column()
  name_path: string;

  @Column()
  status: boolean;

  @Column()
  hours: string;

  @Column({
    name: 'id_user',
  })
  idUser: string;

  @Column({
    name: 'id_type',
  })
  idType: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToOne((type) => Types, (documentTypes) => Documents)
  @JoinColumn({ name: 'id_type', referencedColumnName: 'id' })
  type: Types;

  @OneToOne((type) => Users, (documentUsers) => Documents)
  @JoinColumn({ name: 'id_type', referencedColumnName: 'id' })
  user: Users;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid4();
    }
  }
}

export { Documents };
