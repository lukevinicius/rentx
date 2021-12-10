import express from 'express';

import log from './config/logger';
import { router } from './routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  log.info(`🚀 Server started on port ${PORT}`);
});
