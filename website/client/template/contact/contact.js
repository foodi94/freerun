Template.contact.onRendered(function(){
    $('.contact--form').validate({
        messages: {
            email: {
                required: '',
                email: ''
            },
            nom: {
                required: ''
            },
            msg: {
                required: ''
            }
        },
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var nom = $('[name=nom]').val();
            var msg = $('[name=msg]').val();

            Meteor.call('sendEmail',
                        'justhype@outlook.fr',
                        nom + '<' + email + '>',
                        'Message de ' + nom + " via Contact",
                        msg,
                        function (error){
                if (error) {
                    Bert.alert('Vérifier que tous les champs soient remplis',
                               'danger',
                               'growl-top-right');
                } else {
                    Bert.alert('Envoyé avec succès',
                               'success',
                               'growl-top-right');
                }
            });

            $('.contact--form')[0].reset();
        }
    });
});
