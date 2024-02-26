const express = require('express');
const app = express();
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('Public'));
app.use(express.static('Public2'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render('index', { title: 'Media' });
});

app.get('/aboutus', (req, res) => {
    res.render('aboutus', { title: 'Media' });
});

app.get('/careers', (req, res) => {
    res.render('careers', { title: 'Media' });
});

app.get('/checkout', (req, res) => {
    res.render('checkout', { title: 'Media' });
});

app.get('/contactus', (req, res) => {
    res.render('contactus', { title: 'Media' });
});

app.get('/dairy', (req, res) => {
    res.render('dairy', { title: 'Media' });
});

app.get('/index', (req, res) => {
    res.render('index', { title: 'Media' });
});

app.get('/myaccount', (req, res) => {
    res.render('myaccount', { title: 'Media' });
});

app.get('/mycart', (req, res) => {
    res.render('mycart', { title: 'Media' });
});

app.get('/pastries', (req, res) => {
    res.render('pastries', { title: 'Media' });
});

app.get('/product', (req, res) => {
    res.render('product', { title: 'Media' });
});

let port=4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });


