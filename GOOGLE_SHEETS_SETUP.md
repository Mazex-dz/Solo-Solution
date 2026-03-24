# Google Sheets Integration Guide

This guide explains how to connect your Solo Solution form directly to a Google Spreadsheet using Google Apps Script. This approach is completely free, does not require a complex backend, and handles POST requests easily.

## Step 1: Create a Google Sheet
1. Create a new Google Sheet (e.g., named "Solo Solution Form Entries").
2. Set up your headers in the very first row. The headers **must match** the `name` attributes of your HTML form exactly:
   - Column A: `firstName`
   - Column B: `lastName`
   - Column C: `email`
   - Column D: `phone`
   - Column E: `carBrand`
   - Column F: `carModel`
   - Column G: `carYear`
   - Column H: `requiredPart`
   - Column I: `description`

*(Note: If you are handling images, you'll need a more complex script to decode `imageBase64` and save to Google Drive. This guide covers standard text data ingestion).*

## Step 2: Create the Apps Script
1. In your Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the script editor and paste the following:

```javascript
const SHEET_NAME = 'Sheet1'; // Ensure this matches your actual sheet tab name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Parse the incoming JSON body
    const data = JSON.parse(e.postData.contents);
    
    // Create a new row of data matching your headers
    // The order here must match the visual order of columns in your sheet
    const rowData = [
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.carBrand || '',
      data.carModel || '',
      data.carYear || '',
      data.requiredPart || '',
      data.description || ''
    ];

    // Append the row
    sheet.appendRow(rowData);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as a Web App
1. In the Apps Script editor, click the **Deploy** button (top right), then **New deployment**.
2. Select type: **Web app**.
3. Under **Configuration**:
   - Description: "Form Handler V1"
   - Execute as: **Me**
   - Who has access: **Anyone** (This is required so the public form can send data to it).
4. Click **Deploy**.
5. You may be prompted to authorize access. Click through the advanced warnings to allow it.
6. Copy the **Web app URL**.

## Step 4: Connect to Your Frontend
1. Open the project repository.
2. Navigate to `js/formHandler.js`.
3. Locate line 10:
```javascript
const GOOGLE_APP_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
```
4. Replace `'YOUR_GOOGLE_SCRIPT_WEB_APP_URL'` with the actual URL you copied in Step 3.

Your form is now ready to receive data and pipe it directly into Google Sheets!
