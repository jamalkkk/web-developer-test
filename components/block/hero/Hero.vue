<template>
    <div class="b-hero">
        <AppsImg 
            :img-name="imgName"
            :alt="imgAlt"
        />
        <div class="hero-content">
            <AppsHeadline 
                tag="h5"
                :text="subtitle"
                :is-inverted="true"
                class="mb-0"
            />
            <AppsHeadline 
                tag="h1"
                :text="title"
                :is-font-light="true"
                :is-inverted="true"
            />
        </div>
    </div>
</template>

<script>
export default {
name: 'Hero',
    props: {
        title: { 
            type: String, 
            default: '',
        },
        subtitle: { 
            type: String, 
            default: '',
        },
        imgName: { 
            type: String, 
            default: '',
        },
        imgAlt: { 
            type: String, 
            default: '',
        },
    },
}
</script>

<style lang="scss">
    .b-hero {
        position: relative;
        width: 100%;
        height: calc(100vw);

        @include md {
            height: calc(100vh - 11rem);
        }

        .hero-content {
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            padding: 0 1.5rem;
            align-items: flex-start;
            justify-content: center;
            opacity: 0;
            animation: $fade-in-animation;

            @include md {
                padding: 0 13rem;
            }
        }
    }
</style>