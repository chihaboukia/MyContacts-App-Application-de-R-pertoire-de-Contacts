document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://randomuser.me/api/?results=9"); // Fetching data for 6 users
    const data = await response.json();
    const users = data.results;

    const userCardsContainer = document.getElementById("userCards");

    users.forEach((user, index) => {
      const cardHtml = `
        <div class="col-md-4 mb-4">
          <div class="profile-card">
            <div class="profile-img" style="background-image: url('${user.picture.large}')"></div>
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
            <p class="card-text"><strong>Email:</strong> ${user.email}</p>
            <p class="card-text"><strong>Tel:</strong> ${user.phone}</p>
          </div>
        </div>
      `;
      userCardsContainer.innerHTML += cardHtml;
    });
  });