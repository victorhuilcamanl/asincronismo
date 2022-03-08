/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHappenx = new Promise( (resolve, reject) => {
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
const somethingWillHappeny = () => {
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
const somethingWillHappenz = () => new Promise((resolve, reject) => true ? resolve('Hey!') : reject('Whoops!'));

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

// Error que nos permite ver en consola más detalles del error
const error = new Error('Woops!!'); 
 
const somethingWillHappen2 = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

// Para correr todas las promesas tenemos el método Promise.all() 
//que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then( response => {
      console.log('Array of results',response);
  })
  .catch(err => {
      console.error(err);
  })