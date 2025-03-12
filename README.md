# Email Service Setup

## 1. Choose a Mailer
Before using this service, you need to decide which mailer to use. **It is important that the mailer supports HTML as a string.**

By default, the service uses **SendGrid**. You can find the mailer configuration in the `src/mailer.ts` file.

If you decide not to use SendGrid, be sure to uninstall it:
```sh
npm uninstall @sendgrid/mail
```
After removing it and installing your choice, run the following command to install required dependencies:
```sh
npm install
```

## 2. Update the `.env` File
Make sure to create your `.env` file with the necessary configurations for your chosen mailer.

## 3. Available Scripts
Check the `package.json` file to see the available scripts for running the project.

## 4. Sending an Email via POST Request
Here is an example of how to send a POST request to the server:
```json
{
  "type": "orderConfirmation",
  "to": "SomeMail@ymail.com",
  "subject": "Some Subject"
}
```
You can send additional data and customize the templates accordingly to personalize outgoing emails.

## 5. Adjust the Email Template
Data marked as **"EXAMPLEDATA"** must be updated as soon as possible. Additionally, the entire template file should be adjusted to fit your needs.

## 6. React Email Gui
```sh
npm run dev
```
Starts a Test-Server to watch your templates in the browser.
Be careful, every Email-Client has different "Problems" that need different fixes (css wise)