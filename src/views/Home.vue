<template>
  <div class="home">
      <div class="row">
          <letter v-for="letter in letters" :key="letter" :name="letter" @clickfilterbyletter="filterByLetter(letter)">
          </letter>
      </div>
      <div class="row">
          <country v-for="country in countries | byLetter" v-bind:key="country.numericCode" v-bind:country="country" ></country>
      </div>
  </div>
</template>

<script>
    import Country from '../components/Country.vue';
    import Letter from '../components/Letter.vue';

    export default {
        name: 'home',
        components: {
            Country,
            Letter
        },
        data () {
            return {
                countries: [],
                cloneCountries: [],
                letters: "abcdefghijklmnopqrstuvwxyz".split(""),
                currentLetter: ''
            }
        },

        created(){
            axios.get('https://restcountries.eu/rest/v2/all')
                .then(response => {
                    this.countries = response.data;
                    this.cloneCountries = response.data;
                })
                .catch(error => {console.log(error)});
        },

        methods: {
            filterByLetter(letter) {
                this.currentLetter = letter;
            },

        },

        filters: {
            byLetter: function() {
                console.log('asd')
                //return this.currentLetter === '' || country.name[0].toLowerCase() === this.currentLetter.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    .home{
        margin: 100px;
    }
</style>