var asana = require('asana');

// before deploying change this 
// var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;
var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;

//local
 
// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

async function resetCalculate() {

client.users.me()
    .then(function (me) {
        // Print out your information
        console.log('Welcome ' + me.name + ' to Asana Calculator!');
    });

 var calculatorSectionId = "1201017501831698"; // id of the calculator 
 client.tasks.getTasksForSection(calculatorSectionId, {
        opt_fields: "completed",
        limit: 15
    })
    .then((result) => {

        console.log(result.data[14].completed);
        
        var isCalculationComplete = true;

        if (result.data[14].completed != isCalculationComplete ){

                // update section
            var submitReset = {
                "custom_fields": {
                    "1201017501831703": 0, // id of custom field row 
                } 
            };
            var submitCompletedFalse = {
                "completed": false, // setting it back to false
            };

        // task Id first row 
         client.tasks.updateTask(1201017501831706, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831712, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831714, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831716, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831718, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831720, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831722, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831724, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831726, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831728, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831730, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831732, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831734, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831736, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831738, submitReset)
            .then((updatResult) => {
            });
            client.tasks.updateTask(1201017501831750, submitCompletedFalse)
            .then((updatResult) => {
            });
       
        }
                 

    });

}

module.exports = { resetCalculate };
