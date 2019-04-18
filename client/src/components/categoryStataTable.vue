<template>
  <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
  >
      <template slot="items" slot-scope="props">
	        <td class="text-xm-center">{{ props.item.category }}</td>
	        <td class="text-xm-center">{{ props.item.sum1 }}</td>
	        <td class="text-xm-center">{{ props.item.sum2 }}</td>
	        <td class="text-xm-center">{{ props.item.sum3 }}</td>
	        <td class="text-xm-center">{{ props.item.sum4 }}</td>
	        <td class="text-xm-center">{{ props.item.sum5 }}</td>
	        <td class="text-xm-center">{{ props.item.sum6 }}</td>
	        <td class="text-xm-center">{{ props.item.sum7 }}</td>
	        <td class="text-xm-center">{{ props.item.sum8 }}</td>
	        <td class="text-xm-center">{{ props.item.sum9 }}</td>
	        <td class="text-xm-center">{{ props.item.sum10 }}</td>
	        <td class="text-xm-center">{{ props.item.sum11 }}</td>
	        <td class="text-xm-center">{{ props.item.sum12 }}</td>			       
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <expandTable/>
        </v-card>
      </template>
  </v-data-table>
</template>
<script>
import april from "../assets/april.json"
export default {
  data() {
    return {
      headers: [
        {
          text: "Категория",
          value: "category",
          sortable: true
        },
        {
          text: "Январь",
          value: "sum1",
          sortable: true
        },
        {
          text: "Февраль",
          value: "sum2",
          sortable: true
        },
        {
          text: "Март",
          value: "sum3",
          sortable: true
        },
        {
          text: "Апрель",
          value: "sum4",
          sortable: true
        },
        {
          text: "Май",
          value: "sum5",
          sortable: true
        },
        {
          text: "Июнь",
          value: "sum6",
          sortable: true
        },
        {
          text: "Июль",
          value: "sum7",
          sortable: true
        },
        {
          text: "Август",
          value: "sum8",
          sortable: true
        },
        {
          text: "Сентябрь",
          value: "sum9",
          sortable: true
        },
        {
          text: "Октябрь",
          value: "sum10",
          sortable: true
        },
        {
          text: "Ноябрь",
          value: "sum11",
          sortable: true
        },
        {
          text: "Декабрь",
          value: "sum12",
          sortable: true
        }
        
      ],
    };
  },
  components: {
    
  },
  created() {
    

  },
  methods: {
    
  },
  	computed: {
    
		items(){

			let result = [

				{
					category:"Продукты",
					sum1:234,
					sum2:3833,
					sum3:4283,
					sum4:234,
					sum5:3833,
					sum6:4283,
					sum7:234,
					sum8:3833,
					sum9:4283,
					sum10:234,
					sum11:3833,
					sum12:4283
				},
				{
					category:"Бензин",
					sum1:7653,
					sum2:33,
					sum3:4000,
					sum4:234,
					sum5:3833,
					sum6:4283,
					sum7:234,
					sum8:3833,
					sum9:4283,
					sum10:234,
					sum11:3833,
					sum12:4283
				},
				{
					category:"Продукты",
					sum1:234,
					sum2:3833,
					sum3:4283,
					sum4:234,
					sum5:3833,
					sum6:4283,
					sum7:234,
					sum8:3833,
					sum9:4283,
					sum10:234,
					sum11:3833,
					sum12:4283
				},
				{
					category:"Продукты",
					sum1:234,
					sum2:3833,
					sum3:4283,
					sum4:234,
					sum5:3833,
					sum6:4283,
					sum7:234,
					sum8:3833,
					sum9:4283,
					sum10:234,
					sum11:3833,
					sum12:4283
				}

			]


	      return result;

	    }    

	}  
};
</script>
<style scoped>

</style>