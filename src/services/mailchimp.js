import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "c5727135e9dda8486cbabaf3548c29c1",
  server: "us10",
  listid: "904113"
});

/**
 * Asynchronous function that makes a request to the Mailchimp API to check if it is reachable and logs the response.
 */
async function run() {
  try {
    const response = await mailchimp.ping.get();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

run();

const MailChimp = {
  mailchimp
};

export default MailChimp;
