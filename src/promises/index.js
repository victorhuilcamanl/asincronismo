/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHappen2 = new Promise( (resolve, reject) => {
    if (true) {
        console.log('Hey dude!');
        resolve('Hey!');
    } else {
        reject('Whoops!');
    }
});

/**
 *Aqui la promesa no se ejecuta hasta que se llame a la funcion
*/
const somethingWillHappen3 = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}

//Aquí usando Ternary Operator:
const somethingWillHappen4 = () => new Promise((resolve, reject) => true ? resolve('Hey!') : reject('Whoops!'));

const somethingWillHappen = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}
somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));