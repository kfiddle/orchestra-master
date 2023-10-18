// private Long id;

// private String prefix;
// private String libNumber;
// private String suffix;
// private String composerLast;
// private String composerFirst;
// private String arranger;
// private String title;
// private String otherName;
// private String publisher;
// private String duration;
// private String windsBrass;
// private String vocalistSoloist;
// private String percBreakdown;
// private String notes;
// private String status;
// private String sign;
// private LocalDate updated;

//                 new PieceBuilder().composerLast("Schumann").title("Violin Concerto").duration("33:00").build(),
//                 new PieceBuilder().composerLast("Brahms").title("Symphony 3").duration("37:00").build(),
//                 new PieceBuilder().composerLast("Auerbach").title("Icarus").duration("12:00").build(),
//                 new PieceBuilder().composerLast("Tchaikovsky").title("Piano Concerto No. 1").duration("32:00").build(),
//                 new PieceBuilder().composerLast("Prokofiev").title("Alexander Nevsky Cantata").duration("36:00").build()));

const pieces = [
  {
    id:'1',
    composerLast: 'Beethoven',
    composerFirst: 'Ludwig Van',
    title: 'Symphony 9',
    duration: '65:00',
  },
  {
    id:'2',
    composerLast: 'Sigfúsdóttir',
    composerFirst: 'Sigmund',
    title: 'Oceans',
    duration: '9:30',
  },
  {
    id:'3',
    composerLast: 'Golijov',
    title: 'Sidereus',
    duration: '9:00',
  },
  {
    id:'4',
    composerLast: 'Piazzolla',
    composerFirst: 'Astor',
    title: 'Aconcagua',
    duration: '20:00',
  },
  {
    id:'5',
    composerLast: 'Holst',
    composerFirst: 'Gustav',
    title: 'Planets',
    duration: '51:00',
  },
  {
    id:'6',
    composerLast: 'Strauss',
    composerFirst: 'Johann',
    title: 'Emperor Waltzes',
    duration: '9:00',
  },
  {
    id:'7',
    composerLast: 'Debussy',
    composerFirst: 'Claude',
    title: 'La Mer',
    duration: '27:00',
  },
];

export default pieces;