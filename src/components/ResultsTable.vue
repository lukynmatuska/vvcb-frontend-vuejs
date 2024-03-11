<script lang="ts">
import type { SimpleResult } from '@/types/SimpleResult';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ResultsTableComponent',
    props: {
        categoryName: {
            type: String,
            default: 'Sněhové vločky'
        },
        results: {
            type: Array<SimpleResult>,
            default() {
                return [{
                    place: "1.",
                    team: "Pasohlávky",
                    district: "BO",
                    final_time: "16,95",
                    left_time: "16,95",
                    right_time: "16,83",
                    media: ""
                }]
            }
        }
    }
})

</script>

<script setup lang="ts">
</script>

<template>
    <div>
        <h2>{{ categoryName }}</h2>
        <table>
            <thead>
                <tr>
                    <th class="place">
                        &nbsp;
                    </th>
                    <th class="team">
                        Tým
                    </th>
                    <th>
                        LP
                    </th>
                    <th>
                        PP
                    </th>
                    <th>
                        V
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in results" :key="result.team">
                    <td class="place">
                        {{ result.place }}
                    </td>
                    <th class="team">
                        {{ result.team }}
                    </th>
                    <td>
                        {{ result.left_time }}
                    </td>
                    <td>
                        {{ result.right_time }}
                    </td>
                    <td class="final-time">
                        {{result.final_time }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
h2 {
    font-size: 1.5rem;
    font-weight: 600;
    padding: .75rem 1rem .15rem 1rem;
}

table {
    border-collapse: collapse;
}

th {
    font-weight: 600;
}

th, td {
    font-size: 1rem;
}

thead th {
    text-transform: uppercase;
    /* background-color: rgba(248,250,252,.15); */
    padding-top: 0.25rem;
    border-bottom: 1px solid rgba(248,250,252,.15);
}

td {
    text-align: center;
    padding: .25rem .5rem;
}

td.place {
    text-align: right;
}

th.team {
    text-align: left;
    padding: 0 1rem;
}

tbody tr:nth-child(even) {
    background-color: rgba(248,250,252,.05);
}
</style>