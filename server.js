"use strict";

const express = require('express');
const app = express();
const moment = require('moment');

app.set('view engine', 'ejs');

const business_details = {
  "business_address": "Redfern",
  "company_name": "DEGREES PTY LTD",
  "industry": "Real Estate"
};

const contact_details = {
  "basic_profile": {
    "first_name": "JOE",
    "last_name": "CHAN",
    "middle_name": "",
    "phone": "0449909664",
    "title": "Mr"
  },
  "email": "joe@test.com"
};

const emailElement = {
  receiver: {
    first_name: 'Abc',
    last_name: 'DDD'
  },
  to: 'abc@gmail.com'
};

// emailElement.user = user;
emailElement.subject = 'New User Email for Abc';

app.get('/accountactiveusernotification', (req, res) => {
    res.render('accountactiveusernotification', {
      emailElement: emailElement,
      first_name: emailElement.receiver.first_name
  });
});

var server = app.listen(3030);
console.log('server is running at "http://localhost:3030"');
