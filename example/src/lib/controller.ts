import { authMiddleware } from '@express-controller/auth-middleware';
import { Controller } from '@express-controller/core';

const auth = authMiddleware(async ({ req, res }) => {
  // Logic to get the user
  console.log('Auth plugin is called');
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };
  return { user };
});

const auth2 = authMiddleware(async ({ req, res }) => {
  // Logic to get the user
  console.log('test plugin is called');
  const test = {
    test: 'test',
  };
  return { test };
});

export const createController = () => new Controller().extend(auth).extend(auth2);

createController()
  .withAuth()
  .build(async ({ req, res }) => {
    // req.user;
    // req.user.id;
    // req.test.test;
    req.app;

    return res.status(200).json({ message: 'Hello World!' });
  });
