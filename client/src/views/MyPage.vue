<template>
  <div class="my">
  	<form>
	  <div class="form-group">
	    <input type="text" class="form-control mb-1" id="inputId" placeholder="Введи ID записи" v-model="id">
	  </div>	  
	</form>
	<button class="btn btn-success ml-2" @click="select">select</button>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
	import {api} from '../Api';
	export default{
		data(){
			return {
				msg: '',
    			post: [],
    			params:{
    				id:666,
    				first:'привет',
    				second:'Денис'//kkk
    			},
    			id:''
			}
		},

		methods:{
				async select(){
					await api.get('select')
					.then(response => {
						this.post = response.data;
						this.msg = this.post.cat;
				})
			}
		}
	}
</script>

<style scoped=>
	
</style>