import { createController } from '../lib';

export const getMe = createController()
  .withAuth()
  .build(async ({ req, res }) => {
    // const userId = req.user.id;

    // Logic to get the user
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    return res.status(200).json(user);
  });

export const privateControllers = {
  getMe,
};
