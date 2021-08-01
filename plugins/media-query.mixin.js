import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      mediaQuery: {
        s: null,
        m: null,
        l: null,
        xl: null
      }
    }
  },

  mounted () {
    const s = window.matchMedia('(min-width: 640px)')
    s.addEventListener('change', (query) => { this.mediaQuery.s = !!query.matches })
    this.mediaQuery.s = s.matches

    const m = window.matchMedia('(min-width: 960px)')
    m.addEventListener('change', (query) => { this.mediaQuery.m = !!query.matches })
    this.mediaQuery.m = m.matches

    const l = window.matchMedia('(min-width: 1200px)')
    l.addEventListener('change', (query) => { this.mediaQuery.l = !!query.matches })
    this.mediaQuery.l = l.matches

    const xl = window.matchMedia('(min-width: 1600px)')
    xl.addEventListener('change', (query) => { this.mediaQuery.xl = !!query.matches })
    this.mediaQuery.xl = xl.matches
  }
})
