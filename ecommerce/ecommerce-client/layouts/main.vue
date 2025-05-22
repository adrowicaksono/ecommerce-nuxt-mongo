<template>
  <div class="containerMain">
    <header>
      <Navbar class="navbar" />
      <div style="visibility:hidden">
        <NavbarSearch v-bind:class="{ visible: !isNavbar }" />
      </div>
    </header>
    <div class="banner">
      <Banner class="displayBanner" />
      <div class="asideBanner">
        <h1>Aside banner</h1>
      </div>
    </div>
    <div ref="search" class="input-search">
      <Search />
    </div>
    <div class="containerContent" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbar: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      console.log('SCROLL')
      // Any code to be executed
      // when the window is scrolled
      let page = window.pageYOffset
      let content = this.$refs.search
      let contentTop = content.offsetTop
      if (page > contentTop) {
        this.isNavbar = false
      } else {
        this.isNavbar = true
      }
    }
  }
}
</script>

<style>
.containerContent {
  /* border-style: solid;
  border-color:red; */
  display: flex;
  width: 100%;
  overflow: hidden;
  z-index: 4;
  margin-top: 10px;
  padding: 0;
}

.containerMain {
  width: 100%;
}

.banner {
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 20;
  background: rgb(2, 94, 94);
}

/*TODO Apply flex box*/
.displayBanner {
  width: 75%
}

.asideBanner {
  width: 25%;
  height: 60px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.visible {
  visibility: visible;
  transition: 0.5s;
  position: fixed;
  width: 100%;
  line-height: 25px;
  background: rgb(2, 94, 94);
  z-index: 15;
}

.input-search {
  height: 54px;
  background: rgb(2, 94, 94);
}

.navbar {
  position: fixed;
  width: 100%;
  line-height: 25px;
  background: rgba(5, 110, 110, 0.308);
  z-index: 10;
}

header {
  width: 100%;
  height: 59px;
  background-color: rgb(2, 94, 94);
}

@media(max-width: 786px) {
  .indexUp {
    z-index: 1000;
  }

  .visible {
    visibility: visible;
    transition: 0.5s;
    position: fixed;
    width: 100%;
    line-height: 25px;
    background: rgb(2, 94, 94);
  }

  .banner {
    flex-direction: column;
  }

  .displayBanner {
    width: 100%;
    align-self: center;
  }

  .asideBanner {
    width: 100%;
    margin: auto;
  }
}
</style>
