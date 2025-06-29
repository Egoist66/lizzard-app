import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const useScoreStore = defineStore("score", () => {
  const baseLevelScore = shallowRef<number>(25);
  const levels = shallowRef<number[]>(
    new Array(15).fill(0).map((_ , i) => baseLevelScore.value * Math.pow(2, i))
  );


  const levelScores = shallowRef<number[]>(levels.value.map((_, level) => {
    let sum = 0;

    for(let [index, value] of levels.value.entries()){
      if(index >= level){
        return sum + value;
      }
      else {
        sum += value;
      } 
    }

    return sum;
  }));

  return {
    levels,
    levelScores,
    baseLevelScore,
  };
});


