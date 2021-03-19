<template>
<div class="nav-container">
  <nav>
    <ul class="desktopMenu">
      <li>
        <nuxt-link to="/"
          ><img
            class="brand"
            src="../assets/Images/cropped-Refine-Manufacturing-Logo500px.png"
            alt="refine-manufacturing"
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link class="navigation-link ml-2 text-lg font-semibold" to="/"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="navigation-link ml-2 text-lg font-semibold"
          to="/about"
          >About Us</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="navigation-link ml-2 text-lg font-semibold"
          to="/contact"
          >Contact Us</nuxt-link
        >
      </li>
    </ul>
    <div>
      <ul class="desktop-social-icons">
        <li class="ml-20">
          <button
            class="border-solid border border-orange bg-orange-500 rounded-md text-white p-2"
          >
            <nuxt-link to="/contact">CONTACT NOW</nuxt-link>
          </button>
        </li>
        <li>
          <a class="icon" href="https://www.facebook.com/refineproductsohio">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
        </li>
        <li>
          <a class="icon" href="mailto:info@refinemanufacturing.com">
            <font-awesome-icon :icon="['far', 'envelope']" />
          </a>
        </li>
        <!-- <li>
          <a class="icon" href="https://www.linkedin.com/in/jack-v-meyer/">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </li> -->
      </ul>
    </div>
    <div class="mobile-menu">
      <div @click="toggleShow" class="hamburger">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <nuxt-link class="brand mobile" to="/"
        ><img
          class="brand"
          src="../assets/Images/cropped-Refine-Manufacturing-Logo500px.png"
          alt="refine-manufacturing"
      /></nuxt-link>
      <div class="mobile"></div>
    </div>
    <transition name="mobile-menu">
      <ul v-show="show">
        <li @click="toggleShow">
          <nuxt-link class="navigation-link ml-2 text-lg font-semibold" to="/"
            >Home</nuxt-link
          >
        </li>
        <li @click="toggleShow">
          <nuxt-link
            class="navigation-link ml-2 text-lg font-semibold"
            to="/about"
            >About Us</nuxt-link
          >
        </li>
        <li @click="toggleShow">
          <nuxt-link
            class="navigation-link ml-2 text-lg font-semibold"
            to="/contact"
            >Contact Us</nuxt-link
          >
        </li>
        <li>
          <div class="mobile-social-icons">
            <ul class="icon-list">
              <li>
                <a
                  class="icon"
                  href="https://www.facebook.com/refineproductsohio"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li>
                <a class="icon" href="mailto:info@refinemanufacturing.com">
                  <font-awesome-icon :icon="['far', 'envelope']" />
                </a>
              </li>
              <!-- <li>
              <a class="icon" href="https://www.linkedin.com/in/jack-v-meyer/">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </li> -->
            </ul>
            <button
              @click="toggleShow"
              class="border-solid border border-orange bg-orange-500 rounded-md text-white p-2"
            >
              <nuxt-link to="/contact">CONTACT NOW</nuxt-link>
            </button>
          </div>
        </li>
      </ul>
    </transition>
  </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  position: absolute;
  z-index: 1;
}
nav {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.hamburger {
  color: rgb(46, 45, 49);
  padding: 10px;
  font-size: 24px;
}
.desktopMenu,
.desktop-social-icons {
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
}
@media screen and (min-width: 1200px) {
  .hamburger {
    display: none;
  }
  .mobile {
    display: none;
  }
  .mobile-social-icons {
    display: none;
  }
}
@media screen and (max-width: 1199px) {
  ul {
    flex-direction: column;
    align-items: baseline;
  }
  .desktopMenu {
    display: none;
  }
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .brand {
    padding-left: 20px;
    max-width: 70% !important;
  }
  .desktop-social-icons {
    display: none;
  }
}
li {
  padding: 5px;
}
.navigation-link {
  color: rgb(53, 52, 58);
}
.navigation-link:hover,
.navigation-link:active {
  color: #d8ab19;
}
.nuxt-link-active {
  color: #443d3e;
}
.brand {
  max-width: 33%;
}
.mobile-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  color: rgb(42, 51, 88);
}
.icon:hover {
  color: #d8ab19;
}
.icon-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  max-width: 200px;
  justify-content: flex-start;
}
.mobile-menu-leave-to {
  transition-timing-function: ease-in;
  animation-duration: 0.1s;
}
.mobile-menu-enter {
  transition-timing-function: ease-out;
  animation-duration: 0.1s;
}
</style>