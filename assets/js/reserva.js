document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.reservar').addEventListener('click', function() {
        document.querySelector('.wrap__reserva').classList.add('active__reserva');
    });

    document.querySelector('.close__reserva').addEventListener('click', function() {
        document.querySelector('.wrap__reserva').classList.remove('active__reserva');
    });
});
