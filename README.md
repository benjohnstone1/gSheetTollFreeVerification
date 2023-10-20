# gSheetTollFreeVerification
Toll Free Verification with Google Sheets
This is a simple integration using the Twilio [Toll-Free Verification API](https://www.twilio.com/docs/messaging/compliance/toll-free/api-onboarding) I would highly encourage you to check out the documentation and build your own process using the API but for those of you that have been submitting CSV files to Twilio support team you may find this a helpful tool in the meantime.

Google Sheet - MAKE A COPY
https://docs.google.com/spreadsheets/d/1lMEcVwlZpWLyWLICx4kpMzKuTgdcYznqfB7Seq-F0X0/edit#gid=940622904

Update Script Properties
Navigate to [Script Properties](https://script.google.com/u/0/home/projects/1LE_98pA3ELVP2FfBTNYvCsCqZs1c6q66DeaDUt1-EQ0cOvVh8F6j1Xch/settings) & Add Twilio Account_Sid & Auth Token

![Screenshot 2023-10-20 at 12 13 50 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/7cfd4c25-89d9-4a06-81b4-90539bfb43f1)

Update your spreadsheet with your data! You can test with the sample data and a TFN PN SID but please be sure to delete this verification if you do test it out as the tollfree number verification will later be rejected.

When you are ready to submit your TFN Verifications - Click on Twilio Menu & Create Toll Free Verifications
![Screenshot 2023-10-20 at 12 32 03 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f39632c4-4c4c-46b4-aec3-b73ba4d86289)

First time you run the extension do the following:
</br>
Authorize Script
</br>
![Screenshot 2023-10-20 at 12 25 28 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/8f33e337-1c45-4c97-84f2-4f9117f4feee)

Bypass Google Verification Screen
</br>
![Screenshot 2023-10-20 at 12 28 35 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/f38e8ae1-6a67-42e4-b85b-519d9d799be1)

Then you are done! In columns V you should see all successful Verification Sids in column W you should see any errors from unsuccessful submissions
![Screenshot 2023-10-20 at 12 38 27 PM](https://github.com/benjohnstone1/gSheetTollFreeVerification/assets/7649418/680cd8b5-af9d-4a12-9692-1d6516977474) 
