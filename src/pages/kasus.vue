<template>
  <nav>
    <div class="font-bold text-4xl py-3 ">DATA KASUS</div>
   
     
      <!-- Show Card Data -->
      <div class="w-auto flex flex-wrap pt-5 space-x-4 ">
        <div class=" pt-4" v-for="user in  tahanan" :key="user.id">
          <div class="p-5 border rounded w-[300px] shadow">
            <div class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">{{ user.nama }} </div>
            <div class="font-bold text-xl text-left  border-b">{{ user.kasus }} </div>
            <div class="text-left py-2 ">
              {{ user.deskripsi }}
            </div>
          </div>
        </div>
      </div>
      
    </nav>
    
  </template>
  
 

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tahanan: [],
    }
  },
  created() {
    this.tampilkanData();
  },
  methods: {

    async tampilkanData() {
      try {
        const response = await axios.get('http://localhost:5000/tahanan');
        this.tahanan = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

