function renderTable(id, rows, mapper) {
  const body = document.getElementById(id);
  body.innerHTML = rows.map(mapper).join("");
}

renderTable("fixtures-body", fixtures, r => `
  <tr>
    <td><span class="badge">${r.pitch}</span></td>
    <td>${r.match}</td>
    <td>${r.referee}</td>
  </tr>
`);

const allResults = results.flatMap(day =>
  day.games.map(game => ({
    matchday: day.matchday,
    match: game.match,
    score: game.score
  }))
);

renderTable("results-body", allResults, r => `
  <tr>
    <td>Matchday ${r.matchday}: ${r.match}</td>
    <td><strong>${r.score}</strong></td>
  </tr>
`);

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

renderTable("scorers-body", scorers, r => `
  <tr>
    <td>${r.player}</td>
    <td>${r.team}</td>
    <td><strong>${r.goals}</strong></td>
  </tr>
`);
