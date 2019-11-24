const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

/**
 *
 * @param {object} data - Buyer details
 */
const sendEmail = function(data) {
  if (data.phone2 == '') data.phone2 = 'N/A';
  const template = `
  <table style="text-align: center; margin: 20px auto; width: 95%; border: 1px solid black;">
  <thead style="background-color: #880808; color: white;">
    <tr>
      <th>Order time</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone No.</th>
      <th>Aiternate Phone No.</th>
      <th>Product</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${Date.now()}</td>
      <td>${data.fullName}</td>
      <td>${data.phone}</td>
      <td>${data.phone2}</td>
      <td>${data.address}, ${data.state}</td>
      <td>${data.productName}</td>
      <td>${data.quantity}</td>
      <td>${data.amount}</td>
    </tr>
  </tbody>
</table>
`;

  const message = {
    to: 'owhiroroeghele@gmail.com',
    from: '"Brisbuy" <noreply@brisbuy.com>',
    dynamic_template_data: { template },
    templateId: 'd-03f849615b4d459b9902c574b70bc3a1'
  };

  try {
    sgMail.send(message);
  } catch (error) {
    Response.error(error);
  }
};

module.exports = sendEmail;
