const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Customer = require('./models/customer');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/customerProfile');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/profile');
});

app.get('/api/profile', (req, res) => {
	Customer.getCustomer((err, customer) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

app.get('/api/profile/:_id', (req, res) => {
	Customer.getCustomerById(req.params._id, (err, customer) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

app.post('/api/profile', (req, res) => {
	var customer = req.body;
	Customer.addCustomer(customer, (err, customer) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

app.put('/api/profile/:_id', (req, res) => {
	var id = req.params._id;
	var customer = req.customer;
	Customer.updateCustomer(id, customer, {}, (err, customer) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

app.delete('/api/profile/:_id', (req, res) => {
	var id = req.params._id;
	Customer.removeCustomer(id, (err, customer) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
