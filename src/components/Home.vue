<template>
  <div>
    <app-playlist></app-playlist>
  </div>
</template>

<script>
import Artist from './Artist'
import PlayList from './playlist/PlayList'

export default {
  components: {
    'app-artist': Artist,
    'app-playlist': PlayList
  },
  data: () => ({}),
  props: {
    source: String
  }
}
</script>