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
                    <th>
                        &nbsp;
                    </th>
                    <th>
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
                    <td>
                        {{ result.place }}
                    </td>
                    <th>
                        {{ result.team }}
                    </th>
                    <td>
                        {{ result.left_time }}
                    </td>
                    <td>
                        {{ result.right_time }}
                    </td>
                    <td>
                        {{result.final_time }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

