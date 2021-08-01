<template>
  <main class="uk-container">
    <article :class="{ 'uk-card uk-card-default uk-card-small uk-card-body' : mediaQuery.s }">
      <div :class="{ 'uk-aspect-ratio-21-9 uk-overflow-hidden' : mediaQuery.s }">
        <img class="$article-image" :class="{ 'uk-position-center' : mediaQuery.s }" :data-src="page.image" uk-img alt="Schrauben Frauen anders?">
      </div>

      <div :class="{ '$article-titlebox uk-position-absolute uk-light uk-overlay-primary uk-width-2xlarge' : mediaQuery.s, 'uk-margin-top uk-margin-bottom' : !mediaQuery.s }">
        <div>
          <h1 class="uk-h2 uk-margin-remove-bottom uk-text-uppercase" v-text="page.title" />
          <span class="uk-text-lead uk-text-emphasis" v-text="page.subtitle" />
        </div>
      </div>

      <div :class="{ 'uk-padding-large' : mediaQuery.s }">
        <div uk-grid class="uk-grid-small uk-flex uk-flex-middle">
          <div v-if="mediaQuery.s" class="uk-width-auto">
            <img class="uk-border-circle" width="80" height="80" src="/index.php?rex_media_type=author_portrait&rex_media_file=/index.php?rex_media_type=rex_mediapool_preview&rex_media_file=juliane-fritz-kontakt-scaled.png" alt="Juliane Fritz">
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove uk-text-small uk-text-italic">
              Ein Beitrag von Juliane Fritz<br>
              <time datetime="21.02.2021" data-moment-calendar>Vom 21.02.2021</time>
            </p>
          </div>
        </div>
        <hr v-if="mediaQuery.s">
        <nuxt-content :document="page" />
      </div>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'

    try {
      const page = await $content('artikel/' + slug).fetch()
      return {
        page
      }
    } catch (error) {
      console.error('UPS:', error)
    }
  },

  computed: {

    titleBoxClassName () {
      let className = ''

      if (this.mediaQuery.s) {
        className = 'uk-position-absolute uk-light uk-overlay-primary uk-width-2xlarge'
      } else {
        className = 'uk-margin-top uk-margin-bottom'
      }

      return className
    }
  }
}
</script>
