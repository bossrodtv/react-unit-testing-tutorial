import { addUser } from './add-user';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: Date | string;
};

export type UsersListProps = {
  users?: User[];
};

export function UsersList({ users }: UsersListProps) {
  const handleAddUser = () => {
    addUser({ firstName: 'John', lastName: 'Doe' });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <a href="https://www.google.com">Go To Google</a>
      {users?.length && <div>Users Table</div>}
    </div>
  );
}
