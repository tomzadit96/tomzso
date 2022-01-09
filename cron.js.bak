const { exec } = require("child_process");
var cron = require('node-cron');

(async () => {
    let status = 0;
    cron.schedule('* * * * *', async() => {
        status++;
        await exec("git add .", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                
            }
            console.log(`stdout: ${stdout}`);
        });
        await exec("git commit -m 'push' ", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                
            }
            console.log(`stdout: ${stdout}`);
        });

        await exec("git push origin master", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                
            }
            console.log(`stdout: ${stdout}`);
        });
    });

})()

