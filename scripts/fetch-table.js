const URL_USERS = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  try {
    const response = await fetch(URL_USERS);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.error(`Could not get datos: ${error}`);
  }
};

fetchUsers();

const showData = (data) => {
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
};
