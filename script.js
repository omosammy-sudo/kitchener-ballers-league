function renderTable(id, rows, mapper) {
  const body = document.getElementById(id);
  if (!body) return;
  body.innerHTML = rows.map(mapper).join("");
}

// Season status banner
const seasonBox = document.getElementById("season-status");
if (seasonBox && typeof seasonStatus !== "undefined") {
  seasonBox.innerHTML = `
    <strong>🏆 ${seasonStatus.title}</strong><br>
    <span>Champions: ${seasonStatus.champion}</span><br>
    <span>${seasonStatus.summary}</span><br>
    <small>${seasonStatus.message}</small>
  `;
}

// Hide fixtures if season is complete
const fixturesCard = document.getElementById("fixtures-card");
if (fixturesCard && fixtures.length === 0) {
  fixturesCard.innerHTML = `
    <h2>Season Complete</h2>
    <p class="complete-message">🏆 Mighty Elephants FC are the league champions!</p>
    <p>Season 2 loading...</p>
  `;
} else {
  renderTable("fixtures-body", fixtures, r => `
    <tr>
      <td><span class="badge">${r.pitch}</span></td>
      <td>${r.match}</td>
      <td>${r.referee}</td>
    </tr>
  `);
}

// Results by matchday
const resultsBody = document.getElementById("results-body");
if (resultsBody) {
  resultsBody.innerHTML = results.map(day => `
    <tr>
      <td colspan="2" class="matchday-heading">MATCHDAY ${day.matchday}</td>
    </tr>
    ${day.games.map(game => `
      <tr>
        <td>${game.match}</td>
        <td><strong>${game.score}</strong></td>
      </tr>
    `).join("")}
  `).join("");
}

// Standings
renderTable("standings-body", standings, (r, i) => `
  <tr>
    <td>${i + 1}</td>
    <td>${r.team}</td>
    <td>${r.p}</td>
    <td>${r.w}</td>
    <td>${r.d}</td>
    <td>${r.l}</td>
    <td>${r.gf}</td>
    <td>${r.ga}</td>
    <td>${r.gd}</td>
    <td><strong>${r.pts}</strong></td>
  </tr>
`);

// Goal scorers
renderTable("scorers-body", scorers, r => `
  <tr>
    <td>${r.player}</td>
    <td>${r.team}</td>
    <td><strong>${r.goals}</strong></td>
  </tr>
`);

// Awards
renderTable("awards-body", awards, r => `
  <tr>
    <td>${r.award}</td>
    <td><strong>${r.winner}</strong></td>
  </tr>
`);
