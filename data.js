// SEASON COMPLETE

const seasonStatus = {
  title: "Kitchener Ballers 6-Aside League 2026 Complete",
  champion: "Mighty Elephants FC",
  summary: "League Champions • 13 Points • +30 Goal Difference",
  message: "Thank you to all teams, players, referees, and supporters. Season 2 loading..."
};

const fixtures = [];

const results = [
  {
    matchday: 1,
    games: [
      { match: "Junior Eagles FC vs The Bull FC", score: "3 - 6" },
      { match: "Onyx FC vs Mighty Elephants FC", score: "5 - 6" },
      { match: "City Lion FC vs Mad Ballers FC", score: "3 - 1" }
    ]
  },
  {
    matchday: 2,
    games: [
      { match: "City Lion FC vs Mighty Elephants FC", score: "4 - 4" },
      { match: "Mad Ballers FC vs The Bull FC", score: "3 - 3" },
      { match: "Onyx FC vs Junior Eagles FC", score: "9 - 4" }
    ]
  },
  {
    matchday: 3,
    games: [
      { match: "Mad Ballers FC vs Onyx Team", score: "4 - 9" },
      { match: "City Lion FC vs The Bull FC", score: "11 - 2" },
      { match: "Mighty Elephants FC vs Junior Eagles FC", score: "18 - 2" }
    ]
  },
  {
    matchday: 4,
    games: [
      { match: "The Bull FC vs Onyx Team", score: "5 - 2" },
      { match: "City Lion FC vs Junior Eagles FC", score: "8 - 4" },
      { match: "Mighty Elephants FC vs Mad Ballers FC", score: "9 - 4" }
    ]
  },
  {
    matchday: 5,
    games: [
      { match: "Mighty Elephants FC vs The Bull FC", score: "12 - 4" },
      { match: "City Lion FC vs Onyx Team", score: "9 - 4" },
      { match: "Mad Ballers FC vs Junior Eagles FC", score: "6 - 5" }
    ]
  }
];

const standings = [
  { team: "Mighty Elephants FC", p: 5, w: 4, d: 1, l: 0, gf: 49, ga: 19, gd: "+30", pts: 13 },
  { team: "City Lion FC", p: 5, w: 4, d: 1, l: 0, gf: 35, ga: 15, gd: "+20", pts: 13 },
  { team: "The Bull FC", p: 5, w: 2, d: 1, l: 2, gf: 20, ga: 31, gd: "-11", pts: 7 },
  { team: "Onyx Team", p: 5, w: 2, d: 0, l: 3, gf: 29, ga: 28, gd: "+1", pts: 6 },
  { team: "Mad Ballers FC", p: 5, w: 1, d: 1, l: 3, gf: 18, ga: 29, gd: "-11", pts: 4 },
  { team: "Junior Eagles FC", p: 5, w: 0, d: 0, l: 5, gf: 18, ga: 47, gd: "-29", pts: 0 }
];

const scorers = [
  { player: "Fuhad", team: "Mighty Elephants FC", goals: 13 },
  { player: "Leke Kitchener", team: "Onyx Team", goals: 8 },
  { player: "Mofi", team: "Mighty Elephants FC", goals: 7 },
  { player: "Japhet", team: "City Lion FC", goals: 6 },
  { player: "Matosa", team: "The Bull FC", goals: 5 },
  { player: "Ifeanyi", team: "City Lion FC", goals: 5 },
  { player: "Feranmi", team: "City Lion FC", goals: 5 },
  { player: "Hooda", team: "Mighty Elephants FC", goals: 5 },
  { player: "Layi", team: "Mighty Elephants FC", goals: 5 },
  { player: "Felix", team: "City Lion FC", goals: 4 },
  { player: "Megai", team: "Mad Ballers FC", goals: 4 },
  { player: "Josh", team: "Onyx Team", goals: 4 },
  { player: "Chibueze", team: "Mighty Elephants FC", goals: 4 },
  { player: "Trap Money", team: "Mad Ballers FC", goals: 4 },
  { player: "Ola", team: "Onyx Team", goals: 5 },
  { player: "Chief", team: "The Bull FC", goals: 5 },
  { player: "Thomas", team: "Onyx Team", goals: 3 },
  { player: "Ovie", team: "Junior Eagles FC", goals: 3 },
  { player: "Kator", team: "Junior Eagles FC", goals: 3 },
  { player: "Neme", team: "Mad Ballers FC", goals: 3 },
  { player: "Michael", team: "Onyx Team", goals: 3 },
  { player: "Drogba", team: "City Lion FC", goals: 3 },
  { player: "Slim Manny", team: "Onyx Team", goals: 3 },
  { player: "Short Abdul", team: "The Bull FC", goals: 3 },
  { player: "Kento", team: "Mighty Elephants FC", goals: 3 },
  { player: "Indomie", team: "Mighty Elephants FC", goals: 3 },
  { player: "Nemerick", team: "Mighty Elephants FC", goals: 3 },
  { player: "Ogo", team: "Mad Ballers FC", goals: 2 },
  { player: "KC", team: "The Bull FC", goals: 2 },
  { player: "Sunmi", team: "Junior Eagles FC", goals: 2 },
  { player: "Daniel Mofe", team: "The Bull FC", goals: 2 },
  { player: "Temidayo", team: "City Lion FC", goals: 2 },
  { player: "Larry", team: "Junior Eagles FC", goals: 2 },
  { player: "Ziko", team: "The Bull FC", goals: 2 },
  { player: "Justice", team: "City Lion FC", goals: 2 },
  { player: "Ikenna", team: "Mighty Elephants FC", goals: 2 },
  { player: "Sammy", team: "Mighty Elephants FC", goals: 2 },
  { player: "Wisdom", team: "Mighty Elephants FC", goals: 2 },
  { player: "OG", team: "The Bull FC", goals: 2 },
  { player: "Leke Waterloo", team: "City Lion FC", goals: 2 },
  { player: "Odun", team: "Junior Eagles FC", goals: 2 },
  { player: "Uwem", team: "The Bull FC", goals: 1 },
  { player: "Bello", team: "City Lion FC", goals: 1 },
  { player: "Stanley", team: "City Lion FC", goals: 1 },
  { player: "Fest D", team: "Junior Eagles FC", goals: 1 },
  { player: "Eromosele", team: "Mad Ballers FC", goals: 1 },
  { player: "Abdul", team: "Mad Ballers FC", goals: 1 },
  { player: "Isaac", team: "Junior Eagles FC", goals: 1 },
  { player: "Johnny", team: "The Bull FC", goals: 1 },
  { player: "Olu", team: "Mad Ballers FC", goals: 1 },
  { player: "Ayokay", team: "Onyx Team", goals: 1 },
  { player: "Henry", team: "Junior Eagles FC", goals: 1 },
  { player: "Wilson", team: "Mad Ballers FC", goals: 1 },
  { player: "Big Manny", team: "Onyx Team", goals: 1 },
  { player: "Oche", team: "Junior Eagles FC", goals: 1 },
  { player: "Adna", team: "Junior Eagles FC", goals: 1 },
  { player: "SK", team: "Onyx Team", goals: 1 },
  { player: "Kwuams", team: "City Lion FC", goals: 1 },

];

const ownGoals = [
  { player: "Short Abdul", team: "The Bull FC", benefitedTeam: "Mad Ballers FC", goals: 1 }
];

const awards = [
  { award: "League Champions", winner: "Mighty Elephants FC" },
  { award: "Golden Boot", winner: "Fuhad - 13 Goals" },
  { award: "Best Goalie", winner: "Abduljnr - Mighty Elephants FC" }
 ];
