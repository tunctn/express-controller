import { createController } from '../lib';

export const getWeather = createController().build(async ({ req, res }) => {
  // Logic to get the user
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };

  return res.status(200).json(user);
});

export const publicControllers = {
  getWeather,
};
