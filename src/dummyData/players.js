import Player from './Player';
import { type } from './enums';
import { insts } from './insts';

const players = [
  new Player('1','Leanne', 'Wistrom').setType(type.CONTRACT).setRank(1).addInst(insts.flute).setEmail('lw@Email'),
  new Player('2','Sean', 'Gabriel').setType(type.CONTRACT).setRank(2).addInst(insts.flute).setEmail('sg@Email'),
  new Player('3','Danna', 'Sundet').setType(type.CONTRACT).setRank(1).addInst(insts.oboe).setEmail('ds@Email'),
  new Player('4','Heather', 'Story').setType(type.CONTRACT).setRank(2).addInst(insts.oboe).setEmail('kenjfiddle@gmail.com'),
  new Player('5','Sarah', 'Hamilton').setType(type.CONTRACT).setRank(3).addInst(insts.oboe).setEmail('sh@Email'),

  new Player('6','Ami', 'Vardi').setType(type.CONTRACT).setRank(1).addInst(insts.clarinet).setEmail('av@Email'),
  new Player('7','Benjamin', 'Chen').setType(type.CONTRACT).setRank(2).addInst(insts.clarinet).setEmail('bc@Email'),
  new Player('8','David', 'Boutin-Bourque')
    .setType(type.CONTRACT)
    .setRank(3)
    .addInst(insts.clarinet)
    .addInst(insts.bassClarinet)
    .setEmail('dbb@Email'),
  new Player('9','KeriAnn', 'DiBari-Oberle')
    .setType(type.CONTRACT)
    .setRank(4)
    .addInst(insts.clarinet)
    .addInst(insts.Ebcl)
    .setEmail('kenjfiddle@gmail.com'),
  new Player('10','Laura', 'Koepke').setType(type.CONTRACT).setRank(1).addInst(insts.bassoon).setEmail('kenjfiddle@gmail.com'),
  new Player('11','Sarah Elizabeth', 'Lee').setType(type.CONTRACT).setRank(2).addInst(insts.bassoon).setEmail('kenjfiddle@gmail.com'),
  new Player('12','Chris', 'Rapier').setType(type.CONTRACT).setRank(1).addInst(insts.horn).setEmail('kenjfiddle@gmail.com'),
  new Player('13','Mark', 'Addleman').setType(type.CONTRACT).setRank(2).addInst(insts.horn).setEmail('kenjfiddle@gmail.com'),
  new Player('14','Emily', 'Shelley').setType(type.CONTRACT).setRank(3).addInst(insts.horn).setEmail('kenjfiddle@gmail.com'),
  new Player('15','Bryan', 'Adkins').setType(type.CONTRACT).setRank(4).addInst(insts.horn).setEmail('kenjfiddle@gmail.com'),
  new Player('16','Benjamin', 'Strecker').setType(type.CONTRACT).setRank(5).addInst(insts.horn).setEmail('kenjfiddle@gmail.com'),
  new Player('17','Gary', 'Davis').setType(type.CONTRACT).setRank(1).addInst(insts.trumpet).setEmail('kenjfiddle@gmail.com'),
  new Player('18','Douglas', 'Amos').setType(type.CONTRACT).setRank(2).addInst(insts.trumpet).setEmail('kenjfiddle@gmail.com'),
  new Player('19','Micah', 'Holt').setType(type.CONTRACT).setRank(3).addInst(insts.trumpet).setEmail('kenjfiddle@gmail.com'),
  new Player('20','Whitney', 'Claire').setType(type.CONTRACT).setRank(1).addInst(insts.trombone).setEmail('kenjfiddle@gmail.com'),
  new Player('21','Sean', 'Bessette').setType(type.CONTRACT).setRank(1).addInst(insts.bassTromb).setEmail('kenjfiddle@gmail.com'),
  new Player('22','Ken', 'Heinlein').setType(type.CONTRACT).setRank(1).addInst(insts.tuba).setEmail('kenjfiddle@gmail.com'),
  new Player('23','Brad', 'Amidon').setType(type.CONTRACT).setRank(1).addInst(insts.percussion).setEmail('kenjfiddle@gmail.com'),
  new Player('24','Matt', 'Larson').setType(type.CONTRACT).setRank(2).addInst(insts.percussion).setEmail('kenjfiddle@gmail.com'),
  new Player('25','Melody', 'Rapier').setType(type.CONTRACT).setRank(1).addInst(insts.harp).setEmail('kenjfiddle@gmail.com'),
  new Player('26','Ken', 'Johnston').setType(type.CONTRACT).setRank(1).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('27','Minju', 'Kim').setType(type.CONTRACT).setRank(2).addInst(insts.violin).setEmail('minjuk622@gmail'),

  new Player('28','Sandro', 'Leal-Santiesteban').setType(type.CONTRACT).setRank(2).addInst(insts.violin),
  new Player('29','Joshua', 'Huang').setType(type.CONTRACT).setRank(3).addInst(insts.violin),
  new Player('30','Melissa', 'Hernandez').setType(type.CONTRACT).setRank(3).addInst(insts.violin),
  new Player('31','Alexander', 'Hettinga').setType(type.CONTRACT).setRank(3).addInst(insts.violin),
  new Player('32','Stefanie', 'Schore').setType(type.CONTRACT).setRank(3).addInst(insts.violin),
  new Player('33','Yejee', 'Kim').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('34','Maura', 'Pelinsky').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('35','Janice', 'Carlson').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('36','Jonathan', 'Moser').setType(type.CONTRACT).setRank(1).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('37','Jennifer', 'Jansen').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('38','Tobias', 'Chisnall').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('39','Jiyeon', 'Yeo').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('40','Colleen', 'Vanderzyden').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('41','Karen', 'Ferren').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('42','Howard', 'Lyon').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('43','Emilie', 'Engel').setType(type.CONTRACT).setRank(3).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('44','Ji Young', 'Nam').setType(type.CONTRACT).setRank(1).addInst(insts.viola).setEmail('kenjfiddle@gmail.com'),

  new Player('45','Si', 'Yu').setType(type.CONTRACT).setRank(3).addInst(insts.viola).setEmail('kenjfiddle@gmail.com'),
  new Player('46','Benjamin', 'Schantz').setType(type.CONTRACT).setRank(3).addInst(insts.viola).setEmail('kenjfiddle@gmail.com'),
  new Player('47','Eri', 'Snowden-Rodriguez').setType(type.CONTRACT).setRank(1).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('48','Will', 'Teegarden').setType(type.CONTRACT).setRank(2).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('49','Nadine', 'Sherman').setType(type.CONTRACT).setRank(3).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('50','Jeff', 'Singler').setType(type.CONTRACT).setRank(3).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('51','Robert', 'Nicholson').setType(type.CONTRACT).setRank(3).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('52','Jean', 'Verdecchia').setType(type.CONTRACT).setRank(3).addInst(insts.cello).setEmail('kenjfiddle@gmail.com'),
  new Player('53','Kieran', 'Hanlon').setType(type.CONTRACT).setRank(1).addInst(insts.bass).setEmail('kenjfiddle@gmail.com'),
  new Player('54','Joseph', 'Hernandez').setType(type.CONTRACT).setRank(2).addInst(insts.bass).setEmail('kenjfiddle@gmail.com'),
  new Player('55','Thomas', 'Christopherson').setType(type.CONTRACT).setRank(3).addInst(insts.bass).setEmail('kenjfiddle@gmail.com'),
  new Player('56','James', 'Mohney').setType(type.CONTRACT).setRank(3).addInst(insts.bass).setEmail('kenjfiddle@gmail.com'),
  new Player('57','Maria', 'Park').setType(type.SUB).setRank(1).addInst(insts.violin).setEmail('kenjfiddle@gmail.com'),
  new Player('58','Mike', 'Chen').setType(type.SUB).setRank(1).addInst(insts.flute).setEmail('kenjfiddle@gmail.com'),
  new Player('59','Diana', 'Pepelea').setType(type.SUB).setRank(1).addInst(insts.flute).setEmail('kenjfiddle@gmail.com'),
  new Player('60','Sam', 'Petrey').setType(type.SUB).setRank(1).addInst(insts.flute).setEmail('kenjfiddle@gmail.com'),
  new Player('61','Maija', 'Anstine').setType(type.SUB).setRank(1).addInst(insts.viola).setEmail('kenjfiddle@gmail.com'),
  new Player('62','Chris', 'Blaha').setType(type.SUB).setRank(1).addInst(insts.tuba).setEmail('kenjfiddle@gmail.com'),
  new Player('63','Erik', 'Sundet').setType(type.SUB).setRank(1).addInst(insts.trumpet).setEmail('kenjfiddle@gmail.com'),
];

export default players;
