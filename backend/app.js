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

    console.log("I think we fetched users successfully")

    const users = rows.map((row) => {
      return {name: row.name, email: row.email,notes:row.notes,sketch_link:row.sketch_link}
    })

    res.json(users)
  })

  // res.end()
})


// to get specific customer details
app.post('/addcustomer', (req, res) => {
  console.log("Fetching user with contractor_id : " + req.body.contractor_id)

  const connection = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "",
    database: "Contractor"
  })
  const queryString = "INSERT INTO customers (contractor_id,name,email,notes,sketch_link ) VALUES (?,?,?,?,?) "
  connection.query(queryString,[ req.body.contractor_id , req.body.name,req.body.email,req.body.notes,req.body.sketch_link ],(err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }
    else
    {
    console.log("I think we fetched users successfully")

    res.json('1')
    }
  })

   //res.end()
})


app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

app.get("/users", (req, res) => {
  var user1 = {firstName: "Stephen", lastName: "Curry"}
  const user2 = {firstName: "Kevin", lastName: "Durant"}
  res.json([user1, user2])
})

// localhost:3003
app.listen(3003, () => {
   console.log("sucsessfuly server started ")
})