<template>
  <div class="home">
    <div class="content">
      <div id="logo">
        <div>
          <img class="primary-logo" src="@/assets/logo1.gif">
          <br>
          <img class="second-logo" src="@/assets/logo2.png">
        </div>
      </div>
      <div id="search-container">
        <input
          v-model="filter.name"
          @enter="getDataFromApi"
          placeholder="Digite o nome de um personagem"
          type="search"
          name="search"
          id="search-input"
        >
        <i @click="getDataFromApi" style="color:#696969" class="uil uil-search search-icon"></i>
      </div>
      <div class="filter-container">
        <select v-model="filter.status" name="status" class="filter-select">
          <option :value="undefined">Status</option>
          <option
            v-for="status in statusList"
            :value="status.value"
            :key="status.value"
          >
          {{status.name}}
          </option>
        </select>

        <select v-model="filter.gender" name="gender" class="filter-select">
          <option :value="undefined">Gender</option>
          <option
            v-for="gender in genderList"
            :value="gender.value"
            :key="gender.value"
          >
          {{gender.name}}
          </option>
        </select>
        <button @click="filter = {page: 1}" class="clear-filter-btn">Limpar tudo</button>
      </div>
      <div class="card-container" v-if="characterList.length">
        <CharacterCard
          v-for="character in characterList"
          :key="character.id"
          :character="character"
        />
      </div>
      <div v-else class="notfound-container">
        <img class="notfound-img" src="@/assets/rick-icon.gif">
        <img class="notfound-text" src="@/assets/404-text.png">
      </div>
      <div class="total">
        Total Characters: {{info.count}}
      </div>
      <DefaultPagination :pages="info.pages" :currentPage="filter.page" @change="filter.page = $event" />
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import DefaultPagination from '@/components/DefaultPagination.vue'
import characterApi from '@/api/character.js'

export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  components: {
    CharacterCard,
    DefaultPagination
  },
  data () {
    return {
      statusList: [
        {
          value: 'alive',
          name: 'Alive'
        },
        {
          value: 'dead',
          name: 'Dead'
        },
        {
          value: 'unknown',
          name: 'Unknown'
        }
      ],
      genderList: [
        {
          value: 'female',
          name: 'Female'
        },
        {
          value: 'male',
          name: 'Male'
        },
        {
          value: 'genderless',
          name: 'Genderless'
        },
        {
          value: 'unknown',
          name: 'Unknown'
        }
      ],
      filter: {
        page: 1
      },
      info: {},
      characterList: []
    }
  },
  watch: {
    filter: {
      handler (val) {
        this.getDataFromApi()
        console.log(val)
      },
      deep: true
    }
  },
  methods: {
    getDataFromApi () {
      characterApi.list(this.filter).then(result => {
        console.log(result.data)
        this.characterList = result.data.results
        this.info = result.data.info
      }).catch(error => {
        this.characterList = []
        this.info = {}
        console.log(error)
      })
    }
  },
  beforeMount () {
    this.getDataFromApi()
  }
}
</script>

<style scoped>
.content {
  max-width: 1555px;
  margin: auto;
}

#logo {
  display: flex;
  justify-content: center;
  text-align: center;
}

#search-container {
  display: flex;
  justify-content: center;
}

#search-input {
  height: 50px;
  width: 400px;
  margin-top: 50px;
  border-radius: 50px;
  font-size: 16px;
  padding: 8px;
  text-align: left;
  padding-left: 20px;
}

#search-input::-ms-clear {
  display: none;
}
#search-input::-webkit-search-cancel-button {
  display: none;
}

#search-input:focus {
  border-color: var(--secondary);
  outline: none;
}

.filter-container {
  margin-top: 50px;
  display: flex;
}

.card-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  min-height: 520px;
  flex-wrap: wrap;
}

.filter-select {
  border-radius: 30px;
  width: 120px;
  height: 30px;
  padding-left: 15px;
  margin-right: 20px;
}
.filter-select:focus {
  outline: none;
}
.filter-select option {
  font-size: 17px;
  padding-left: 10px;
}

.primary-logo {
  width: 90px;
  transform: translateY(20px);
}

.second-logo {
  width: 300px;
  transform: translateX(16px);
}

.clear-filter-btn {
  background: none;
  border: none;
  color: var(--secondary);
  cursor: pointer;
}
.clear-filter-btn:hover {
  font-weight: 600;
}

.search-icon {
  transform: translate(-35px, 60px);
  cursor: pointer;
  font-size: 22px;
}

.notfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

.notfound-img {
  width: 100px;
  margin-bottom: 20px;
}

.total {
  text-align: left;
  color: rgb(158, 158, 158);;
}
</style>
