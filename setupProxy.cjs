const axios = require('axios');

exports.handler = async (event) => {
  const { email, firstName } = JSON.parse(event.body);

  try {
    const response = await axios.post(
      'https://<dc>.api.mailchimp.com/3.0/lists/<list-id>/members',
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
        },
      },
      {
        headers: {
          Authorization: 'Basic ' + Buffer.from('apikey:b85f47b39adc0ee59cad2a954e3fd17e-us10').toString('base64'),
        },
      }
    );

    if (response.status === 200) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Subscription successful' }),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Subscription failed' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' }),
    };
  }
};
