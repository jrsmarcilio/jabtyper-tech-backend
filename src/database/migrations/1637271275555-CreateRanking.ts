import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRanking1637266971498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ranking",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "wps",
            type: "integer",
          },
          {
            name: "createdat",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedat",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ranking");
  }
}
