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
                :is-font-light="true"
                class="mb-3"
            />
            <apps-headline 
                tag="h4"
                :text="subtitle"
                :is-font-light="true"
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
export default {
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
        flex-direction: column;

        @include lg {
            flex-direction: row;
        }

        &.has-image {
            .mixed-media-content {
                display: flex;
                flex-direction: column;
                justify-content: center;

                @include lg {
                    width: 50%;
                }
            }
        }

        .mixed-media-img {
            width: 100%;
            height: 100vw;
            order: 2;

            @include lg {
                width: 50%;
                height: 50vw;
                order: 0;
            }
        }

        .mixed-media-content {
            position: relative;
            width: 100%;
            padding: 6rem 3.5rem;

            @include lg {
                padding: 13rem;
            }

            .content-cta {
                margin-top: 5.5rem;
            }
        }
    }
</style>