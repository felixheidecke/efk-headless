<template>
  <main>
    <TeaserLarge v-if="teaser" v-bind="teaser" :is-loading="!teaser" />
    <TeaserArticleList />
  </main>
</template>

<script>
export default {
  name: 'Main',

  data () {
    return {
      teaser: null
    }
  },

  async mounted () {
    const items = [
      'title',
      'description',
      'author',
      'image'
    ]

    const teaser = await this.$content('artikel/schraube-frauen-anders').only(items).fetch()

    this.teaser = {
      ...teaser,
      url: teaser.path
    }
  }
}
</script>
