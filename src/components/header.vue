<template>
    <div class="w-full bg-gray-100">
        <div class="flex justify-between items-center h-[50px]">
            <div class="p-4 cursor-pointer hover:bg-gray-50" @click="clickHamburger">
                <i class="pi pi-bars"></i>
            </div>
            <div class="field col-12 md:col-4">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-search" />
                        <InputText id="inputtext-right" type="text" class="h-[40px]" v-model="valueIconRight" placeholder="Search..."/>
                        <label for="inputtext-right">Search...</label>
                    </span>
                </div>
            <div class="flex space-x-3 items-center justify-center px-3">
                <div class="text-md">Admin</div>
                <Avatar icon="pi pi-user" class="mr-2" style="background-color:#FFA500; color: #fff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        dataopenSidebar: Boolean,
        clickHamburger: Function
    },
    data() {
		return {
			items: [
				{
					label: 'Logout',
					icon: 'pi pi-power-off',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Change Password',
					icon: 'pi pi-lock-open',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
			]
		}
	},
    methods:{
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
    }
}
</script>

<style>

</style>