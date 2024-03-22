<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
  <audio ref="audio" :volume="0.05" autoplay loop>
    <source src='@/assets/musictheme.mp3' type='audio/mpeg'>
    Your browser does not support the audio element.
  </audio>
  <i @click="muted = !muted" class="icon-audio" :class="muted ? 'uil uil-volume-mute' : 'uil uil-volume'"></i>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      muted: false
    }
  },
  watch: {
    muted (val) {
      this.$refs.audio.volume = val ? 0 : 0.05
    }
  }
}
</script>

<style>
* {
  --secondary: #BFDE42;
  --black: #222;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  min-height: 100vh;
  background-color: black;
  background-image: url('assets/background.png');
  overflow: hidden;
}

.divider {
  width: 95%;
  border-top: 1px solid #dddddd;
  height: 1px;
  margin: auto;
}

.icon-audio {
  position: fixed;
  right: 20px;
  top: 70px;
  font-size: 30px;
  cursor: pointer;
}
</style>
