require("dotenv").config();

const express = new require("express");
const bodyParser = new require("body-parser");
const request = new require("request");
const client = require("@mailchimp/mailchimp_marketing");
const { response } = require("express");

console.log(process.env.apiKey);

client.setConfig({
    apiKey: '09de1605f860a44b4de02d8eed0f5b4b-us14',
    server: 'us14',
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
        // res.send("Post received");
    }).catch((error) => {
        res.sendFile(__dirname + "/failure.html");
        // console.log(error.response.body)
        // console.log(error.response.body.detail)
    })

});

app.post("/failure", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});