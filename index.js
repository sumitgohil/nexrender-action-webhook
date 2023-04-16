const { name } = require('./package.json');

const axios = require('axios');

function getJobProperties(job) {
    const { uid, state, type, tags, renderProgress, error, createdAt, updatedAt, startedAt, finishedAt, errorAt, creator: jobCreator, executor: jobExecutor } = job;
    return { uid, state, type, tags, renderProgress, error, createdAt, updatedAt, startedAt, finishedAt, errorAt, jobCreator, jobExecutor };
}


const run = async (job, settings, { webHookUrl, webHookSecret, customData }, type) => {

    if (type != 'postrender') {
        throw new Error(`Action ${name} can be only run in postrender mode, you provided: ${type}.`)
    }

    if (!webHookUrl || webHookUrl.length === 0) {
        throw new Error(`Empty webhook URL provided. Skipping Webhook Calling`)
    }


    const webhookUrl = webHookUrl;
    customData = customData || {};
    webHookSecret = webHookSecret || "";

    const headers = {
        'X-Webhook-Secret': webHookSecret
    };

    const data = {
        job: getJobProperties(job),
        customData: customData
    };

    axios.post(webhookUrl, data, { headers })
        .then(response => {
            console.log('Webhook has been called');
        })
        .catch(error => {
            console.error('Webhook error:', error);
        });


};


module.exports = run;