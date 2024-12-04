//PARA EMPEZAR, VAMOS A CREAR UN INPUT, DONDE LE VAMOS A PASAR LAS CALIFICACIONES 
import { crearHTML, obtenerValue } from "./dom/domHelper.js";
import { Anime } from "./clases/Anime.js";

const { inputCalificacion, inputSubmit, divGeneral } = crearHTML();

//PARA EL FETCH
const url = 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D?p=1';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863',
    'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
  }
};
//funcion crearAnimes-------------------------------------
let containerAnime;
const crearAnimes = async (calificacion) => {
  try {
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error('Error en la solicitud: ' + respuesta.status);
    }

    if (!containerAnime) {
      containerAnime = document.createElement("div");
      document.body.appendChild(containerAnime);
    }

    containerAnime.innerHTML = "";

    const arrayAnimes = datos.map((anime) => {
      const nuevoAnime = new Anime(
        anime.title,
        anime.picture_url,
        anime.myanimelist_url,
        anime.myanimelist_id,
        anime.rank,
        anime.score,
        anime.type,
        anime.aired_on,
        anime.members
      );

      nuevoAnime.setTitle(anime.title);
      nuevoAnime.setPictureUrl(anime.picture_url);
      nuevoAnime.setMyAnimeListUrl(anime.myanimelist_url);
      nuevoAnime.setMyAnimeListId(anime.myanimelist_id);
      nuevoAnime.setRank(anime.rank);
      nuevoAnime.setScore(anime.score);
      nuevoAnime.setType(anime.type);
      nuevoAnime.setAiredOn(anime.aired_on);
      nuevoAnime.setMembers(anime.members);

      return nuevoAnime;
    });

const animesFiltrados = arrayAnimes.filter((anime) => {
  
  const animeScoreRedondeado = Math.trunc(anime.getScore());
  const calificacionRedondeada = Math.round(parseFloat(calificacion));

  return animeScoreRedondeado === calificacionRedondeada; 
});


    animesFiltrados.forEach(animeFiltrado => {
      const divAnime = document.createElement("div");
      const imagen = document.createElement("img");
      imagen.src = animeFiltrado.getPictureUrl();

      const titulo = document.createElement("span");
      titulo.textContent = animeFiltrado.getTitle();

      divAnime.appendChild(imagen);
      divAnime.appendChild(titulo)

      containerAnime.appendChild(divAnime);
    });

    if (animesFiltrados.length === 0) {
      containerAnime.textContent = "No hay resultados para la selección.";
    }



  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
};


//para que funcione el ok
inputSubmit.addEventListener('click', () => {
  const calificacion  = inputCalificacion.value;
  crearAnimes(calificacion);
});







