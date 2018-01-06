const _playlist = [
  { title: 'Blood And Iron', subtitle: 'Bathory', time: '04:35', avatar: 'http://avatars.yandex.net/get-music-content/42108/652d80b7.a.278291-1/400x400' },
  { title: 'Heralder', subtitle: 'Falkenbach', time: '03:15', avatar: '/static/player_default_cover.png' },
  { title: 'The Naglfar Saga: Sailing Into Eternity', subtitle: 'Black Messiah', time: '04:12', avatar: 'http://avatars.yandex.net/get-music-content/34131/3ec738e9.a.234071-1/400x400' },
  { title: 'Oathbreaker', subtitle: 'Battlesoul', time: '02:12', avatar: '/static/player_default_cover.png' },
  { title: 'Victory Song', subtitle: 'Ensiferum', time: '03:12', avatar: 'http://avatars.yandex.net/get-music-content/33216/09a70ba7.a.3379477-1/400x400' },
  { title: 'The Mistress Of Wisdom', subtitle: 'Ereb Altor', time: '03:45', avatar: 'http://avatars.yandex.net/get-music-content/34131/ad6c4644.a.647543-1/400x400' }
]

export default {
  getList (cb) {
    setTimeout(() => cb(_playlist), 100)
  }
}
