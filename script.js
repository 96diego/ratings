const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async function (e) {
  data = await fetchData(URL);
  showProducts(data);
});

async function fetchData(url) {
  /*Función asincrónica que realiza una solicitud a una URL utilizando la función fetch() y await.
  Si ocurre algún error lo captura y lo registra en la consola. 
  Si no hay errores devuelve el array de productos obtenido.*/
  try {
    /* Hacer fetch y devolver array de productos (recordar usar await) */
    const response = await fetch(url)
    const data = await response.json();
    return data
  } catch (error) {
    // Log de eventual error
    console.log(error);
  }
}

function showProducts(productsData) {
  /*Función para mostrar productos en el div con id="products".
  Debe usar la función stars(), cutString() y getCurrentDateTime() para lograrlo */
  const div = document.getElementById("products");
  productsData.forEach(element => 
  {
    div.innerHTML+=`
                  <div>
                    <strong>${element.title}</strong>
                    <p>${cutString(element.description)}</p>
                    <div>${stars(element.rating.rate)}</div>
                    <p>${getCurrentDateTime()}</p>
                  </div>
                  `
  });
}

function stars(cantidadStars) {
  /*Función que toma como entrada un número cantidadStars y devuelve 
  el html correspondiente a cinco estrellas con cantidadStars rellenas
  y el resto vacías */
  return `
  <div>
      <p>
          <span class="fa fa-star ${cantidadStars >= 1 && "checked"}"></span>
          <span class="fa fa-star ${cantidadStars >= 2 && "checked"}"></span>
          <span class="fa fa-star ${cantidadStars >= 3 && "checked"}"></span>
          <span class="fa fa-star ${cantidadStars >= 4 && "checked"}"></span>
          <span class="fa fa-star ${cantidadStars == 5 && "checked"}"></span> 
      </p>
  </div>    
`;
}


function cutString(string) {
  /*Función que toma como entrada un string y y un número máximo de caracteres,
     y devuelve la cadena truncada a esa longitud si es más larga,
     seguida de tres puntos suspensivos ("...").*/
  const filtrado = string.slice(0,20);
  return filtrado + " ...";
  //if (string.length > 20) {
  // Acorta el texto al límite deseado
  //var textoAcortado = textoCompleto.substring(0, 20) + "...";
  // }
  //return textoAcortado
}

function getCurrentDateTime() {
  /*función devuelve la fecha y hora actuales 
  en una string legible por humanos.*/
  return new Date().toLocaleDateString();
}
/*Joaquin Guiterrez, Ruben Vera, Valentina Navia, Facundo Arellano, Dominik Bautista, Patricio Carbonell, Karina Alves, César Calandria, Diego Torres.*/