# Toll Free Verification with Google Sheets
</br>
This is a simple integration using the Twilio [Toll-Free Verification API](https://www.twilio.com/docs/messaging/compliance/toll-free/api-onboarding)
</br>
I would highly encourage you to check out the documentation and build your own process using the API but for those of you that have been submitting CSV files to Twilio support team you may find this a helpful tool in the meantime.

### Please Watch This Recording First
[Loom Recording](https://www.loom.com/share/4d1f25df05274c208a3335253b40894e?sid=8733b6d1-aa21-4fc2-9fbf-982fcdca4a4a)

### Google Sheet - MAKE A COPY
https://docs.google.com/spreadsheets/d/1lMEcVwlZpWLyWLICx4kpMzKuTgdcYznqfB7Seq-F0X0/edit#gid=940622904

### Update Script Properties
Navigate to Script Properties & Add Twilio Account_Sid & Auth Token

First navigate to the extensions menu and open app script
![Screenshot 2023-10-23 at 12 46 51 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/9a522b06-6dd8-4312-9b19-a57574523ebe)

Then navigate to project settings (gear icon) and scroll to the bottom and replace the default with your actual accound sid and auth token
![Screenshot 2023-10-20 at 12 13 50 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/7cfd4c25-89d9-4a06-81b4-90539bfb43f1)

### Input Your Verification Data
Add your spreadsheet with your data! You can test with the sample data and a TFN PN SID but please be sure to delete this verification if you do test with this data as the verification will later be rejected if you do not add the correct information. You can delete pending toll-free verifications within the console (not yet available within the API).

### Some Gotchas
Be sure to check the data entry for number fields, e.g. Zip Code for 11111 should be inputted as ="11111" likewise business contact phonen number for +1231231234 should be ="+1231231234", check the sample data sheet as a reference

When you are ready to submit your TFN Verifications - Click on Twilio Menu & Create Toll Free Verifications
![Screenshot 2023-10-20 at 12 32 03 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f39632c4-4c4c-46b4-aec3-b73ba4d86289)

### First time you run the extension do the following:
</br>
Authorize Script
</br>
![Screenshot 2023-10-20 at 12 25 28 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/8f33e337-1c45-4c97-84f2-4f9117f4feee)

### Bypass Google Verification Screen
</br>
![Screenshot 2023-10-20 at 12 28 35 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f38e8ae1-6a67-42e4-b85b-519d9d799be1)

Then you are done! In columns V you should see all successful Verification Sids in column W you should see any errors from unsuccessful submissions
</br>
![Screenshot 2023-10-20 at 12 38 27 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/680cd8b5-af9d-4a12-9692-1d6516977474) 
