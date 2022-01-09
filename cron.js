const { exec } = require("child_process");
var cron = require('node-cron');

(async () => {
    let status = 0;
    cron.schedule('* * * * *', async() => {
        status++;
        await exec("git add .", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        
	})
})()

