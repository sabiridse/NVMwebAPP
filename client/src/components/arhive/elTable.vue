<template>
	<el-container>
	<el-table :data="tableData" stripe="true" border="true" height="800">
	    <el-table-column prop="date" sortable label="Дата" width="100"/>
	    <el-table-column prop="prihod" label="Приход" width="100"/>
	    <el-table-column prop="rashod" label="Расход" width="100"/>
	    <el-table-column prop="ostatok" sortable label="Остаток" width="110"/>
	    <el-table-column prop="dayOfWeek" sortable label="День недели" width="150"/>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      current-page.sync="4"
      :page-sizes="[15, 45, 90, 180]"
      :page-size="15"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalIt">
    </el-pagination>
</el-container>
</template>
<script>
	export default {
  name: 'page',
  methods: {
      handleSizeChange(val) {
        console.log(`${val} строк на странице`);
      },
      handleCurrentChange(val) {
        console.log(`текущая страница: ${val}`);
      }
    },
  created(){
  	this.totalIt = this.tableData.length;
  }, 
  data() {
    return {
      	tableData: [
					{date:'11.10.2018', prihod:'10000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'11.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'},
					{date:'01.10.2018', prihod:'1000', rashod:'100', ostatok:'900', dayOfWeek:'Понедельник'},
					{prihod:'0', rashod:'200', date:'02.10.2018',ostatok:'700', dayOfWeek:'Вторник'}
					],
		totalIt:0			
    }
  }
};
</script>
<style>
	.el-table-column {
		background-color: #87CEEB;
	}

</style>