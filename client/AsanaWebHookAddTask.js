// Get your user info

var asana = require('asana');

// before deploying change this 
var personalAccessToken = process.env.ASANA_ACCESS_TOKEN;

//local
// var personalAccessToken = '1/1200191710492221:9c8c905608b0d38cebcf99e4b0791557';

var client = asana.Client.create().useAccessToken(personalAccessToken);

async function webHookAddNewTask() {

    const webhookEvent = {
        data: {
            filters: [{
                action: "added",
                resource_type: "task",
            }, ],
        },
        resource: "1200384595968979", // This is the id of the section  
        target: "https://asana-bt-domain-intake-app.herokuapp.com/asana_create_new_task" // this is where web-hooks script is
    };

    client.webhooks.createWebhook(webhookEvent)
        .then((result) => {}).catch(function (err) {
            console.log(err.value.errors)
        });

        const response = {
            statusCode: 200
            };
            return response;
 }

module.exports = {
    webHookAddNewTask
};