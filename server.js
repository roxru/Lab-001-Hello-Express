import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(3000, () => {
    console.log(process.env.ENVIRONMENT);
    console.log("Hello World! Running my first Node.js project.")
});
