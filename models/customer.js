const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
	salutation:{
		type: String,
		required: true
	},
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	nricfin:{
		type: String,
		required: true
	},
	contactNumber:{
		type: String
	},
	emailAddress:{
		type: String
	},	
	nationality:{
		type: String
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Customer = module.exports = mongoose.model('Customer', customerSchema);

// Get Customer
module.exports.getCustomer = (callback, limit) => {
	Customer.find(callback).limit(limit);
}

// Get Customer
module.exports.getCustomerById = (id, callback) => {
	Customer.findById(id, callback);
}

// Add Customer
module.exports.addCustomer = (customer, callback) => {
	Customer.create(customer, callback);
}

// Update Customer
module.exports.updateCustomer = (id, customer, options, callback) => {
	var query = {_id: id};
	var update = {
		salutation: customer.salutation,
		firstName: customer.firstName,
		secondName: customer.secondName,
		nricfin: customer.nricfin,
		contactNumber: customer.contactNumber,
		emailAddress: customer.emailAddress,
		nationality: customer.nationality,
		image_url: customer.image_url
	}
	Customer.findOneAndUpdate(query, update, options, callback);
}

// Delete Customer
module.exports.removeCustomer = (id, callback) => {
	var query = {_id: id};
	Customer.remove(query, callback);
}
