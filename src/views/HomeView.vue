<template>
  <div class="my-view">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我的簡單視圖",
      message: "這是一個使用 Vue 建立的簡單視圖示例！"
    };
  }
};
</script>

<style scoped>
.my-view {
  text-align: center;
  margin-top: 20px;
}
</style>
