export default {

	// notesByCategoryes() {     
 //      return this.$store.getters.getNotesByCategoryes;
 //    },

    print(notesByCategoryes){
    	notesByCategoryes.forEach(function(oneItem){
        console.log(oneItem.date+"---"+oneItem.category+"---"+oneItem.summ);
      })
    	
    }



  }