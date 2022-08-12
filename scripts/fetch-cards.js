const URL_CHARACTER = "https://rickandmortyapi.com/api/character";
fetch(URL_CHARACTER)
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  let results = data.results;
  let body = ``;
  for (let i = 0; i < results.length; i++) {
    body += `
            <div class="card">
                <img src="${results[i].image}" alt="${results[i].name}">
                <div>
                    <p>${results[i].name}</p>
                    <p><span>Status: </span>${results[i].status}</p>
                    <p><span>Species: </span>${results[i].species}</p>
                    <p><span>Type: </span>${results[i].type}</p>
                    <p><span>Gender: </span>${results[i].gender}</p>
                    <p><span>Origin location: </span>${results[i].origin.name}</p>
                </div>
            </div>
        `;
  }
  document.getElementById("fetch-rickandmortyAPI").innerHTML = body;
}
