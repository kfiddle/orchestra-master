import Inst from './Inst';

// revisit what we think of "violin" vs "violin1" or "violin2"

const flute = new Inst('flute', 'fl');
const piccolo = new Inst('piccolo', 'pic', flute);
const fluteC = new Inst('bass flute in C', 'bfl', flute);
const altoFlute = new Inst('alto flute', 'afl', flute);

const oboe = new Inst('oboe', 'ob');
const englishHorn = new Inst('english horn', 'Eh', oboe);
const damore = new Inst("oboe d'amore", "ob d'am", oboe);
const ocass = new Inst('oboe da caccia', 'ob da cacc', oboe);

const clarinet = new Inst('clarinet', 'cl');
const Ebcl = new Inst('Eb clarinet', 'Ebcl', clarinet);
const bassClarinet = new Inst('bass clarinet', 'bcl', clarinet);
const contrabassClarinet = new Inst('contrabass clarinet', 'cbcl', clarinet);
const bassClarinetA = new Inst('bass clarinet in A', 'bcl(A)', clarinet);
const altoCl = new Inst('alto clarinet', 'acl', clarinet);
const dClar = new Inst('D clarinet', 'D-cl', clarinet);

const gtr = new Inst('guitar', 'gtr');
const harm = new Inst('harmonium', 'harm');

const bassGuitar = new Inst('bass guitar', 'bgtr');
const quartet = new Inst('quartet', '4t');
const quintet = new Inst('quintet', '5t');
const altoVoice = new Inst('alto voice', 'A');
const accord = new Inst('accordion', 'accord');

const sax = new Inst('saxophone', 'sx');
const altoSax = new Inst('alto saxophone', 'asx');
const trombaContra = new Inst('tromba contralta', 'atp');

const baritoneVoice = new Inst('baritone voice', 'Bar');
const bassVoice = new Inst('bass voice', 'Bs');
const bassBarVoice = new Inst('bass-baritone voice', 'Bs-Bar');
const tenor = new Inst('tenor voice', 'T');
const cTenor = new Inst('countertenor', 'CT');
const mz = new Inst('mezzo-soprano voice', 'Ms');
const s = new Inst('soprano voice', 'S');

const narr = new Inst('narrator', 'narr');
const bassetHorn = new Inst('basset horn', 'basset hn');
const rec = new Inst('recorder', 'rec');

const bariHorn = new Inst('baritone horn', 'bar hn');
const tenorSax = new Inst('tenor saxophone', 'tsx');
const bariSax = new Inst('baritone sax', 'bsx');

const bassoon = new Inst('bassoon', 'bn');
const contrabassoon = new Inst('contrabassoon', 'cbn', bassoon);

const horn = new Inst('horn', 'hn');
const wagnerTuba = new Inst('Wagner Tuba', 'Wag tb', horn);
const pHorn = new Inst('posthorn', 'posthn');

const trumpet = new Inst('trumpet', 'tpt');
const cornet = new Inst('cornet', 'crt', trumpet);
const piccTrumpet = new Inst('piccolo trumpet', 'pic tp', trumpet);
const bassTrump = new Inst('bass trumpet', 'btp', trumpet);
const flug = new Inst('flugelhorn', 'flug', trumpet);

const trombone = new Inst('trombone', 'tbn');
const bassTromb = new Inst('bass trombone', 'btbn', trombone);

const tuba = new Inst('tuba', 'tuba');
const euph = new Inst('euphonium', 'euph', tuba);

const str = new Inst('strings', 'str');
const strQuartet = new Inst('string quartet', 'str 4t');
const strQuintet = new Inst('string quintet', 'str 5t');
const violin = new Inst('violin', 'vn');
const viola = new Inst('viola', 'va');
const cello = new Inst('cello', 'vc');
const doubleBass = new Inst('double bass', 'db');

const harp = new Inst('harp', 'hp');
const piano = new Inst('piano', 'pf');
const harps = new Inst('harpsichord', 'hpsd');
const glock = new Inst('glockenspiel', 'glock');
const kyb = new Inst('keyboard', 'kybd');
const cimbasso = new Inst('cimbasso', 'cimbasso');
const organ = new Inst('organ', 'org');
const continuo = new Inst('continuo', 'cnt');
const synth = new Inst('synthesizer', 'synth');

const percussion = new Inst('percussion', 'perc');
const bassDrum = new Inst('bass drum', 'bd');
const sd = new Inst('snare drum', 'sd');
const bassDrumCymbal = new Inst('bass drum with cymbal', 'bd/cym');
const dr = new Inst('drum', 'dr');
const set = new Inst('drum set', 'set');
const tamb = new Inst('tambourine', 'tambn');
const crot = new Inst('crotales', 'crot');
const cymbals = new Inst('cymbals', 'cym');
const tri = new Inst('triangle', 'tri');
const susCym = new Inst('suspended cymbal', 'sus cym');
const blocks = new Inst('temple blocks', 'templeblks');
const woodBl = new Inst('woodblock', 'woodblk');
const ratch = new Inst('ratchet', 'ratch');
const hh = new Inst('high-hat cymbal', 'hi-hat');
const mandolin = new Inst('mandolin', 'mand');
const marac = new Inst('maracas', 'marac');
const marimba = new Inst('marimba', 'marim');
const xyl = new Inst('xylophone', 'xyl');
const vib = new Inst('vibraphone', 'vib');
const whip = new Inst('whip', 'whip');

const primaries = [flute, oboe, clarinet, bassoon, horn, trumpet, trombone, tuba];

const insts = {
  flute,
  fluteC,
  altoFlute,
  piccolo,
  oboe,
  englishHorn,
  damore,
  ocass,

  clarinet,
  Ebcl,
  contrabassClarinet,
  bassClarinet,
  bassClarinetA,
  altoCl,
  dClar,

  bassoon,
  contrabassoon,

  horn,
  wagnerTuba,
  pHorn,

  trumpet,
  piccTrumpet,
  cornet,
  bassTrump,
  flug,

  trombone,
  bassTromb,
  tuba,
  euph,
  str,
  strQuartet,
  strQuintet,
  violin,
  viola,
  cello,
  doubleBass,

  harp,
  piano,
  harps,
  glock,
  kyb,
  cimbasso,
  organ,
  continuo,
  synth,

  percussion,
  bassDrum,
  sd,
  bassDrumCymbal,
  dr,
  set,
  tamb,
  crot,
  cymbals,
  tri,
  susCym,
  blocks,
  woodBl,
  ratch,
  hh,
  mandolin,
  marac,
  marimba,
  xyl,
  vib,
  whip,
  gtr,
  harm,
  bassGuitar,
  quartet,
  quintet,
  altoVoice,
  accord,
  sax,
  altoSax,
  trombaContra,
  baritoneVoice,
  bassVoice,
  bassBarVoice,
  tenor,
  cTenor,
  mz,
  s,
  narr,
  bariHorn,
  bassetHorn,
  rec,
  tenorSax,
  bariSax,
};

export { primaries, insts };
