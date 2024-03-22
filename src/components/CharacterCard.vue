
<template>
  <div class="flip-card slide-fade">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="character.image"
          alt="Avatar"
          class="image"
        >
        <div class="avatar-status-icon">
          <img :src="require(`@/assets/${statusIcon}`)">
        </div>
        <h2>{{character.name}}</h2>
        <div class="status">
          <img
            class="status-icon"
            src="@/assets/gender-icon.png"
          >
          {{character.gender}}
        </div>
        <div class="status">
          <img
            src="@/assets/specie-icon.png"
            class="status-icon"
          />
          {{character.species}}
        </div>
        <div class="status">
          <img
            src="@/assets/planet-icon.png"
            class="status-icon"
          />
          Earth
        </div>
      </div>
      <div class="flip-card-back">
        <h1>{{character.name}}</h1>
        <p><b>Status:</b> {{ character.status }}</p>
        <p><b>Gender:</b> {{ character.gender }}</p>
        <p><b>Specie:</b> {{ character.species }}</p>
        <p><b>Subspecie:</b> {{ character.type || '--' }}</p>
        <p><b>Episodes:</b> {{ character.episode.length }}</p>
        <p><b>Origin location:</b> {{ character.origin.name }}</p>
        <p><b>Last known location:</b> {{ character.location.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusIcon () {
      switch (this.character.status) {
        case 'Alive':
          return 'alive-icon.webp'
        case 'Dead':
          return 'dead-icon.png'
        default:
          return 'unknown-icon.png'
      }
    }
  }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 415px;
  perspective: 1000px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  /* transform: translateY(100%);
  animation: fadeInUp 0.5s ease forwards; */
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 30px;
  border: 1px solid var(--secondary);
}

.flip-card-back p {
  text-align: left;
  padding-left: 15px;
}

.image {
  width: 265px;
  height: 205px;
  border-radius: 10px;
  margin-top: 15px;
  object-fit: cover;
}

.flip-card-front {
  background-color: #272727;
  color: white;
}

.flip-card-back {
  background-color: #272727;
  color: white;
  transform: rotateY(180deg);
  padding-right: 5px;
}

.flip-card-back h1 {
  max-height: 85px;
  margin-bottom: 20px;
  margin-top: 15px;
  overflow: hidden;
}

.flip-card-back p {
  margin-bottom: 15px;
}

.flip-card-back b {
  font-size: 16px;
  font-weight: 500;
  color: rgb(158, 158, 158);
}

h2 {
  font-weight: 800;
  height: 55px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}

.status {
  text-align: left;
  padding-left: 15px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.status-icon {
  height: 25px;
  width: 25px;
  margin-right: 10px;
}

.avatar-status-icon {
  position: absolute;
  right: 5px;
  top: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.avatar-status-icon img {
  width: 40px;
}
</style>
