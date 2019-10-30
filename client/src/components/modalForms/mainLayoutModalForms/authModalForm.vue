<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar :color="colorStatus" dark>
                <v-toolbar-title>Авторизация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Пользователь"
                    v-model="user.name"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    v-model="user.pswd"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-layout justify-center>
                  <v-btn :color="colorStatus" :disabled="!user.name" @click="signin">Войти</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import api from '@/services/Controller'
const crypto = require('crypto')
export default {
  data () {
    return {
      user: {
        name: null,
        pswd: null
      },
      isAuth: false
    }
  },
  methods: {
    signin () {
      api.checkUser({
        name: this.user.name,
        pswd: this.hash(this.user.pswd)
      })
    },
    hash (text) {
      return crypto.createHmac('sha256', 'abcdefg')
        .update(text).digest('hex')
    }
  },
  computed: {
    colorStatus () {
      return this.$store.getters.getResultColorAuthForm
    }
  }

}
</script>
