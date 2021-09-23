// Get your user info

var asana = require('asana');

// before deploying change this 
// var personalAccessToken = process.env.ASANA_ACCESS_TOKEN;

//local
 var personalAccessToken = '1/1200191710492221:9c8c905608b0d38cebcf99e4b0791557';

var client = asana.Client.create().useAccessToken(personalAccessToken);

async function deleteWebHook() {

    //get webhook
    var ws= {
        "workspace": "8440206371875"
    }
 
client.webhooks.getWebhooks(ws)
    .then((result) => {
        console.log(result);

        var webhookId = result.data.gid;
 

    const client = asana.Client.create().useAccessToken('PERSONAL_ACCESS_TOKEN');

client.webhooks.deleteWebhook(webhookId)
    .then((result) => {
        console.log(result);
    });

});

}

module.exports = {
    deleteWebHook
};