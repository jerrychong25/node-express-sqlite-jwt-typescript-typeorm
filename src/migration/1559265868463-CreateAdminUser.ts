import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1559265868463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.name = "admin";
    user.email = "admin@example.com";
    user.password = "admin";
    user.hashPassword();
    user.role = "ADMIN";
    user.register_timestamp = "31/05/2019 12:00";
    user.login_timestamp = "31/05/2019 12:00";
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}