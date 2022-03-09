// traemos nuestra funcion que llamara a la API
const fetchData = require('./../utils/fetchData');
// el link de la API
const API = 'https://rickandmortyapi.com/api/character/';
// nuestra funcion asincrona, le debemos pasar el api
const anotherFunction = async (url_api) => {
    //el tryCatch, para que maneje de manera sincronica
    try {
        // esperamos que haga la primera llamada
      const data = await fetchData(url_api);
      // esperamos que haga la segunda llamada
      const character = await fetchData(`${API}${data.results[0].id}`);
      // esperamos que se haga la tercera llamada
      const  origin = await fetchData (character.origin.url);
      // imprimimos los datos de la api
      console.log(data.info.count);
      console.log(character.name);
      console.log(origin.dimension);
    } catch (error) {
        // si hay algun error lo mostramos
      console.error(error);
    }
  }

  console.log('Before');
  // mandamos a llamar nuestra api
  anotherFunction(API);
  console.log('After');