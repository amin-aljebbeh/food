// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'))
//To get contractor customers grid view details 
app.get('/contractor_customers/:contractor_id', (req, res) => {
  console.log("Fetching user with contractor_id: " + req.params.contractor_id)

  const connection = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "",
    database: "Contractor"
  })

  const id = req.params.contractor_id
  const queryString = "SELECT * FROM customers WHERE contractor_id = ?"
  connection.query(queryString, [id], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("successfully Fetched")

    const users = rows.map((row) => {
      return {contractor_id:row.contractor_id ,name: row.name,phone: row.phone, email: row.email,notes:row.notes,sketch_link:row.sketch_link}
    })

    res.json(users)
  })

  // res.end()
})

// to get specific customer details
app.get('/contractor_customers/:contractor_id/:id', (req, res) => {
  console.log("Fetching user with contractor_id: " + req.params.contractor_id + "customer id " + req.params.id)

  const connection = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "",
    database: "Contractor"
  })

  const cnotractor_id = req.params.contractor_id
  const id = req.params.id
  const queryString = "SELECT * FROM customers WHERE contractor_id = ? and id = ?"
  connection.query(queryString, [cnotractor_id,id], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("successfully Fetched")

    const users = rows.map((row) => {
      return {name: row.name, email: row.email,notes:row.notes,sketch_link:row.sketch_link}
    })

    res.json(users)
  })

  // res.end()
})


// to add new customer to the Database 
app.post('/addcustomer', (req, res) => {

  console.log("Fetching user with contractor_id : " + req.body.contractor_id)

  const connection = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "",
    database: "Contractor"
  })
  const queryString = "INSERT INTO customers (contractor_id,name,email,phone,notes,sketch_link ) VALUES (?,?,?,?,?,?) "
  connection.query(queryString,[ req.body.contractor_id , req.body.name,req.body.email,req.body.phone,req.body.notes,req.body.sketch_link ],(err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }
    else
    {
      console.log("successfully Fetched")

    res.json('1')
    }
  })

   //res.end()
})


// localhost:3003
app.listen(3003, () => {
   console.log("sucsessfuly server started ")
})