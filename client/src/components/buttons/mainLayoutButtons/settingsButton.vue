<template>
	<v-btn flat class="title" @click="dialogStatus(true);">Настройки</v-btn>
</template>
<script>
export default {
  methods: {
	    dialogStatus (status) {
	        this.$store.commit('setSettingsModalFormStatus', status)
	    }
  	}
}
</script>
