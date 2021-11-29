import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Documents } from './Documents';

@Entity('types')
class Types extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  hours: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToOne((type) => Documents, (type) => Types)
  documentTypes: Documents;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Types };
