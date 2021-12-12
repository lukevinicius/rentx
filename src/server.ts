import express from 'express';
import swaggerUi from 'swagger-ui-express';

import log from './config/logger';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(PORT, () => {
  log.info(`🚀 Server started on port ${PORT}`);
});
