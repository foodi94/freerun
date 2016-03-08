Meteor.startup(function () {
  smtp = {
    username: 'postmaster@sandboxd5f7959d639d478da9dad68a1357c2a2.mailgun.org',
    password: 'df08320e2fe0347d584bbc75720d08a7',
    server: 'smtp.mailgun.org',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' +
      encodeURIComponent(smtp.username) + ':' +
      encodeURIComponent(smtp.password) + '@' +
      encodeURIComponent(smtp.server) + ':' +
      smtp.port;
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    from = String(from);
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
