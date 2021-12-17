const core = require('@actions/core');
const {google} = require('googleapis');
const fs = require('fs');

const CLIENT_ID = core.getInput('GOOGLE_CLIENT_ID');
const CLIENT_SECRET = core.getInput('GOOGLE_CLIENT_SECRET');
const REFRESH_TOKEN = core.getInput('GOOGLE_REFRESH_TOKEN');
const FOLDER_ID = core.getInput('GOOGLE_FOLDER_ID');
const filePath = core.getInput('FILE_PATH');
const mimeType = core.getInput('FILE_MIME_TYPE');
const fileName = core.getInput('FILE_NAME');
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

let fileStream;

try {
    fileStream = fs.createReadStream(filePath);
} catch (e) {
    core.setFailed(`Failed to read file ${e}`);
}

async function uploadFile() {
    const response = await drive.files.create({
        requestBody: {
            name: fileName,
            mimeType,
            spaces: 'drive',
            parents: [FOLDER_ID],
        },
        media: {
            mimeType,
            body: fileStream,
        },
    });
    console.log('UPLOADED');
    console.log(response.data);
}

uploadFile().catch(e => {
    core.setFailed(`Uploading File with error ${e}`);
});
