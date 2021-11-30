import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 as uuid } from "uuid";

import { Types } from "../entities/Types";

export default class SeedTypes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Types)
      .values([
        { id: uuid(), name: "Pesquisa", hours: "2000" },
        { id: uuid(), name: "Ensino", hours: "2000" },
        { id: uuid(), name: "Extensão", hours: "2000" },
      ])
      .execute();
  }
}
