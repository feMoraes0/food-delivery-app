import express from 'express';
import routes from './routes';
import path from 'path';

const server = express();

server.use('/static', express.static(path.resolve(__dirname, '..', 'images')));
server.use(routes);

server.listen(3333, () => {
  console.log('Fake API running on port 3333');
});
