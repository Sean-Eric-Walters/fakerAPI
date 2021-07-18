const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

// req is short for request
// res is short for response
// app.get("/api", (req, res) => {
//   res.json({message: "hello sean"});
// });

class User {
  constructor() {
      this._id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
      this._id = faker.datatype.uuid();
      this.name = faker.company.companyName();
      this.address = {
          'street': faker.address.streetAddress(),
          'city': faker.address.city(),
          'state': faker.address.state(),
          'zipcode': faker.address.zipCode(),
          'country': faker.address.country
      }
  }
}

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/user/new", (req, res) => {
  return res.json(new User());
});

app.get("/api/company/new", (req, res) => {
  return res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
  let results = res.json({
  'user': new User(),
  'company': new Company()
  });
  return results;
});

app.listen(port, () => console.log('listening on port: ${port}'));


