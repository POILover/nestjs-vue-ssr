import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
enum Gender {
  '男',
  '女',
  '保密',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: Gender;
}
