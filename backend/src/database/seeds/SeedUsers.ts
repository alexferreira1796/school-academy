import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Users } from '../entities/Users';
import { v4 as uuid } from 'uuid';
import { hash } from 'bcrypt';

export default class SeedUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const passwordHash = await hash('@admin', 8);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          id: uuid(),
          name: 'admin',
          username: 'admin',
          isAdmin: true,
          password: passwordHash,
        },
      ])
      .execute();
  }
}
