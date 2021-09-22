var asana = require('asana');

var personalAccessToken = '1/1200191710492221:9c8c905608b0d38cebcf99e4b0791557';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);


// entire function is wrapped around an Sync
async function createNewAsanaTask() {

    client.users.me()
        .then(function (me) {
            // Print out your information
            console.log('Welcome ' + me.name + 'to your Asana Calculator!');
        });

    // Get the sections    
    var inTakeSectionId = "1201017501831892";
    client.tasks.getTasksForSection(inTakeSectionId, {
            param: "value",
            param: "value",
            opt_pretty: true
        })
        .then((result) => {

            // get the ID of the first task create which is always the latest task
            console.log(" \n Name of newly created domain In Take: " + result.data[0].name);

            this.newDomainInTakeName = result.data[0].name;
            var oppruninitySectionId = "1201017501831705";

            //Adding new domain In Take Task 
            var opprununitiesName = {
                name: this.newDomainInTakeName,
                projects: "1200410807104179"
            }

            // Create a task 
            client.tasks.createTask(opprununitiesName).then((returnedTask) => {
                // then add the newly created task to that section with gid
                client.sections.addTaskForSection(oppruninitySectionId, {
                    task: returnedTask.gid
                })
            }).catch(function (err) {
                console.log(err.value.errors)
            });

        }).catch(function (err) {
            console.log(err.value.errors)
        });
}

// module to export
module.exports = { createNewAsanaTask };