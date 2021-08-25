const express = require("express")
const request = require("request");
const bodyParser = require("body-parser")
const app = express()
const port = 3000;
const https = require('http');
const { response } = require("express");

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("public"));
app.get("/", (req, res) => {
    
    res.sendFile(__dirname + "/signup.html")
})


app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const userEmail = req.body.email;

    // const data = {
    //     members: [
    //         {
    //             email_address =userEmail,
    //             status: "subscribed",
    //             merge_fields : {
    //                 FNAME : firstName,
    //                 LNAME : lastName,
    //             }
    //         }
    //     ]
    // }

    // const jsonData = JSON.stringify(data);
    // const url = "https://us6.api.mailchimp.com/3.0/lists/9e0660c342";

    // const options = {
    //     method :"POST",
    //     auth: "EnrichDD:983838e58b144d99d5316d4c2a4aa523-us6"
    // }

    const request = https.request(url,options, (response) => {
        if (response.statusCode === 200) {
            res.send("Congratulation")
        } else {
            res.send("sorry didnt really work")
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

})




app.listen(port, () => {
    console.log("Server port: " + port);
})



// maillchimp api key 
// 983838e58b144d99d5316d4c2a4aa523-us6


// audience id 
// 9e0660c342








// mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});