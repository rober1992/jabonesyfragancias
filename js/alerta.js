const btn = document.getElementsByClassName('css-button-rounded--black');

document.getElementById('form')
.addEventListener('submit', function(event) {
   event.preventDefault();

        Swal.fire({
            title: 'Mensaje enviado',
            text: "En breve me contactar√© con vos!",
            icon: 'success',
            confirmButtonText: 'Gracias por tu consulta!'
          });

});
