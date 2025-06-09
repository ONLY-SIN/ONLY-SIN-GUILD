
document.addEventListener("DOMContentLoaded", () => {
  const leaderboardData = [
    { name: "GhostX", kills: 120 },
    { name: "ShadowNinja", kills: 98 },
    { name: "FireBlade", kills: 90 }
  ];

  const topPlays = [
    {
      title: "Top Play of the Week",
      player: "GhostX",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Top Play of the Month",
      player: "SniperQueen",
      video: "https://www.youtube.com/embed/3GwjfUFyY6M"
    }
  ];

  const leaderboardTable = document.getElementById("leaderboard-data");
  leaderboardData.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${player.name}</td><td>${player.kills}</td>`;
    leaderboardTable.appendChild(row);
  });

  const topPlayContainer = document.getElementById("top-play-container");
  topPlays.forEach(play => {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${play.title}: ${play.player}</h3>
    <iframe width="100%" height="315" src="${play.video}" frameborder="0" allowfullscreen></iframe>`;
    topPlayContainer.appendChild(section);
  });
});
