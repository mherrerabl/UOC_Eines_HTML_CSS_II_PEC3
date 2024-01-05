<template>
    <div class="bracket flex">
        <template v-for="(round, index) in rounds" :key="index">
            <div class="round flex flex-col flex-grow" :class="['round-' + index]">
                <div v-if="round === 32" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_32" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] after:absolute after:right-[-12px] after:block after:h-[50%] after:content-[''] [&:nth-child(odd)]:after:right-[-12px] [&:nth-child(odd)]:after:w-[12px] [&:nth-child(odd)]:after:top-[50%] [&:nth-child(odd)]:after:border-t-2 [&:nth-child(odd)]:after:border-t-third [&:nth-child(odd)]:after:border-r-2 [&:nth-child(odd)]:after:border-r-third [&:nth-child(even)]:after:w-[12px] [&:nth-child(even)]:after:bottom-[50%] [&:nth-child(even)]:after:border-r-2 [&:nth-child(even)]:after:border-r-third [&:nth-child(even)]:after:border-b-2 [&:nth-child(even)]:after:border-b-third">
                            <div class="w-full h-[30px] pl-[5px] border-2 border-primary">{{player.id}}. {{player.name}}</div>
                        </div>
                    </template>
                </div>

                <div v-if="round === 16" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_16" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] before:absolute before:top-[50%] before:left-[-10px] before:min-h-[30px] before:mt-[-15px] before:content-[''] before:border-third after:absolute after:right-[-12px] after:block after:h-[50%] after:content-[''] [&:nth-child(odd)]:after:right-[-12px] [&:nth-child(odd)]:after:w-[12px]  [&:nth-child(odd)]:after:top-[50%] [&:nth-child(odd)]:after:border-t-2  [&:nth-child(odd)]:after:border-t-third [&:nth-child(odd)]:after:border-r-2 [&:nth-child(odd)]:after:border-r-third [&:nth-child(even)]:after:w-[12px] [&:nth-child(even)]:after:bottom-[50%] [&:nth-child(even)]:after:border-r-2 [&:nth-child(even)]:after:border-r-third [&:nth-child(even)]:after:border-b-2 [&:nth-child(even)]:after:border-b-third">
                            <div class="text-center w-full h-[30px] border-2 border-primary before:absolute before:top-[50%] before:left-[-10px] before:w-[12px] before:content-[''] before:border-[1px] before:border-third">{{player.name}}</div>
                        </div>
                    </template>
                </div>

                <div v-if="round === 8" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_8" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] before:absolute before:top-[50%] before:left-[-10px] before:min-h-[30px] before:mt-[-15px] before:content-[''] before:border-third after:absolute after:right-[-12px] after:block after:h-[50%] after:content-[''] [&:nth-child(odd)]:after:right-[-12px] [&:nth-child(odd)]:after:w-[12px]  [&:nth-child(odd)]:after:top-[50%] [&:nth-child(odd)]:after:border-t-2  [&:nth-child(odd)]:after:border-t-third [&:nth-child(odd)]:after:border-r-2 [&:nth-child(odd)]:after:border-r-third [&:nth-child(even)]:after:w-[12px] [&:nth-child(even)]:after:bottom-[50%] [&:nth-child(even)]:after:border-r-2 [&:nth-child(even)]:after:border-r-third [&:nth-child(even)]:after:border-b-2 [&:nth-child(even)]:after:border-b-third">
                            <div class="text-center w-full h-[30px] border-2 border-primary before:absolute before:top-[50%] before:left-[-10px] before:w-[12px] before:content-[''] before:border-[1px] before:border-third">{{player.name}}</div>
                        </div>
                    </template>
                </div>

                <div v-if="round === 4" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_4" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] before:absolute before:top-[50%] before:left-[-10px] before:min-h-[30px] before:mt-[-15px] before:content-[''] before:border-third after:absolute after:right-[-12px] after:block after:h-[50%] after:content-[''] [&:nth-child(odd)]:after:right-[-12px] [&:nth-child(odd)]:after:w-[12px]  [&:nth-child(odd)]:after:top-[50%] [&:nth-child(odd)]:after:border-t-2  [&:nth-child(odd)]:after:border-t-third [&:nth-child(odd)]:after:border-r-2 [&:nth-child(odd)]:after:border-r-third [&:nth-child(even)]:after:w-[12px] [&:nth-child(even)]:after:bottom-[50%] [&:nth-child(even)]:after:border-r-2 [&:nth-child(even)]:after:border-r-third [&:nth-child(even)]:after:border-b-2 [&:nth-child(even)]:after:border-b-third">
                            <div class="text-center w-full h-[30px] border-2 border-primary before:absolute before:top-[50%] before:left-[-10px] before:w-[12px] before:content-[''] before:border-[1px] before:border-third">{{player.name}}</div>
                        </div>
                    </template>
                </div>

                <div v-if="round === 2" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_2" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] before:absolute before:top-[50%] before:left-[-10px] before:min-h-[30px] before:mt-[-15px] before:content-[''] before:border-third after:absolute after:right-[-12px] after:block after:h-[50%] after:content-[''] [&:nth-child(odd)]:after:right-[-12px] [&:nth-child(odd)]:after:w-[12px]  [&:nth-child(odd)]:after:top-[50%] [&:nth-child(odd)]:after:border-t-2  [&:nth-child(odd)]:after:border-t-third [&:nth-child(odd)]:after:border-r-2 [&:nth-child(odd)]:after:border-r-third [&:nth-child(even)]:after:w-[12px] [&:nth-child(even)]:after:bottom-[50%] [&:nth-child(even)]:after:border-r-2 [&:nth-child(even)]:after:border-r-third [&:nth-child(even)]:after:border-b-2 [&:nth-child(even)]:after:border-b-third">
                            <div class="text-center w-full h-[30px] border-2 border-primary before:absolute before:top-[50%] before:left-[-10px] before:w-[12px] before:content-[''] before:border-[1px] before:border-third">{{player.name}}</div>
                        </div>
                    </template>
                </div>

                <div v-if="round === 1" class="flex flex-col flex-grow justify-center">
                    <template  v-for="(player, matchIndex) in players_1" :key="matchIndex">
                        <div class="relative flex flex-col flex-grow justify-center py-[6px] mx-[10px] before:absolute before:top-[50%] before:left-[-10px] before:min-h-[30px] before:mt-[-15px] before:content-[''] before:border-third">
                            <div class="text-center w-full h-[30px] border-2 border-primary before:absolute before:top-[50%] before:left-[-10px] before:w-[12px] before:content-[''] before:border-[1px] before:border-third">{{player.name}}</div>
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { computed } from 'vue';
import * as playersJson from './../../assets/json/players.json';

export default {
    setup() {
        const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1];
        const players = 32;
        const players_32 = playersJson['32'];
        const players_16 = playersJson['16'];
        const players_8 = playersJson['8'];
        const players_4 = playersJson['4'];
        const players_2 = playersJson['2'];
        const players_1 = playersJson['1'];

        let rounds = computed(() => {
            return defaultRounds.filter(rounds => rounds <= players);
        });

        return { rounds, players_32, players_16, players_8, players_4, players_2, players_1 }
    }
  }
</script>