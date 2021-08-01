<template>
  <div class="uk-position-relative" uk-height-viewport="offset-top: true">
    <div :class="{ 'uk-position-center' : mediaQuery.m }">
      <div class="teaser-large uk-container" :class="{ 'teaser-large--loading' : isLoading }">
        <div uk-grid class="uk-grid-large uk-flex uk-flex-middle">
          <div class="uk-width-1-1 uk-width-2-5@m uk-text-right@m">
            <h1 class="uk-h3 uk-text-uppercase" v-text="title" />
            <p :class="{ 'uk-text-lead uk-text-emphasis' : mediaQuery.s}" v-text="description" />
            <nuxt-link :to="url" class="uk-button uk-button-default">
              Zum Artikel
            </nuxt-link>
          </div>
          <nuxt-link :to="url" tag="div" class="uk-width-1-1 uk-flex-first uk-flex-last@m uk-width-3-5@m uk-text-center uk-text-left@m">
            <img :src="image" width="600" class="uk-width-xlarge">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-if="mediaQuery.s" uk-scroll class="$presented uk-position uk-position-bottom-center uk-position-large">
      <span class="$presented-topline uk-text-center uk-display-block uk-text-meta uk-margin-small">Präsentiert von:</span>
      <PartnerLogo />
    </div>
  </div>
</template>

<script>
import PartnerLogo from '~/assets/logos/scarpa-edelrid.svg'

export default {
  components: {
    PartnerLogo
  },

  props: [
    'title',
    'description',
    'author',
    'image',
    'url',

    'isLoading'
  ]
}
</script>

<style scoped>
.scarpa-edelrid.svg {
  width: 330px;
}
</style>
