import express from 'express';

import log from './config/logger';
import { categoriesRoutes } from './routes/categories.routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/categories', categoriesRoutes);

app.listen(PORT, () => {
  log.info(`🚀 Server started on port ${PORT}`);
});
