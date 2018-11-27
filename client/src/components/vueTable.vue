<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <!--
        <v-btn :slot="activ" color="primary" dark class="mb-2"
          >Новая запись</v-btn
        >
      -->
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.date"
                  label="Дата"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.plus"
                  label="Приход"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.minus"
                  label="Расход"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.cash"
                  label="Остаток"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="editedItem.dayOfWeek"
                  label="День_недели"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="close">Отмена</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :rows-per-page-items="rowsPerPageItemsArray"
      :rows-per-page-text="text"
      no-data-text="нет данных"
      no-results-text="нет данных"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xm-center">{{ props.item.date }}</td>
        <td class="text-xm-center">{{ props.item.plus }}</td>
        <td class="text-xm-center">{{ props.item.minus }}</td>
        <td class="text-xm-center">{{ props.item.cash }}</td>
        <td class="text-xm-center">{{ props.item.dayOfWeek }}</td>
        <td class="text-xm-center">
          <v-icon small class="mr-2" @click="editItem(props.item);">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item);">delete_sweep</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import eventbus from "../plugins/eventbus.js";
export default {
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      editedItem: {
        date: "23.11.2018",
        plus: 0,
        minus: 0,
        cash: 0,
        dayOfWeek: "Четверг"
      },
      defaultItem: {
        date: "01.01.2018",
        plus: "0",
        minus: "0",
        cash: "0",
        dayOfWeek: "0"
      },
      search: "",
      text: "Строк на странице:",
      rowsPerPageItemsArray: [15, 45, 90, { text: "Все", value: -1 }],
      headers: [
        {
          text: "Дата",
          value: "date",
          sortable: true
        },
        {
          text: "Приход",
          value: "plus",
          sortable: true
        },
        {
          text: "Расход",
          value: "minus",
          sortable: true
        },
        {
          text: "Остаток",
          value: "cash",
          sortable: true
        },
        {
          text: "День недели",
          value: "dayOfWeek",
          sortable: false
        },
        {
          text: "Действие"
        }
      ]
    };
  },
  created() {
    eventbus.$on("searchReq", this.searchData);
    eventbus.$on("dialogStart", this.dialogStart);
  },
  methods: {
    searchData(value) {
      this.search = value;
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //this.$store.dispatch("addNote", this.editedItem);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("Удалить запись?") && this.items.splice(index, 1);
    },
    dialogStart(status) {
      this.dialog = status;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.$store.dispatch("addNote", this.editedItem);
      }
      this.close();
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Новая запись" : "Изменить запись";
    },
    items() {
      return this.$store.getters.items;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>
<style>
/*tbody {
 	margin-top: 20px;
    background: red;
    height: 700px;
    overflow-y: scroll;
}
thead {
	background: green;
	position: fixed;
}
.theme--dark.v-datatable .v-datatable__actions {
	background: blue;
	position: fixed;
}*/
/** {
	background: white;
}*/
</style>
