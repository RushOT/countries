<template>
    <div class="card"  style="width: 18rem;">
        <!--<img class="card-img-top" v-bind:src="aCountry.flag" alt="Card image cap">-->
        <div class="card-body"  >
            <h5 class="card-title">{{aCountry.name}}</h5>
            <p class="card-text">{{aCountry.capital}}</p>
            <a href="#" class="btn btn-primary">Detailed info</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Country",

        props: {
            country: {
                type: Object
            }
        },

        data(){
            return {
                aCountry: this.$props.country
            }
        }
    }
</script>

<style scoped>
    .card{
        margin: 10px;
    }
</style>