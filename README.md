# Toll Free Verification with Google Sheets
This is a simple integration using the Twilio [Toll-Free Verification API](https://www.twilio.com/docs/messaging/compliance/toll-free/api-onboarding)
</br></br>
I would highly encourage you to check out the documentation and build your own process using the API but for those of you that have been submitting CSV files to Twilio support team you may find this a helpful tool in the meantime.
</br></br>
** Please note that this integration is not officially supported by Twilio, use at your own risk **

### Please Watch This Recording First
[Loom Recording](https://www.loom.com/share/4d1f25df05274c208a3335253b40894e?sid=8733b6d1-aa21-4fc2-9fbf-982fcdca4a4a)

### Google Sheet - MAKE A COPY
https://docs.google.com/spreadsheets/d/1lMEcVwlZpWLyWLICx4kpMzKuTgdcYznqfB7Seq-F0X0/edit#gid=940622904

### Update Script Properties
Navigate to Script Properties & add your Twilio Account_Sid & Auth_Token

First navigate to the extensions menu and open app script
![Screenshot 2023-10-23 at 12 46 51 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/9a522b06-6dd8-4312-9b19-a57574523ebe)

Then navigate to project settings
</br>
![Screenshot 2023-10-23 at 12 51 54 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/1971e30e-0e21-4763-ab62-98ffed1707a8)

Scroll to the bottom and replace the default values with your accound sid and auth token
![Screenshot 2023-10-20 at 12 13 50 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/7cfd4c25-89d9-4a06-81b4-90539bfb43f1)

### Input Your Verification Data
Add your data to the spreadsheet! Please do not test with the sample data as the verifications will be sumitted but will later be rejected. If you do submit a verification know that you can [delete the verification](https://github.com/benjohnstone1/gSheetTollFreeVerification/blob/main/README.md#deleting-pending-verification) from within the console (the api does not yet currently support deletions).

### Submit Your Verifications
When you are ready to submit your TFN Verifications - Click on Twilio Menu & Create Toll Free Verifications
![Screenshot 2023-10-20 at 12 32 03 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f39632c4-4c4c-46b4-aec3-b73ba4d86289)

#### First time you run the extension you will need to do the following:
Authorize the script:
</br>
![Screenshot 2023-10-20 at 12 25 28 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/8f33e337-1c45-4c97-84f2-4f9117f4feee)

Bypass the Google verification screen
</br>
![Screenshot 2023-10-20 at 12 28 35 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f38e8ae1-6a67-42e4-b85b-519d9d799be1)

Then you are done! In columns V you should see all successful Verification Sids in column W you should see any errors from unsuccessful submissions
</br>
![Screenshot 2023-10-20 at 12 38 27 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/680cd8b5-af9d-4a12-9692-1d6516977474) 

### Deleting Pending Verification
If you've made a mistake (e.g. submitting sample data) then you can delete a pending verification within the console
<img width="1478" alt="Screenshot 2023-10-23 at 12 55 01 PM" src="https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/e4a3fc7c-f0c5-43a0-970d-c741784bfd5d">

### Some Gotchas
Be sure to check the data entry for number fields, e.g. Zip Code for 11111 should be inputted as ="11111" likewise business contact phonen number for +1231231234 should be ="+1231231234", check the sample data sheet as a reference






