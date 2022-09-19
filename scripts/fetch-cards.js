const URL_CHARACTER = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async () => {
  try {
    const response = await fetch(URL_CHARACTER);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.error(`Could not get datos: ${error}`);
  }
};

fetchCharacters();

const showData = (data) => {
  let results = data.results;
  let body = ``;
  for (let i = 0; i < results.length; i++) {
    body += `
            <div class="card">
                <img src="${results[i].image}" alt="${results[i].name}" loading="lazy">
                <div>
                    <p class="card-name">${results[i].name}</p>
                    <p><span>Status: </span>${results[i].status}</p>
                    <p><span>Species: </span>${results[i].species}</p>
                    <p><span>Type: </span>${results[i].type}</p>
                    <p><span>Gender: </span>${results[i].gender}</p>
                    <p><span>Origin location: </span>${results[i].origin.name}</p>
                </div>
            </div>
        `;
  }
  document
    .getElementById("fetch-rickandmortyAPI")
    .insertAdjacentHTML("beforeend", body);
};
