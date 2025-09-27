<template>
      <div>
        姓名：<input v-model="username" >{{ username }}<br>
        薪水： <input type="number" v-model="salary">{{ salary }}<br>
        按钮：<button v-on:click="submit">提交</button>
        
      </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

    let username = ref('roy');
    let salary = ref(15000);  
    function submit(){
      salary.value += 1000;
      console.log(salary.value);
    }
</script>

<style scoped>
  .userInfo{
    margin: 20px; 
    background-color: #139a25;
    width: 100%;
  }
  .userInfo span{
    margin-right: 10px;
    border: 1px solid #000;
    background-color: antiquewhite;
  }
</style>
