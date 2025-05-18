import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  address: string;

  @Column()
  zipCode: string;

  @Column()
  city: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthDate: Date;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
  }

  //no mapped
  passwordConfirmation?: string;
}
