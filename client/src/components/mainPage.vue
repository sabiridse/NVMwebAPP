<template>
	<div class="container">
	  	<div class="row">
			<mainSideBar/>
			<mainTable/>
			<div class="col md-2">
		   	</div>
		</div>	
	</div>		
</template>
<script>
import mainSideBar from './mainSideBar.vue';
import mainTable from './mainTable.vue';
	export default {
  		name: 'mainPage',
  		components:{
  			mainSideBar,
  			mainTable
  		}
	};
</script>
<style>
	
</style>