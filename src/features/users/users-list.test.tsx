import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import * as addUserModule from './add-user';
import { UsersList, type User, type UsersListProps } from './users-list';

function makeMockUsers(count: number) {
  return Array.from(
    { length: count },
    () =>
      ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        createdAt: faker.date.anytime(),
      }) satisfies User
  );
}

function renderComponentUnderTest({ users }: UsersListProps) {
  const view = render(<UsersList users={users} />);

  const events = {
    addUser: vi.spyOn(addUserModule, 'addUser'),
  };
  const elements = {
    getAddUserButton: () => screen.getByRole('button', { name: 'Add User' }),
    queryAddUserButton: () => screen.queryByRole('button', { name: 'Add User' }),
    getGoToGoogleLink: () => screen.getByRole('link', { name: 'Go To Google' }),
    queryGoToGoogleLink: () => screen.getByRole('link', { name: 'Go To Google' }),
    getUsersTable: () => screen.getByText('Users Table'),
    queryUsersTable: () => screen.queryByText('Users Table'),
  };

  return {
    events,
    elements,
    ...view,
  };
}

describe(UsersList.name, () => {
  it('should render the users list correctly', () => {
    const { elements } = renderComponentUnderTest({ users: undefined });

    expect(elements.getAddUserButton()).toBeInTheDocument();
    expect(elements.getGoToGoogleLink()).toBeInTheDocument();
    expect(elements.getGoToGoogleLink()).toHaveAttribute('href', 'https://www.google.com');
    expect(elements.queryUsersTable()).not.toBeInTheDocument();
  });

  it('should render the users table if user data is not empty or undefined', () => {
    const mockUsers = makeMockUsers(10);
    const { elements } = renderComponentUnderTest({ users: mockUsers });

    expect(elements.getUsersTable()).toBeInTheDocument();
  });

  it('should not render the users table if user data is empty', () => {
    const { elements } = renderComponentUnderTest({ users: [] });

    expect(elements.queryUsersTable()).not.toBeInTheDocument();
  });

  it('should not render the users table if the user data is undefined', () => {
    const { elements } = renderComponentUnderTest({ users: undefined });

    expect(elements.queryUsersTable()).not.toBeInTheDocument();
  });

  it('should call the addUser function if Add User button is clicked', async () => {
    const { events, elements } = renderComponentUnderTest({ users: undefined });

    await userEvent.click(elements.getAddUserButton());

    expect(events.addUser).toBeCalled();
    expect(events.addUser).toBeCalledWith({ firstName: 'John', lastName: 'Doe' });
  });
});
