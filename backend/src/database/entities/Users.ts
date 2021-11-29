import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  BaseEntity,
  OneToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Documents } from './Documents';

@Entity('users')
class Users extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  isAdmin: boolean;

  @Column()
  registration: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToOne((type) => Documents, (type) => Users)
  documentUsers: Documents;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Users };
