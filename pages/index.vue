<template>
    <layerpage> 
        <hero
            title="Lagom"
            subtitle="APPS unveils new studio"
            img-name="hero"
            img-alt="Hero Image"
        />
        <mixed-media  
            :isCentered="true"
            title="Innovation and experience design agency."
            subtitle="Apps is an innovation and experience design agency.<br>We exist to create a better future with you."
            cta-text="Products"
            cta-link="/products"
        />
        <mixed-media 
            title="The imaginative application of art and science."
            subtitle="We architect, design and deliver iconic experiences,<br>services and products that improve people’s lives. "
            cta-text="Read Latest"
            cta-link="/news"
            img-name="mixed-media"
            img-alt="Mixed Media Image"
        />
    </Layerpage>
</template>

<script>
export default {
  head() {
    return {
      title: "APPS"
    };
  }
}
</script>
