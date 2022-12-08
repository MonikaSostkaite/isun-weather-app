import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => console.log('API is running on http://localhost:3001/api'));
