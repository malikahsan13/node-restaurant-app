const express = require("express");
const config = require("./config");
const db = require("./database/db")
const app = express();

app.use(express.json());

db.authenticate()
    .then(()=> { console.log('Connection has been established successfully.'); 
        db.sync({alter: true}).then(()=>{console.log("DB Synced")}).catch((err)=>{console.log("Error Syncing DB", err)}); })
    .catch((error) => { console.error('Unable to connect to the database:', error)});

app.get("/", (req, res) => {    
    res.send("Welcome to Home");
})

app.use("/users", require("./routes/users_route"))
app.use("/groups", require("./routes/groups_route"))
app.use("/privileges", require("./routes/privilege_route"))
app.use("/group_privilege", require("./routes/group_privilege_route"))
app.use("/user_group", require("./routes/user_group_route"))
app.use("/products", require("./routes/product_route"))


app.listen(config.SERVER_CONFIG.SERVER_PORT, () => {
    console.log(`Server Listening on Port ${config.SERVER_CONFIG.SERVER_PORT}`)
});