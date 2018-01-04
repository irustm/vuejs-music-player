const _playlist = [
    { title: 'Blood And Iron', subtitle: 'Bathory' },
    { title: 'Heralder', subtitle: 'Falkenbach' },
    { title: 'The Naglfar Saga: Sailing Into Eternity', subtitle: 'Black Messiah' },
    { title: 'Oathbreaker', subtitle: 'Battlesoul' },
    { title: 'Victory Song', subtitle: 'Ensiferum' },
    { title: 'The Mistress Of Wisdom', subtitle: 'Ereb Altor' }
]

export default {
  getList (cb) {
    setTimeout(() => cb(_playlist), 100)
  }
}
