// UPDATE WEEKLY HERE

const fixtures = [
  { pitch: "Pitch 1", match: "The Bull FC vs Mighty Elephants", referee: "Kingsley" },
  { pitch: "Pitch 2", match: "City Lion FC vs Onyx Team", referee: "Goody" },
  { pitch: "Pitch 3", match: "Junior Eagles FC FC vs Mad Ballers FC", referee: "Bello" },
  
  
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
  }
];

const standings = [
  { team: "Mighty Elephants FC", p: 4, w: 3, d: 1, l: 0, gf: 37, ga: 15, gd: "+22", pts: 10 },
  { team: "City Lion FC", p: 4, w: 3, d: 1, l: 0, gf: 26, ga: 11, gd: "+15", pts: 10 },
  { team: "The Bull FC", p: 4, w: 2, d: 1, l: 1, gf: 16, ga: 19, gd: "-3", pts: 7 },
  { team: "Onyx Team", p: 4, w: 2, d: 0, l: 2, gf: 25, ga: 19, gd: "+6", pts: 6 },
  { team: "Mad Ballers FC", p: 4, w: 0, d: 1, l: 3, gf: 12, ga: 24, gd: "-12", pts: 1 },
  { team: "Junior Eagles FC", p: 4, w: 0, d: 0, l: 4, gf: 13, ga: 41, gd: "-28", pts: 0 }
];

const scorers = [
  { player: "Fuhad", team: "Mighty Elephants FC", goals: 11 },

  { player: "Leke Kitchener", team: "Onyx Team", goals: 8 },

  { player: "Mofi", team: "Mighty Elephants FC", goals: 5 },
  { player: "Ifeanyi", team: "City Lion FC", goals: 5 },
    { player: "Matosa", team: "The Bull FC", goals: 5 },
  { player: "Hooda", team: "Mighty Elephants FC", goals: 4 },
  { player: "Chibueze", team: "Mighty Elephants FC", goals: 4 },
  { player: "Trap Money", team: "Mad Ballers FC", goals: 4 },
  { player: "Ola", team: "Onyx Team", goals: 4 },
  { player: "Japhet", team: "City Lion FC", goals: 4 },
  { player: "Michael", team: "Onyx Team", goals: 3 },
  { player: "Drogba", team: "City Lion FC", goals: 3 },
  { player: "Slim Manny", team: "Onyx Team", goals: 3 },
  { player: "Layi", team: "Mighty Elephants FC", goals: 3 },
  { player: "Ayo", team: "City Lion FC", goals: 3 },
  { player: "Short Abdul", team: "The Bull FC", goals: 3 },
    { player: "Felix", team: "City Lion FC", goals: 2 },
  { player: "Daniel Mofe", team: "The Bull FC", goals: 2 },
  { player: "Temidayo", team: "City Lion FC", goals: 2 },
  { player: "Thomas", team: "Onyx Team", goals: 2 },
  { player: "Larry", team: "Junior Eagles FC", goals: 2 },
  { player: "Ovie", team: "Junior Eagles FC", goals: 2 },

  { player: "Ziko", team: "The Bull FC", goals: 2 },
  { player: "Indomie", team: "Mighty Elephants FC", goals: 2 },
  { player: "Josh", team: "Onyx Team", goals: 2 },
  { player: "Justice", team: "City Lion FC", goals: 2 },
  { player: "Megai", team: "Mad Ballers FC", goals: 2 },
  { player: "Ikenna", team: "Mighty Elephants FC", goals: 2 },
  { player: "Sammy", team: "Mighty Elephants FC", goals: 2 },
  { player: "Wisdom", team: "Mighty Elephants FC", goals: 2 },
  { player: "OG", team: "The Bull FC", goals: 2 },
  { player: "Neme", team: "Mad Ballers FC", goals: 2 },
  { player: "Leke Waterloo", team: "City Lion FC", goals: 2 },
  { player: "Odun", team: "Junior Eagles FC", goals: 2 },
  { player: "Kator", team: "Junior Eagles FC", goals: 2 },
  { player: "Chif", team: "The Bull FC", goals: 2 },
  { player: "Feranmi", team: "City Lion FC", goals: 2 },
  { player: "Eromosele", team: "Junior Eagles FC", goals: 1 },
  { player: "Isaac", team: "Junior Eagles FC", goals: 1 },
  { player: "Johnny", team: "The Bull FC", goals: 1 },
  { player: "Olamide", team: "Onyx Team", goals: 1 },
  { player: "Kento", team: "Mighty Elephants FC", goals: 1 },
  { player: "Olu", team: "Mad Ballers FC", goals: 1 },
  { player: "Ayokay", team: "Onyx Team", goals: 1 },
  { player: "Henry", team: "Junior Eagles FC", goals: 1 },
  { player: "Wilson", team: "Mad Ballers FC", goals: 1 },
  { player: "Big Manny", team: "Onyx Team", goals: 1 },
  { player: "Oche", team: "Junior Eagles FC", goals: 1 },
  { player: "Adna", team: "Junior Eagles FC", goals: 1 },
  { player: "SK", team: "Onyx Team", goals: 1 },
 
  { player: "Kwuams", team: "City Lion FC", goals: 1 },
  { player: "Memerick", team: "Mighty Elephants FC", goals: 1 }
];
const ownGoals = [
  { player: "Short Abdul", team: "The Bull FC", benefitedTeam: "Mad Ballers FC", goals: 1 }
];
