import express from 'express';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.use('/health', (_req, res) => res.status(200).send('OK'));

// Routes
routes.forEach(({ router, path }) => app.use(path, router));

const port = Number(process.env['PORT']) ?? 4000;
const nodeEnv = process.env['NODE_ENV'];
app.listen(port, () => {
  console.info(`=================================`);
  console.info(`======== ENV: ${nodeEnv} ========`);
  console.info(`🚀 App listening on the port ${port}`);
  console.info(`=================================`);
});
