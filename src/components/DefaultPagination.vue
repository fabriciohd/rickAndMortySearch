<template>
  <div id="pagination-container">
    <template v-for="page in pages">
      <div
        :key="page"
        class="page"
        v-if="Math.abs(page - currentPage) < 3 || page == pages - 1 || page == 1"
        :class="{
          current: currentPage === page,
          last: (page == pages - 1 && Math.abs(page - currentPage) > 3),
          first:(page == 1 && Math.abs(page - currentPage) > 3),
        }"
        @click="$emit('change', page)"
      >{{ page }}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
#pagination-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.page {
  width: 50px;
  height: 30px;
  background-color: white;
  color: #151515;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 5px;
  cursor: pointer;
  text-align: center;
  transition: all .1s ease-in;
  font-weight: 500;
}
.page.first::after {
  content:'...'
}

.page.last::before {
  content:'...'
}

.page.current {
  background-color: var(--secondary);
}

.page:hover {
  transform: translate(3px, -3px)
}
</style>
