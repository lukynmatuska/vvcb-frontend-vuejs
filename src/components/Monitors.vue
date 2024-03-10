<script lang="ts">
import { defineComponent } from 'vue';
import ResultsTable from './ResultsTable.vue';
export default defineComponent({
    name: 'MonitorsComponent'
})
</script>

<script setup lang="ts">
import { ref } from 'vue';
const loadingResults = ref(0);
const errorLoadingResults = ref(0);

const ONE_SECOND: number = 1000;
const ONE_MINUTE: number = 60;
const timer = ref(ONE_MINUTE);
setInterval(() => {
      timer.value--; // decrease timer
      if (
        timer.value === 0 || // after one minute
        (errorLoadingResults.value > 0 && timer.value === (ONE_MINUTE - 10)) // after ten seconds if loading failed
      ) {
        // updateResults()
        timer.value = ONE_MINUTE; // refresh timer
      }
    }, ONE_SECOND); // run this code every second
</script>

<template>

<!-- Loading dialog -->
<div class="loading" v-if="loadingResults > 0">
    <i class="fa-solid fa-spinner fa-spin"></i>
    <h1>Načítám výsledky</h1>
</div>

<!-- Loading dialog error -->
<div class="loading error" v-if="errorLoadingResults > 0">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <h1>Chyba při načítání výsledků</h1>
</div>

<!-- Timer -->
<div class="timer">
    {{ timer }}
</div>

<div class="flex flex-wrap items-center justify-between" style="align-items: stretch;">
    <div class="w-full flex-1 mx-auto p-2">
        <!-- <app-card-simple-results-table-monitors [categoryName]="'Muži'" [results]="simpleResultsResponse.muzi">
        </app-card-simple-results-table-monitors> -->
        <ResultsTable category-name="Muži" />
    </div>
    <div class="w-full flex-1 mx-auto p-2">
        <!-- <app-card-simple-results-table-monitors [categoryName]="'Ženy'" [results]="simpleResultsResponse.zeny">
        </app-card-simple-results-table-monitors> -->
        <ResultsTable category-name="Ženy" />
    </div>
    <div class="w-full flex-1 mx-auto p-2">
        <!-- <app-card-simple-results-table-monitors [categoryName]="'Dorostenci'" [results]="simpleResultsResponse.dorostenci">
        </app-card-simple-results-table-monitors> -->
        <ResultsTable category-name="Dorostenci" />
    </div>
    <div class="w-full flex-1 mx-auto p-2">
        <!-- <app-card-simple-results-table-monitors [categoryName]="'Veteráni'" [results]="simpleResultsResponse.veterani">
        </app-card-simple-results-table-monitors> -->
        <ResultsTable category-name="Veteráni" />
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