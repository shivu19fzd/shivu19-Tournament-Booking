document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
});

const tournaments = [
    { name: "BR SOLO PAID CUSTOM TOURNAMENT", organizer: "Shivu Gamer 19", category: "Bermuda Custom", prize: "₹500", fee: "💰 Join Fee - ₹20", image: "https://storage.googleapis.com/a1aa/image/KqkM0taU6FNGm7LHQvta-3GqfVH47jzdduojhbA88h4.jpg" },
    { name: "BR SQUID PAID CUSTOM TOURNAMENT", organizer: "Shivu Gamer 19", category: "Bermuda Custom", prize: "₹350", fee: "💰 Join Fee - ₹40 Full Team | Single Person - ₹10", image: "https://storage.googleapis.com/a1aa/image/KqkM0taU6FNGm7LHQvta-3GqfVH47jzdduojhbA88h4.jpg" }
];

const freeTournaments = [
    { name: "Battle Royal FREE Tournament", organizer: "Shivu Gamer 19", category: "BR FREE SOLO CUSTOM", prize: "₹100", fee: "💰 Join Fee - Free", image: "https://storage.googleapis.com/a1aa/image/KqkM0taU6FNGm7LHQvta-3GqfVH47jzdduojhbA88h4.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSeRhstuRqrJwo7m9A2waAcQiHjYaoel8JCjzDI49GHbxLMI0g/viewform?usp=header" }
];

const tournamentList = document.getElementById('tournament-list');
tournaments.forEach((t) => {
    let tournamentCard = document.createElement('div');
    tournamentCard.className = `p-4 rounded-lg shadow-lg tournament-card transition-all duration-300`;
    tournamentCard.innerHTML = `
        <img src="${t.image}" alt="${t.name}" class="w-full h-40 object-cover rounded-lg shadow">
        <h3 class="text-lg font-bold mt-2">${t.name}</h3>
        <p>Organized by <span class="text-yellow-300">${t.organizer}</span></p>
        <p class="text-sm italic">${t.category}</p>
        <p class="text-sm">🏆 Prize Pool: ${t.prize} | ${t.fee}</p>
        <button class="button py-3 px-6 sm:py-4 sm:px-8" disabled>Coming Soon</button>
    `;
    tournamentList.appendChild(tournamentCard);
});

const freeTournamentList = document.getElementById('free-tournament-list');
freeTournaments.forEach((t, index) => {
    let tournamentCard = document.createElement('div');
    tournamentCard.className = `p-4 rounded-lg shadow-lg tournament-card transition-all duration-300`;
    tournamentCard.innerHTML = `
        <img src="${t.image}" alt="${t.name}" class="w-full h-40 object-cover rounded-lg shadow">
        <h3 class="text-lg font-bold mt-2">${t.name}</h3>
        <p>Organized by <span class="text-yellow-300">${t.organizer}</span></p>
        <p class="text-sm italic">${t.category}</p>
        <p class="text-sm">🏆 Prize Pool: ${t.prize} | ${t.fee}</p>
        <button class="button py-3 px-6 sm:py-4 sm:px-8 join-now" onclick="window.open('${t.link}', '_blank')">Join Now</button>
    `;
    freeTournamentList.appendChild(tournamentCard);
});
