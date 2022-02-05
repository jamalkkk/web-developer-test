<template>
    <div :class="['b-mixed-media', {
        'has-image': !!imgName,
        'text-center': isCentered,
    }]"
    >
        <div 
            v-if="!!imgName"
            class="mixed-media-img"
        >
            <apps-img 
                img-name="mixed-media"
                alt="Mixed Media Image"
            />

        </div>
        <div
            class="mixed-media-content"
        >
             <apps-headline 
                tag="h2"
                :text="title"
                :is-light="true"
                class="mb-3"
            />
            <apps-headline 
                tag="h4"
                :text="subtitle"
                :is-light="true"
            />
            <div class="content-cta">
                <apps-text-link
                    class="content-link"
                    :text="ctaText"
                    :link="ctaLink"
                    :is-cta="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AppsImg from '../../common/apps-img/AppsImg.vue'
import Content from '../content/Content.vue'
export default {
  components: { AppsImg, Content },
name: 'MixedMedia',
    props: {
        isCentered: { 
            type: Boolean, 
            default: false,
        },
        title: { 
            type: String, 
            default: ''
        },
        subtitle: { 
            type: String, 
            default: ''
        },
        imgName: { 
            type: String, 
            default: null,
        },
        imgAlt: { 
            type: String, 
            default: ''
        },
        ctaText: { 
            type: String, 
            default: ''
        },
        ctaLink: { 
            type: String, 
            default: '',
        },
    },
}
</script>

<style lang="scss">
    .b-mixed-media {
        display: flex;

        .mixed-media-img {
            width: 50%;
            height: 50vw;
        }

        &.has-image {
            .mixed-media-content {
                display: flex;
                flex-direction: column;
                width: 50%;
                justify-content: center;
            }
        }

        .mixed-media-content {
            position: relative;
            width: 100%;
            padding: 13rem;

            .content-cta {
                margin-top: 5.5rem;
            }
        }
    }
</style>