// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);
  });

  test('should return user name and age if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');
    const container = document.createElement('div');
    renderItems(container, users);
    const arrayOfLiEmenents = Array.from(container.querySelectorAll('li'));

    expect(
      arrayOfLiEmenents[0].innerText ===
        `Name: ${users[0].name}, Age: ${users[0].age}`
    );
    expect(
      arrayOfLiEmenents[1].innerText ===
        `Name: ${users[2].name}, Age: ${users[2].age}`
    );
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(2);
  });
});
