<template>
  <div class="header">
    <div class="hamburger" @click="isOpen = !isOpen">
      <Icon v-if="!isOpen" :name="'menu'" />
      <Icon v-if="isOpen" :name="'x'" />
      <span class="hamburger__text">Menu</span>
    </div>

    <div class="offcanvas" :class="{'is-open': isOpen}">
      <router-link to="/about" class="offcanvas__item">About me</router-link>
      <router-link to="/prizes" class="offcanvas__item">Prizes</router-link>
      <router-link to="/contact" class="offcanvas__item">Contact</router-link>
    </div>

    <div class="logo">Koen Arts</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
  margin: 30px;
  z-index: 300;

  @include breakpoint($bp-m) {
    margin: 60px;
  }
}

.hamburger {
  position: absolute;
  display: flex;
  left: 0;
  align-items: center;
  justify-content: center;
  color: $white;
  font-size: 3em;
  cursor: pointer;

  &:hover .hamburger__text {
    opacity: 1;
    transform: translateX(20px);
  }
}

.hamburger__text {
  font-size: 1.2rem;
  position: absolute;
  left: 100%;
  opacity: 0;
  transform: translateX(0);
  transition: all 0.4s ease;
}

.logo {
  font-family: $logo-fam;
  font-size: 2.2em;
  font-weight: 800;
}

.offcanvas {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    rgba(black, 0.8),
    rgba(#225a5d, 0.8)
  );
  transition: opacity 0.4s ease;
  color: white;
  font-size: 1.4em;
  opacity: 0;
  pointer-events: none;
  z-index: -1;

  &.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .offcanvas__item + .offcanvas__item {
    margin-top: 40px;
  }
}
</style>
