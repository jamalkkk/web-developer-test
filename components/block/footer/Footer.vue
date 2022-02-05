<!-- Please remove this file from your project -->
<template>
  <div
    class="b-footer"
  >
    <div class="footer-left-items">
        <div class="footer-logo">
            <apps-logo />
        </div>
        <div class="footer-navbar">
            <apps-text-link
                class="footer-link"
                text="PRODUCTS"
                link="/products"
            />
            <apps-text-link
                class="footer-link"
                text="NEWS"
                link="/news"
            />
            <apps-text-link
                class="footer-link"
                text="CONTACT"
                link="/contact"
            />
            <apps-text-link
                class="footer-link"
                text="VIEW CART"
                link="/checkout"
            />
        </div>
    </div>
    <div class="footer-right-items">
        <div class="footer-socials">
             <apps-icon-link
                class="footer-link"
                icon="google"
                link="/google"
            />
             <apps-icon-link
                class="footer-link"
                icon="facebook"
                link="/facebook"
            />
             <apps-icon-link
                class="footer-link"
                icon="instagram"
                link="/instagram"
            />
             <apps-icon-link
                class="footer-link"
                icon="twitter"
                link="/twitter"
            />
        </div>
        <p class="footer-copyrights">Privacy Policy <br/>© 2022 Google. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
      text: '',
  },
}
</script>

<style lang="scss">
    .b-footer {
        position: relative;
        display: flex;
        width: 100%;
        height: 11rem;
        padding: 0 4.5rem;
        align-items: center;
        justify-content: space-between;

        .footer-left-items {
            display: flex;
            align-items: center;
        }

        .footer-navbar {
            display: flex;
            margin-left: 2.5rem;
            flex-direction: column;

            .footer-link:not(:first-of-type) {
                margin-top: 1rem;
            }
        }

        .footer-socials {
            display: flex;
            margin-bottom: 2rem;
            align-items: center;
            justify-content: flex-end;

            .footer-link:not(:first-of-type) {
                margin-left: 1rem;
            }
        }

        .footer-copyrights {
            margin: 0;
            text-align: right;
        }
    }
</style>