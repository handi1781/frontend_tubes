<script>

import axios from 'axios';

export default {
  data() {
    return {
      nama: '',
      kasus: '',
      deskripsi: '',
      jenis_kelamin: '',
      umur: '',
      tahanan: [],
      ubahdata: null,
      tambahdata: null,
    
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
    },
    async buatData(event) {
      try {

        event.preventDefault();

        const response = await axios.post('http://localhost:5000/tahanan', {
          nama: this.nama,
          kasus: this.kasus,
          deskripsi:this.deskripsi,
          jenis_kelamin: this.jenis_kelamin,
          umur: this.umur,
        });
        this.tambahdata= response.data;
        this.nama = '';
        this.kasus = '';
        this.deskripsi = '';
        this.jenis_kelamin = '';
        this.umur= '';
        window.location.reload()
      } catch (error) {
        console.error(error);
      }
    },
    async updateData(id) {
      try {
        const response = await axios.patch(`http://localhost:5000/tahanan/${id}`, {
          nama: this.ubahdata.nama,
          kasus: this.ubahdata.kasus,
          deskripsi:this.ubahdata.deskripsi,
          jenis_kelamin: this.ubahdata.jenis_kelamin,
          umur: this.ubahdata.umur
        });
        this.ubahdata = response.data;
      } catch (error) {
        console.error(error);
      }
      this.ubahdata = null;
    },
    async hapusData(id) {
      try {
        await axios.delete(`http://localhost:5000/tahanan/${id}`);
        this.tampilkanData();
      } catch (error) {
        console.error(error);
      }
        
    },
    ubah(user) {
      this.ubahdata = user;
    },

    tambah(tahanan) {
      this.tambahdata = tahanan;
    }
  }
}
</script>
<style>


</style>

<template>
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="font-bold text-4xl py-3">DATA NARAPIDANA</div>
  
    <button class="px-4 py-2 border rounded bg-orange-500 text-white hover:bg-orange-400" @click="tambah(tahanan)">
            <i class="pi pi-user-plus px-1"></i>
            <span class="px-2">Add</span>
        </button>
   
  
 
  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="tracking-wide text-gray-500 md:text-lg dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nama
                </th>
                <th scope="col" class="px-6 py-3">
                    Kasus
                </th>
              
                <th scope="col" class="px-6 py-3">
                    Jenis Kelamin
                </th>
                <th scope="col" class="px-6 py-3">
                    Umur
                </th>
                <th scope="col" class="px-6 py-3">
                    Di Tahan Pada
                </th>
                <th scope="col" class="px-6 py-3">
                    Metode
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in tahanan" :key="user.id"
            class="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ user.nama }}
                </th>
                <td class="px-6 py-4">
                    {{ user.kasus }}
                </td>
                <td class="px-6 py-4">
                    {{ user.jenis_kelamin }}
                </td>
                <td class="px-6 py-4">
                    {{ user.umur}}
                </td>
                <td class="px-6 py-4">
                    {{ user.createdAt }}
                
                </td>
                <td class="px-6 py-4">
                  <div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
  @click="ubah(user)">
    Ubah Data
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
  @click="hapusData(user.id)">
    Hapus
  </button>
</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>






<div v-if="tambahdata"
class="flex w-full h-full justify-center item-center" >
        <!-- Background -->
        <div class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0">
        </div>
        <!-- Form -->
        <div class="   flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]">
          <div class=" md:w-auto  relative flex flex-col justify-center items-center bg-white  p-8">
            <div class="my-5">
              <h1 role="main" class="text-xl font-semibold text-center text-gray-800">Tambah Narapidana</h1>
            </div>
            <div class="mt-2 flex flex-col space-y-2">
                <InputText id="nama" type="text" v-model="nama" placeholder="Nama"/>
                <InputText id="nama" type="text" v-model="kasus" placeholder="Kasus"/>
                <InputText id="nama" type="text" v-model="deskripsi" placeholder="Detail Kausu"/>
                <InputText id="nama" type="text" v-model="jenis_kelamin" placeholder="Jenis Kelamin"/>
                <InputText id="nama" type="text" v-model="umur" placeholder="Umur"/>
            </div>
            <button class="mt-2 px-4 py-2 border rounded bg-orange-500 text-white hover:bg-gray-400" @click.prevent="buatData" ><span class="pi pi-save"></span></button>
           
          </div>
        </div>
      </div>

<div v-if="ubahdata"
    class="flex w-full h-full justify-center item-center" >
        <!-- Background -->
        <div class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0">
        </div>
        <!-- Form -->
        <div class="   flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]">
          <div class=" md:w-auto  relative flex flex-col justify-center items-center bg-white  p-8">
            <div class="my-5">
              <h1 role="main" class="text-xl font-semibold text-center text-gray-800">Ubah Narapidana</h1>
            </div>
            <div class="mt-2 flex flex-col space-y-2">
                <InputText id="nama" type="text" v-model="ubahdata.nama" placeholder="Nama"/>
                <InputText id="nama" type="text" v-model="ubahdata.kasus" placeholder="Kasus"/>
                <InputText id="nama" type="text" v-model="ubahdata.deskripsi" placeholder="Detail Kasus"/>
                <InputText id="nama" type="text" v-model="ubahdata.jenis_kelamin" placeholder="Jenis Kelamin"/>
                <InputText id="nama" type="text" v-model="ubahdata.umur" placeholder="Umur"/>
            </div>
            <button class="mt-2 px-4 py-2 border rounded bg-orange-500 text-white hover:bg-gray-400" @click="updateData(ubahdata.id)"><span class="pi pi-save"></span></button>
          </div>
        </div>
      </div>
      
</nav>
</template>

