<template>
  <div id="offcanvas-menu" uk-offcanvas="mode: push; flip: true;">
    <nav class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close />
      <ul class="uk-nav uk-nav-default">
        <li v-for="item in menuItems" :key="item.href" :class="item.class">
          <nuxt-link :to="item.href">
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    menuItems () {
      return [
        {
          href: 'schrauben-frauen-anders',
          text: 'Schrauben Frauen anders?',
          isActive: true,
          class: 'uk-nav-header'
        },
        {
          href: 'deutsche-meisterschaft-bouldern-2020',
          text: 'Mit Publikum ist es besser',
          isActive: false,
          isHeader: false
        }
      ]
    }
  }
}
</script>
