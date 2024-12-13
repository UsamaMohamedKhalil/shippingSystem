import express from 'express';

const app = express();

app.listen(5000, () => {
    console.log('Server Run on port 5000!');
})