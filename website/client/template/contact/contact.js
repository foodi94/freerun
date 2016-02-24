Template.contact.events({
    'submit .contact--form' (event, template) {
        let     nom,
                mail,
                objet,
                msg;

        nom     = template.find('#nom').value;
        mail    = template.find('#mail').value;
        objet   = template.find('#objet').value;
        msg     = template.find('#msg').value;

        Meteor.call('sendEmail',
            'justhype@outlook.fr',
            mail,
            objet,
            nom + '\n' + msg);
    }
});
