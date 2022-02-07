<template>
    <div class="b-apps-img" >
        <img
            :src="imgSrc"
            :alt="alt"
        />
    </div>
</template>

<script>
export default {
    name: 'AppsImg',
    props: {
        imgName: { 
            type: String, 
            default: '',
        },
        alt: { 
            type: String, 
            default: 'Image',
        },
    },
    computed: {
        imgSrc () {
            const fileName = this.imgName.toLowerCase();
            return require(`~/assets/img/${fileName}.jpg`) 
        },
    },
}
</script>

<style lang="scss">
    .b-apps-img {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }     
</style>
