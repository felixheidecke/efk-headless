<template>
  <header :class="className" :uk-sticky="isSticky">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="mode: click">
      <div class="uk-navbar-left">
        <nuxt-link to="/" class="$logo-top uk-navbar-item">
          <Logo />
        </nuxt-link>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li class="uk-visible@s">
            <a href="/artikel/">Artikel</a>
          </li>
          <li aria-hidden>
            <a href="" uk-toggle="target: #offcanvas-menu"><Burger /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '~/assets/logos/einfachklettern_horizontal.svg'
import Burger from '~/assets/icons/baseline-menu-24px.svg'

export default {
  components: {
    Logo,
    Burger
  },

  computed: {
    className () {
      return (!this.mediaQuery.s)
        ? ['uk-background-secondary', 'uk-margin-bottom', 'uk-light']
        : ['uk-container', 'uk-padding']
    },

    isSticky () {
      return (!this.mediaQuery.s)
        ? 'show-on-up: true; animation: uk-animation-slide-top'
        : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/scss/variables';

.\$logo-top {
    cursor: pointer;

    & > svg {
        width: 140px;
        fill: #fff;
    }

    @media (min-width: $breakpoint-small) {
        & > svg {
            width: 190px;
            fill: #444;
        }
    }
}
</style>
