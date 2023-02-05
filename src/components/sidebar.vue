<template>
    <div class="h-screen bg-orange-800" id="side-bar" :class="dataopenSidebar==true?'side-bar-visible':'side-bar-close'">
        <div class="bg-orange-700 h-[50px] flex justify-center items-center py-2">
            <div class="text-xl font-bold text-center flex items-center justify-center text-white py-3" v-show="dataopenSidebar">TELKOM PRISON </div>
            <img src="../assets/criminal-in-jail-silhouette.png" v-show="!dataopenSidebar" class="p-1 w-8 h-8" alt="Avatar">
        </div>
        <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-orange-500">
            <div class="menu-man text-left px-2 whitespace-nowrap">
                <div class="profile flex justify-center items-center text-center p-5">
                    <div class="text-center text-white" v-show="dataopenSidebar">
                         <img src="../assets/criminal-in-jail-silhouette.png" class="p-1 w-24 h-24 " alt="Avatar">
                         <h5 class="text-xl font-medium leading-tight mb-2 py-2 text-black">Welcome To Hell</h5>
                    </div>
                </div>
                <div class="py-3 rounded-sm cursor-pointer text-black hover:text-white">
                    <router-link to="/" class="px-2 flex space-x-2"><span class="pi pi-users" v-tooltip.right="'Data narapidana'"></span><span v-show="dataopenSidebar">Data Narapidana</span></router-link>
                </div>
                <div class="py-3 rounded-sm cursor-pointer text-black hover:text-white">
                    <router-link to="/kasus" class="px-2 flex space-x-2"><span class="pi pi-briefcase" v-tooltip.right="'Kasus'"></span><span v-show="dataopenSidebar">Kasus</span></router-link>
                </div>
                <div class="py-3 rounded-sm cursor-pointer text-black hover:text-white">
                    <router-link to="/data_polisi" class="px-2 flex space-x-2"><span class="pi pi-user" v-tooltip.right="'Data Polisi'"></span><span v-show="dataopenSidebar">Data Polisi</span></router-link>
                </div>
                <div class="py-3 rounded-sm cursor-pointer text-black hover:text-white">
                    <router-link to="/profil" class="px-2 flex space-x-2"><span class="pi pi-user" v-tooltip.right="'Data Polisi'"></span><span v-show="dataopenSidebar">Profil Anggota Kelompok</span></router-link>
                </div>
            </div>
            <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
                <div class="py-3 rounded-sm cursor-pointer text-black hover:text-white">
                        <a href="https://ittelkom-sby.ac.id/" target="_blank" class="px-2 flex space-x-2"><span class="pi pi-question" v-tooltip.right="'About Us'"></span><span v-show="dataopenSidebar">Kampus Kita Tercinta</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        dataopenSidebar: Boolean
    }
}
</script>

<style>
.p-tooltip-text{
    font-size: 10px !important;
}

#side-bar{
    overflow: hidden;
    transition: 300ms;
}

.side-bar-visible{
    width: 250px !important;
}

.side-bar-close{
    width: 50px !important;
}
</style>