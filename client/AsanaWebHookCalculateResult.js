// Get your user info
    
    var asana = require('asana');
    
    // before deploying change this 
     var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;
    
    //local
    //var personalAccessToken = '1/1200191710492221:9c8c905608b0d38cebcf99e4b0791557';

    var client = asana.Client.create().useAccessToken(personalAccessToken);

    async function webhookCalculateResult(){
        //    var webhookEvent = {
        //     "data": {
        //     "filters": [
        //         {
        //           "action": "changed",
        //           "fields": [
        //             "completed" // when your clicks completed it will generate the task 
        //           ],
        //           "resource_type": "task"
        //         }
        //       ],
        //       "resource": "1201017501831750", // This is the id of the generate score field task 
        //       "target": "https://asana-bt-domain-intake-app.herokuapp.com/calculate_score" // this is where your web-hooks 
        //   }  
        // }

        const webhookEvent = {
          data: {

            filters: [{
              action: "added",
              fields:  "completed",
              resource_type: "task",
          }, ],
        },
        resource: "1200384595968979", // This is the id of the section  
        target: "https://asana-bt-domain-intake-app.herokuapp.com/calculate_score" // this is where web-hooks script is
      }

        
        client.webhooks.createWebhook(webhookEvent)
            .then((result) => {
             }).catch(function (err) {
                console.log(err.value.errors)
              });
   }

   module.exports= {webhookCalculateResult};