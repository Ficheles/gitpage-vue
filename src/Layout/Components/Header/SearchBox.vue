<template>
  <div>
    <div class="search-wrapper" :class="{ active: searchOpen }">
      <div class="input-holder">
        <input type="text" class="search-input" placeholder="Type to search" />
        <button class="search-icon" :click="(searchOpen = !searchOpen)"><span /></button>
      </div>
      <button class="close" :click="(searchOpen = !searchOpen)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOpen: false,
    }
  },
}
</script>
