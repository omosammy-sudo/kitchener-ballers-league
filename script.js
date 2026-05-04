function renderTable(id, rows, mapper) {
  const body = document.getElementById(id);
  if (!body) return;
  body.innerHTML = rows.map(mapper).join("");
}

renderTable("fixtures-body", fixtures, r => `
  <tr>
    <td><span class="badge">${r.pitch}</span></td>
    <td>${r.match}</td>
    <td>${r.referee}</td>
  </tr>
`);

// Supports BOTH formats:
// Old: [{ match: "...", score: "..." }]
// New: [{ matchday: 1, games: [{ match: "...", score: "..." }] }]
const allResults = results.flatMap(item => {
  if (item.games) {
    return item.games.map(game => ({
      matchday: item.matchday,
      match: game.match,
      score: game.score
    }));
  }

  return [{
    matchday: item.matchday || "",
    match: item.match,
    score: item.score
  }];
});

renderTable("results-body", allResults, r => `
  <tr>
    <td>${r.matchday ? `Matchday ${r.matchday}: ` : ""}${r.match}</td>
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
