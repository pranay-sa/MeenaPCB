const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Load Google Service Account Credentials
const credentials = require('./meenapcb-b832ade42c9f.json');
const sheets = google.sheets({ version: 'v4', auth: new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
}) });

// Your Google Sheet ID
const SPREADSHEET_ID = '1VcwXBQ3wfI8RFja5U-TgH_zuFSE6ywk7UL2N-Ew4OBs';

// Endpoint to append data
app.post('/add-row', async (req, res) => {
    try {
        const { name, email } = req.body; // Adjust based on form fields
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:B', // Adjust the range
            valueInputOption: 'USER_ENTERED',
            resource: { values: [[name, email]] },
        });
        res.status(200).send('Data added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data to sheet');
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
