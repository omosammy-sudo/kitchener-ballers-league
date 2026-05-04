function renderTable(id, rows, mapper) {
  const body = document.getElementById(id);
  if (!body) return;
  body.innerHTML = rows.map(mapper).join("");
}

// Fixtures
renderTable("fixtures-body", fixtures, r => `
  <tr>
    <td><span class="badge">${r.pitch}</span></td>
    <td>${r.match}</td>
    <td>${r.referee}</td>
  </tr>
`);

// Results grouped by Matchday
const resultsBody = document.getElementById("results-body");

if (resultsBody) {
  resultsBody.innerHTML = results.map(day => `
    <tr>
      <td colspan="2" style="color:#8bd11f; font-weight:bold; padding-top:14px;">
        MATCHDAY ${day.matchday}
      </td>
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
