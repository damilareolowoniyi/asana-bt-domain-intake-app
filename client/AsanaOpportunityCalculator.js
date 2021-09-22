var asana = require('asana');

// before deploying change this 
// var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;

//local
var personalAccessToken = '1/1200191710492221:9c8c905608b0d38cebcf99e4b0791557';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

async function calculateOppScoring() {

client.users.me()
    .then(function (me) {
        // Print out your information
        console.log('Welcome ' + me.name + ' to Asana Calculator!');
    });

 var calculatorSectionId = "1201017501831698"; // id of the calculator 
 client.tasks.getTasksForSection(calculatorSectionId, {
        opt_fields: "custom_fields",
        limit: 15
    })
    .then((result) => {

        //quickly show me the result 
        // console.log(result._response.data[0].custom_fields[1].number_value);

        var scores = [];
        result._response.data.forEach((entry) => {
            entry.custom_fields.forEach(function (childrenEntry) {
                if ((childrenEntry.number_value !== undefined) && (childrenEntry.number_value !== null)) {
                    console.log(childrenEntry.number_value);
                    scores.push(childrenEntry.number_value);
                }
            });
        });

        // console.log(scores);

        var timeRequired = scores[0];
        var btImpact = scores[1];
        var employeeImpact = scores[2];
        var clientImpact = scores[3];
        var finImpact = scores[4];
        var flexSolution = scores[5];
        var commitReadiness = scores[6];
        var endUserAccess = scores[7];
        var inclusiveProcess = scores[8];
        var businessReadiness = scores[9];
        var metrics = scores[10];
        var risk = scores[11];
        var knowlegde = scores[12];
        var fun = scores[13];

        var FACTOR_CALCULATE_SCORE = ((timeRequired * 6) + (btImpact * 6) + (employeeImpact * 8) + (clientImpact * 10) + (finImpact * 5) + (flexSolution * 1) + (commitReadiness * 1) + (endUserAccess * 1) + (inclusiveProcess * 1) + (businessReadiness * 1) + (metrics * 1) + (risk * 3) + (knowlegde * 1) + (fun * 5));
        console.log(FACTOR_CALCULATE_SCORE + " Factor score");


        var FINAL_CALCULATE_SCORE = Math.round(FACTOR_CALCULATE_SCORE / 150 * 100);
        console.log(FINAL_CALCULATE_SCORE + "% final score");


        var opportunitySectionResultId = "1201017501831705";
        client.tasks.getTasksForSection(opportunitySectionResultId, {
                param: "value",
                param: "value",
                opt_pretty: true
            })
            .then((result) => {
                // console.log(result);
                console.log(result.data[0].gid + " this is the id of the first row");

                //id of the first row
                var firstRowId = result.data[0].gid;

                //timeRquired
                var timeRequiredColor = "";
                if (timeRequired == 0) {
                    timeRequiredColor = "1201017501831769"; //red 
                } else if (timeRequired == 1) {
                    timeRequiredColor = "1201017501831770"; //yellow-orange
                } else if (timeRequired == 2) {
                    timeRequiredColor = "1201017501831771"; //orange
                } else if (timeRequired == 3) {
                    timeRequiredColor = "1201017501831772" // green
                }

                var btImpactColor = "";
                if (btImpact == 0) {
                    btImpactColor = "1201017501831778"; //red 
                } else if (btImpact == 1) {
                    btImpactColor = "1201017501831779"; //yellow-orange
                } else if (btImpact == 2) {
                    btImpactColor = "1201017501831780"; //orange
                } else if (btImpact == 3) {
                    btImpactColor = "1201017501831781" // green
                }

                var employeeColor = "";
                if (employeeImpact == 0) {
                    employeeColor = "1201017501831787"; //red 
                } else if (employeeImpact == 1) {
                    employeeColor = "1201017501831788"; //yellow-orange
                } else if (employeeImpact == 2) {
                    employeeColor = "1201017501831789"; //orange
                } else if (employeeImpact == 3) {
                    employeeColor = "1201017501831790" // green
                }

                var clientColor = "";
                if (clientImpact == 0) {
                    clientColor = "1201017501831795"; //red 
                } else if (clientImpact == 1) {
                    clientColor = "1201017501831797"; //yellow-orange
                } else if (clientImpact == 2) {
                    clientColor = "1201017501831798"; //orange
                } else if (clientImpact == 3) {
                    clientColor = "1201017501831794" // green
                }

                var finColor = "";
                if (finImpact == 0) {
                    finColor = "1201017501831805"; //red 
                } else if (finImpact == 1) {
                    finColor = "1201017501831806"; //yellow-orange
                } else if (finImpact == 2) {
                    finColor = "1201017501831807"; //orange
                } else if (finImpact == 3) {
                    finColor = "1201017501831808" // green
                }

                var flexColor = "";
                if (flexSolution == 0) {
                    flexColor = "1201017501831812"; //red 
                } else if (flexSolution == 1) {
                    flexColor = "1201017501831813"; //yellow-orange
                } else if (flexSolution == 2) {
                    flexColor = "1201017501831814"; //orange
                } else if (flexSolution == 3) {
                    flexColor = "1201017501831815" // green
                }

                var commitColor = "";
                if (commitReadiness == 0) {
                    commitColor = "1201017501831818"; //red 
                } else if (commitReadiness == 1) {
                    commitColor = "1201017501831819"; //yellow-orange
                } else if (commitReadiness == 2) {
                    commitColor = "1201017501831820"; //orange
                } else if (commitReadiness == 3) {
                    commitColor = "1201017501831821" // green
                }

                var inclusiveColor = "";
                if (inclusiveProcess == 0) {
                    inclusiveColor = "1201017501831826"; //red 
                } else if (inclusiveProcess == 1) {
                    inclusiveColor = "1201017501831827"; //yellow-orange
                } else if (inclusiveProcess == 2) {
                    inclusiveColor = "1201017501831828"; //orange
                } else if (inclusiveProcess == 3) {
                    inclusiveColor = "1201017501831829" // green
                }

                var readinessColor = "";
                if (businessReadiness == 0) {
                    readinessColor = "1201017501831833"; //red 
                } else if (businessReadiness == 1) {
                    readinessColor = "1201017501831834"; //yellow-orange
                } else if (businessReadiness == 2) {
                    readinessColor = "1201017501831835"; //orange
                } else if (businessReadiness == 3) {
                    readinessColor = "1201017501831836" // green
                }

                var metricsColor = "";
                if (metrics == 0) {
                    metricsColor = "1201017501831840"; //red 
                } else if (metrics == 1) {
                    metricsColor = "1201017501831841"; //yellow-orange
                } else if (metrics == 2) {
                    metricsColor = "1201017501831842"; //orange
                } else if (metrics == 3) {
                    metricsColor = "1201017501831843" // green
                }

                var riskColor = "";
                if (risk == 0) {
                    riskColor = "1201017501831847"; //red 
                } else if (risk == 1) {
                    riskColor = "1201017501831848"; //yellow-orange
                } else if (risk == 2) {
                    riskColor = "1201017501831849"; //orange
                } else if (risk == 3) {
                    riskColor = "1201017501831846" // green
                }


                var funColor = "";
                if (fun == 0) {
                    funColor = "1201017501831853"; //red 
                } else if (fun == 1) {
                    funColor = "1201017501831854"; //yellow-orange
                } else if (fun == 2) {
                    funColor = "1201017501831855"; //orange
                } else if (fun == 3) {
                    funColor = "1201017501831856" // green
                }

                var submitResultsToFirstRow = {
                    "custom_fields": {
                        "1200415200373172": FINAL_CALCULATE_SCORE, // id of presentage rank
                        "1201017501831774": FACTOR_CALCULATE_SCORE, // id of factor field 
                        "1201017501831768": timeRequiredColor, // id of time to effort and its results in color to update the tag
                        "1201017501831777": btImpactColor,
                        "1201017501831786": employeeColor,
                        "1201017501831793": clientColor,
                        "1201017501831804": finColor,
                        "1201017501831811": flexColor,
                        "1201017501831817": commitColor,
                        "1201017501831825": inclusiveColor,
                        "1201017501831832": readinessColor,
                        "1201017501831839": metricsColor,
                        "1201017501831845": riskColor,
                        "1201017501831852": funColor
                    }
                };
                 client.tasks.updateTask(firstRowId, submitResultsToFirstRow)
                    .then((updatResult) => {
                        console.log(updatResult);
                    });
            });
    });
}

module.exports = { calculateOppScoring };