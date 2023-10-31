function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Twilio")
    .addItem("Create TollFree Verifications", "createTollFreeVerifications")
    .addItem('Fetch TollFree Verifications Status', 'fetchTollFreeVerificationStatus')
    .addToUi();
}

function createTollFreeVerifications() {
  // Store Twilio Account SID & Auth Token in a Properties Service
  var TWILIO_ACCOUNT_SID =
    PropertiesService.getScriptProperties().getProperty("TWILIO_ACCOUNT_SID");
  var TWILIO_AUTH_TOKEN =
    PropertiesService.getScriptProperties().getProperty("TWILIO_AUTH_TOKEN");

  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "TollFreeVerification"
  );

  var businessName = ss.getRange("A2:A").getValues();
  var businessWebsite = ss.getRange("B2:B").getValues();
  var businessStreetAddress = ss.getRange("C2:C").getValues();
  var businessStreetAddress2 = ss.getRange("D2:D").getValues();
  var businessCity = ss.getRange("E2:E").getValues();
  var businessStateProvinceRegion = ss.getRange("F2:F").getValues();
  var businessPostalCode = ss.getRange("G2:G").getValues();
  var businessContactFirstName = ss.getRange("H2:H").getValues();
  var businessContactLastName = ss.getRange("I2:I").getValues();
  var businessContactEmail = ss.getRange("J2:J").getValues();
  var businessContactPhone = ss.getRange("K2:K").getValues();
  var messageVolume = ss.getRange("L2:L").getValues();
  var tollfreePhoneNumberSid = ss.getRange("M2:M").getValues();
  var useCaseCategories = ss.getRange("N2:N").getValues();
  var useCaseSummary = ss.getRange("O2:O").getValues();
  var productionMessageSample = ss.getRange("P2:P").getValues();
  var optInType = ss.getRange("Q2:Q").getValues();
  var optInImageUrls = ss.getRange("R2:R").getValues();
  var additionalInformation = ss.getRange("S2:S").getValues();
  var businessCountry = ss.getRange("T2:T").getValues();
  var notificationEmail = ss.getRange("U2:U").getValues();

  var url = "https://messaging.twilio.com/v1/Tollfree/Verifications";

  var headers = {
    Authorization:
      "Basic " +
      Utilities.base64Encode(TWILIO_ACCOUNT_SID + ":" + TWILIO_AUTH_TOKEN),
  };

  for (var i = 0; i < businessName.length; i++) {
    // Loop through non-empty rows
    if (businessName[i][0] != "") {
      try {
        var data = {
          BusinessName: businessName[i][0],
          BusinessWebsite: businessWebsite[i][0],
          BusinessStreetAddress: businessStreetAddress[i][0],
          BusinessStreetAddress2: businessStreetAddress2[i][0],
          BusinessCity: businessCity[i][0],
          BusinessStateProvinceRegion: businessStateProvinceRegion[i][0],
          BusinessPostalCode: businessPostalCode[i][0],
          BusinessContactFirstName: businessContactFirstName[i][0],
          BusinessContactLastName: businessContactLastName[i][0],
          BusinessContactEmail: businessContactEmail[i][0],
          BusinessContactPhone: businessContactPhone[i][0],
          MessageVolume: messageVolume[i][0],
          TollfreePhoneNumberSid: tollfreePhoneNumberSid[i][0],
          UseCaseCategories: useCaseCategories[i][0],
          UseCaseSummary: useCaseSummary[i][0],
          ProductionMessageSample: productionMessageSample[i][0],
          OptInType: optInType[i][0],
          OptInImageUrls: optInImageUrls[i][0],
          AdditionalInformation: additionalInformation[i][0],
          BusinessCountry: businessCountry[i][0],
          NotificationEmail: notificationEmail[i][0],
        };
        var options = {
          method: "post",
          headers: headers,
          payload: data,
        };
        // Create Verification
        var response = UrlFetchApp.fetch(url, options);
        var verificationSid = JSON.parse(response).sid;
        // Writeback Verification Sid
        ss.getRange("V" + (i + 2)).setValue(verificationSid);
      } catch (e) {
        // Writeback Error Sid
        ss.getRange("X" + (i + 2)).setValue(e);
      }
    }
  }
}

function fetchTollFreeVerificationStatus() {

  // Store Twilio Account SID & Auth Token in a Properties Service
  var TWILIO_ACCOUNT_SID =
    PropertiesService.getScriptProperties().getProperty("TWILIO_ACCOUNT_SID");
  var TWILIO_AUTH_TOKEN =
    PropertiesService.getScriptProperties().getProperty("TWILIO_AUTH_TOKEN");

  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('TollFreeVerification');

  var businessName = ss.getRange("A2:A").getValues();
  var verificationSids = ss.getRange("V2:V").getValues();

  var url = 'https://messaging.twilio.com/v1/Tollfree/Verifications/';
  
  var headers = {
        "Authorization": "Basic " + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN)
  };
  
  var options = {
    'method': 'GET',
    'headers': headers
  };

  for (var i = 0; i < businessName.length; i++) {
    // Loop through non-empty rows
    if (verificationSids[i][0] != "") {
      try {
      
      if (verificationSids[i][0] != '') {
        // Create Verification
        var response = UrlFetchApp.fetch(url+verificationSids[i][0], options);
        var verificationStatus = JSON.parse(response).status;
        // Writeback Verification Sid
        ss.getRange("W"+(i+2)).setValue(verificationStatus);
        ss.getRange("X"+(i+2)).setValue('');
      } else {
        throw new Error( "Verification Sid not Present" );
      }
    }
    catch (e) {
    // Writeback Error Sid
    ss.getRange("X"+(i+2)).setValue(e);
    }
    }
  }
}
