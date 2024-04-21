import { type User } from './users-list';

export type AddUser = Omit<User, 'id' | 'createdAt'>;

export function addUser(user: AddUser) {
  // eslint-disable-next-line no-console
  console.log(user);
}
