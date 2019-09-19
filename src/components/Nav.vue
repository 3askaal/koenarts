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
}

.hamburger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 200;
  margin: 40px;
  font-size: 3em;
  cursor: pointer;
  position: relative;

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
  font-size: 2em;
  z-index: 100;
  // transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;

  &.is-open {
    opacity: 1;
    pointer-events: auto;
    // transform: translateY(0%);
  }

  .offcanvas__item {
    margin-bottom: 20px;
  }
}
</style>
