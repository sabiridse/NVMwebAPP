<template>
	<b-container class="container">
		<b-row>
			<b-col>
				<mainSideBar/>
			</b-col>
			<b-col>
				<vueTableTest/>
			</b-col>
			<b-col/>
		</b-row>
	</b-container>			
</template>
<script>
import mainSideBar from './mainSideBar.vue';
//import elTable from './elTable.vue';
//import mainTable from './mainTable.vue';
import vueTableTest from './vueTableTest.vue';
	export default {
  		name: 'mainPage',
  		components:{
  			mainSideBar,
  			vueTableTest
  		}
	};
</script>
<style>
	
</style>