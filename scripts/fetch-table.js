const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS)
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  let body = ``;
  for (let i = 0; i < data.length; i++) {
    body += `
            <tr>
                <th scope="row">${data[i].name}</th>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${data[i].address.city}</td>
                <td>${data[i].address.street}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].website}</td>
                <td>${data[i].company.name}</td>
            </tr>
        `;
  }
  document
    .getElementById("fetch-jsonplaceholder")
    .insertAdjacentHTML("beforeend", body);
}
