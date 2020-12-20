<template>
  <div class="main">Main page here: {{ msg }} </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Alex and Monica is here",
    };
  },
};
</script>

<style lang="scss">
$bgColor: red;

.main {
  background-color: $bgColor;
}
</style>