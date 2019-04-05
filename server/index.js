import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import routes from './routes'
const app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(routes);
app.use(bodyParser.urlencoded({extended: false}));
app.listen(port, () => {
    winston.info('connected on port');
});
export default app;
