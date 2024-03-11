<script lang="ts">
import { defineComponent, ref } from 'vue';
import { API } from '@/common/api';

export default defineComponent({
  name: 'MonitorsComponent',
  data() {
    return {
      loading: false,
      results: { muzi: [], zeny: [], dorostenci: [], veterani: []},
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = null
      this.results = { muzi: [], zeny: [], dorostenci: [], veterani: []}
      this.loading = true
      API.results()
        .then(async (response) => {
          // console.log(response)
          this.results = await response.json()
          this.loading = false
        })
        .catch((err) => {
          console.error(err);
          this.error = err.toString()
          this.loading = false
        })
    },
  },
})
</script>

<script setup lang="ts">
import ResultsTable from './ResultsTable.vue';
const ONE_SECOND: number = 1000;
const TEN_SECONDS: number = 10 * ONE_SECOND;
const ONE_MINUTE: number = 60;

const timer = ref(ONE_MINUTE);

setInterval(
  () => {
    timer.value--; // decrease timer
    if (
      timer.value === 0 || // after one minute
      (false /* error */ && timer.value === (ONE_MINUTE - TEN_SECONDS)) // after ten seconds if loading failed
    ) {
      // fetchData();
      timer.value = ONE_MINUTE; // refresh timer
    }
  },
  ONE_SECOND
); // run this code every second
</script>

<template>

<!-- Loading dialog -->
<div class="loading" v-if="loading">
  <i class="fa-solid fa-spinner fa-spin"></i>
  <h1>Načítám výsledky</h1>
</div>

<!-- Loading dialog error -->
<div class="loading error" v-if="error">
  <i class="fa-solid fa-triangle-exclamation"></i>
  <h1>Chyba při načítání výsledků</h1>
</div>

<!-- Timer -->
<div class="timer">
  {{ timer }}
</div>

<div class="flex flex-wrap items-center justify-between" style="align-items: stretch;">
  <div class="w-full flex-1 mx-auto p-2">
    <ResultsTable
      category-name="Muži"
      :results="results.muzi"
    />
  </div>
  <div class="w-full flex-1 mx-auto p-2">
    <ResultsTable
      category-name="Ženy"
      :results="results.zeny"
    />
  </div>
  <div class="w-full flex-1 mx-auto p-2">
    <ResultsTable
      category-name="Dorostenci"
      :results="results.dorostenci"
    />
  </div>
  <div class="w-full flex-1 mx-auto p-2">
    <ResultsTable
      category-name="Veteráni"
      :results="results.veterani"
    />
  </div>
</div>

</template>


<style>
/** Loading dialog */
div.loading {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 90vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.55);
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}

div.loading i {
  font-size: 7.5rem;
  margin: auto auto 0 auto;
}

div.loading h1 {
  font-size: 3.5rem;
  margin: 0 auto auto auto;
}

div.loading.error {
  background-color: rgba(255, 0, 0, 0.45);
  color: black;
}

/** Timer */
.timer {
  position: fixed;
  left: 10px;
  bottom: 5px;
}

</style>