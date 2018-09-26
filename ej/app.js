guardar_localStorage();

function guardar_localStorage() {
    const persona = {
        nombre: 'Francisco Bosque',
        edad: 30,
        correo: 'fcobosque@gmail.com',

        cords: {
            long: 10,
            lat: -10
        }

    }
    let nombre = 'Mily Coralis';
    localStorage.setItem('persona', JSON.stringify(persona));


};

function pedir_localStorage() {
    let persona = JSON.parse(localStorage.getItem('persona'));
    console.log(persona);

}

pedir_localStorage();