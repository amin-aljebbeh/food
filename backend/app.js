// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/customers/:id', (req, res) => {
  console.log("Fetching user with id: " + req.params.id)

  const connection = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "",
    database: "Contractor"
  })

  

  const id = req.params.id
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
