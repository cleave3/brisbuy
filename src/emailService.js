const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();
sgMail.setApiKey(process.env.API_KEY);

/**
 *
 * @param {object} data - Buyer details
 */
const sendEmail = function(data) {
  if (data.phone2 == '') data.phone2 = 'N/A';
  const template = `
  <table style="text-align: center; margin: auto; width: 100%;">
  <thead style="background-color: #880808; color: white;">
    <tr>
      <th>Name</th>
      <th>Phone No.</th>
      <th>Aiternate Phone No.</th>
      <th>Address</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${data.fullName}</td>
      <td>${data.phone}</td>
      <td>${data.phone2}</td>
      <td>${data.address}, ${data.city}, ${data.state}</td>
      <td>${data.amount}</td>
    </tr>
  </tbody>
</table>
  <p>Order was made ${new Date().toUTCString()}</p>
`;

  const message = {
    to: 'azanorbryan@gmail.com',
    from: '"Brisbuy" <noreply@brisbuy.com>',
    dynamic_template_data: { template },
    templateId: process.env.TEMPLATE
  };

  try {
    sgMail.send(message);
  } catch (error) {
    Response.error(error);
  }
};

module.exports = sendEmail;
