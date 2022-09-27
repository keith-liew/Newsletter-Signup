require("dotenv").config();

const express = new require("express");
const bodyParser = new require("body-parser");
const request = new require("request");
const client = require("@mailchimp/mailchimp_marketing");
const { response } = require("express");

client.setConfig({
    apiKey: process.env.MY_API_TOKEN,
    server: process.env.SERVER,
});

const app = new express();
const listID = "0ae8e2e658";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    client.lists.batchListMembers(listID, {
        members: [{
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.firstName,
                LNAME: req.body.lastName,
            },
        }],
    }).then(() => {
        res.sendFile(__dirname + "/success.html");
    }).catch((error) => {
        res.sendFile(__dirname + "/failure.html");
    })

});

app.post("/failure", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on " + (process.env.PORT ? "cloud" : "port 3000"));
});