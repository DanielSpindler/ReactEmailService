import sendgrid from "@sendgrid/mail";

//Currently using sendgrid. feel free to change it to any other mailer, just be sure that it takes a string for html (most do that)
export const sendMail = async (
  to: string,
  subject: string,
  html: string,
): Promise<void> => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
  const from = {
    email: "example@test.com", //be sure to use a verified sender (atleast for sendgrid)
    name: "Example",
  };
  const bcc = "example@otherMail.com";
  await sendgrid
    .send({
      from,
      to,
      bcc, // must be unique between to, cc, and bcc
      subject,
      html,
    })
    .then(() => console.log(`mail successfully sent to ${to}`))
    .catch((e) => console.log(`sending mail to ${to} failed... ${e.message}`));
};
