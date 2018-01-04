<template>
   <v-card tile>
        <v-progress-linear height="3" :value="currentSeekPercent" class="my-0"></v-progress-linear>
        <v-list>
          <v-list-tile>
             <canvas id="soundView" width="48" height="48"></canvas>
            <v-list-tile-content v-if="allPlayList[currentIndex]">
              <v-list-tile-title>{{allPlayList[currentIndex].title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{allPlayList[currentIndex].subtitle}} {{currentSeek | minutes}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn icon @click="prevSound()">
                <v-icon>fast_rewind</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action :class="{
              'mx-5': $vuetify.breakpoint.mdAndUp
            }">
              <v-btn style="margin-top:-2px" v-show="!isPlay" icon @click="play()">
                <v-icon>play_arrow</v-icon>
              </v-btn>
              <v-btn style="margin-top:-2px" v-show="isPlay" icon @click="pause()">
                <v-icon>pause</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action :class="{
              'mr-3': $vuetify.breakpoint.mdAndUp
            }">
              <v-btn icon @click="nextSound()">
                <v-icon>fast_forward</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
       
      </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { Howl } from "howler";
export default {
  name: "Player",
  data() {
    return {
      currentSeekPercent: 0,
      currentSeek: 0
    };
  },
  computed: {
    ...mapGetters(["allPlayList", "currentIndex", "isPlay"])
  },
  mounted: function() {
    setInterval(() => {
      var seek = sound.seek() || 0;
      this.currentSeek = seek;
      this.currentSeekPercent = seek / sound._duration * 100 || 0;
    }, 200);
    soundVisualization();
  },
  watch: {
    isPlay(val, oldVal) {
      if (val) {
        sound.play();
      } else {
        sound.pause();
      }
    }
  },
  filters: {
    minutes: function(value) {
      if (!value || value == 0 || value instanceof Howl) return "";
      var minutes = parseInt(value / 60 + "");
      var sec = parseInt(value % 60 + "");
      minutes = minutes < 10 ? "0" + minutes : minutes;
      sec = sec < 10 ? "0" + sec : sec;
      value = minutes + ":" + sec;
      return value;
    }
  },
  methods: {
    play: function() {
      this.playSound(this.currentIndex);
    },
    pause: function() {
      this.pauseSound();
    },
    ...mapActions([
      "getAllPlayList",
      "playSound",
      "pauseSound",
      "nextSound",
      "prevSound"
    ])
  }
};
// TODO change sounds
var sound = new Howl({
  src: [
    "https://freemusicarchive.org/file/music/ccCommunity/Dee_Yan-Key/post_bellum/Dee_Yan-Key_-_06_-_Post_Bellum.mp3"
  ]
});
var soundVisualization = function() {
  var analyser = Howler.ctx.createAnalyser();
  var WIDTH = 48;
  var HEIGHT = 48;
  Howler.masterGain.connect(analyser);
  analyser.connect(Howler.ctx.destination);

  var canvas = document.getElementById("soundView");
  var canvasCtx = canvas.getContext("2d");

  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  function draw() {
    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    canvasCtx.fillStyle = "rgb(255, 255, 255)";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(239, 83, 80)";

    canvasCtx.beginPath();
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;
    for (var i = 0; i < bufferLength; i++) {
      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
  draw();
};
</script>
<style>
#soundView {
  margin-left: -15px;
  padding-right: 5px;
}
</style>

