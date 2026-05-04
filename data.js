// UPDATE WEEKLY HERE

const fixtures = [
  { pitch: "Pitch 1", match: "City Lion FC vs The Bull FC", referee: "TBA" },
  { pitch: "Pitch 2", match: "Mighty Elephants FC vs Junior Eagles FC", referee: "TBA" },
  { pitch: "Pitch 3", match: "Mad Ballers FC vs Onyx Team", referee: "TBA" }
];

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
  }
];
const standings = [
  { team: "The Bull FC", p: 2, w: 1, d: 1, l: 0, gf: 9, ga: 6, gd: "+3", pts: 4 },
  { team: "City Lion FC", p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 5, gd: "+2", pts: 4 },
  { team: "Mighty Elephants FC", p: 2, w: 1, d: 1, l: 0, gf: 10, ga: 9, gd: "+1", pts: 4 },
  { team: "Onyx Team", p: 2, w: 1, d: 0, l: 1, gf: 14, ga: 10, gd: "+4", pts: 3 },
  { team: "Mad Ballers FC", p: 2, w: 0, d: 1, l: 1, gf: 4, ga: 6, gd: "-2", pts: 1 },
  { team: "Junior Eagles FC", p: 2, w: 0, d: 0, l: 2, gf: 7, ga: 15, gd: "-8", pts: 0 }
];

const scorers = [
  { player: "Daniel Mofe", team: "The Bull FC", goals: 2 },
  { player: "Temidayo", team: "City Lion FC", goals: 2 },
  { player: "Thomas", team: "Onyx Team", goals: 2 },
  { player: "Ovie", team: "Junior Eagles FC", goals: 1 },
  { player: "Eromosele", team: "Junior Eagles FC", goals: 1 },
  { player: "Isaac", team: "Junior Eagles FC", goals: 1 },
  { player: "Matosa", team: "The Bull FC", goals: 1 },
  { player: "Abdul Short", team: "The Bull FC", goals: 1 },
  { player: "Johnny", team: "The Bull FC", goals: 1 },
  { player: "OG", team: "The Bull FC", goals: 1 },
  { player: "Felix", team: "City Lion FC", goals: 1 },
  { player: "Trap Money", team: "Mad Ballers FC", goals: 1 },
  { player: "Slim Manny", team: "Onyx Team", goals: 1 },
  { player: "Olamide", team: "Onyx Team", goals: 1 },
  { player: "Leke Kitchener", team: "Onyx Team", goals: 1 },
  { player: "Mofi", team: "Mighty Elephants FC", goals: 1 },
  { player: "Fuhad", team: "Mighty Elephants FC", goals: 1 },
  { player: "Indomie", team: "Mighty Elephants FC", goals: 1 },
  { player: "Kento", team: "Mighty Elephants FC", goals: 1 },
  { player: "Hooda", team: "Mighty Elephants FC", goals: 1 },
  { player: "Layi", team: "Mighty Elephants FC", goals: 1 }
];
