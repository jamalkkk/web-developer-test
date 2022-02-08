<template>
    <div
        :class="['b-mixed-media', {
            'has-image': !!imgName,
            'text-center': isCentered,  
        }]" 
        ref="component"
    >
        <div 
            v-if="!!imgName"
            class="mixed-media-img"
        >
            <apps-img 
                :img-name="imgName"
                :alt="imgAlt"
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
                <apps-text-cta
                    class="content-link"
                    :text="ctaText"
                    :link="ctaLink"
                    :is-blue="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MixedMedia',
    data () {
        return {
            isContentShown: false,
        };
    },
    props: {
        isCentered: { 
            type: Boolean, 
            default: false,
        },
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
        ctaText: { 
            type: String, 
            default: '',
        },
        ctaLink: { 
            type: String, 
            default: '',
        },
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            if (!this.isContentShown) {
                var scrolled = document.scrollingElement.scrollTop;
                var position = this.$refs.component.offsetTop;

                if(scrolled + document.documentElement.clientHeight * .8 > position ){
                    this.$refs.component.classList.add('show-content');
                    this.isContentShown = true;
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .b-mixed-media {
        display: flex;
        flex-direction: column;

        @include md {
            flex-direction: row;
        }

        &.has-image {
            .mixed-media-content {
                display: flex;
                flex-direction: column;
                justify-content: center;

                @include md {
                    width: 50%;
                }
            }
        }

        &.show-content {
            .mixed-media-content {
                animation: $fade-in-animation;
            }
        }

        .mixed-media-img {
            width: 100%;
            height: 100vw;
            order: 2;

            @include md {
                width: 50%;
                height: 50vw;
                order: 0;
            }
        }

        .mixed-media-content {
            position: relative;
            width: 100%;
            padding: 6rem 3.5rem;
            opacity: 0;

            @include md {
                padding: 13rem;
            }

            .content-cta {
                margin-top: 5.5rem;
            }
        }
    }
</style>