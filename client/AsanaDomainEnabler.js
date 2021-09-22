// Get your user info
module.exports = {
asanaScript: function(callback){


var asana = require('asana');

// before deploying change this 
 var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;

//local
var personalAccessToken = '';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

client.users.me()
  .then(function (me) {
    // Print out your information
    console.log('Welcome ' + me.name + '!');
  });

    var domainSectionId = "1200415142289755";
    client.tasks.getTasksForSection(domainSectionId, {
        param: "value",
        param: "value",
        opt_pretty: true
      })
      .then((result) => {

        // get the ID of the first task create which is always the latest task
        console.log("ID of the newly created In Take: " + result.data[0].gid + " \n Name of newly created asana task: " + result.data[0].name);

        this.newDomainInTakeName = result.data[0].name;
        this.newDomainInTakeID = result.data[0].gid;

        // project ID from oppprunities Scoring 
        var projectGid = "1200410807104179";

        var newSectionObject = {
          name: this.newDomainInTakeName
        }

        // create a new section for a project 
        client.sections.createSectionForProject(projectGid, newSectionObject)
          .then((sectionResults) => {
            console.log(sectionResults.gid + " Your Section is successfully created");

            this.newSectionId = sectionResults.gid;

            if (this.newSectionId === this.newSectionId) {
              // var taskId =  "1200757167213409"; 
              var taskObject = {
                "task": this.newDomainInTakeID
              }


              client.sections.addTaskForSection(this.newSectionId, taskObject)
                .then(function (response) {
                  console.log(response);
                });
            }

            console.log(this.newSectionId + ": is the section ID to add a task to a section");
            console.log("Damilare " + this.newDomainInTakeID)



            // Fun   
            var fun = {
              name: "Fun - Engagements that provide food for the collective soul of the team. This is an arbitrary reflection of enthusiasm",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(fun).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });


            // Knowlegde   
            var Knowlegde = {
              name: "We already have domain knowledge - Designer continuity, and we have experience in this domain and stakeholder space",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(Knowlegde).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });


            // Risks   
            var Risk = {
              name: "Risk if we don’t do it - Extremely damaging risks would have higher importance. If you don't do anything, it will get worse.",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(Risk).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });

 
            // Metrics   
            var metrics = {
              name: "Success measured by metrics - We won’t know how well a solution worked if we can’t measure it. Finding the right measures can",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(metrics).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Inclusive process  
            var metrics = {
              name: "Success measured by metrics - We won’t know how well a solution worked if we can’t measure it. Finding the right measures can",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(metrics).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Inclusive process  
            var businessReadiness = {
              name: "Business readiness - Business should be ready to provide needed resources / documents for the process. End users should be ready for change.",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(businessReadiness).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Inclusive process  
            var inclusive = {
              name: "Inclusive process - All disciplines are there at the beginning of project, (engineering, architecture, product, business, design, research)",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(inclusive).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });


            // accesss to end users 
            var access = {
              name: "Access to end users - Greater access to people actually using the product raises importance of work, and how hard is it to get them",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(access).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Flexbility to build 
            var commitment = {
              name: "Commitment and readiness to build - We have a bias towards working on initiatives that will see the light of day.",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(commitment).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });




            // Flexbility of the solution
            var flexi = {
              name: "Flexibility of the solution - Openness of considering a variety of solutions including hardware or physical space.",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(flexi).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });




            // Financial Impact
            var finImpact = {
              name: "Financial Impact - What amount of money is at risk or to be gained?",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(finImpact).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });




            // Client Impact
            var clientImpact = {
              name: "Clients of Salesforce Impact - These are entities that Salesforce sells products to and by impact, we make their business lives easier",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(clientImpact).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Employee Impact
            var EmployeeImpact = {
              name: "Employee Impact - Reduces the friction of the broader workforce of Salesforce to work here",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(EmployeeImpact).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });




            // BT Impact
            var Impact = {
              name: "BT Impact - Improving reputation, operations, and scalability of BT",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(Impact).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });



            // Time to effort
            var timeToEffort = {
              name: "Time of Effort Required: Total time = Months x #Designers (L(1) is 4mo+, M(2) is 1-3mo, S(3) is under 1mo)",
              projects: "1200410807104179"

            }
            // Create a task 
            client.tasks.createTask(timeToEffort).then((returnedTask) => {
              // then add the newly created task to that section with gid
              client.sections.addTaskForSection(this.newSectionId, {
                task: returnedTask.gid
              })
            }).catch(function (err) {
              console.log(err.value.errors)
            });

          });
     
  });
}
};