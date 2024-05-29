<script setup></script>

<template>
  <h2>ui-demo</h2>
  <hr style="margin: 32px 100px" />
  <div>
    <DemoButton>按钮组件</DemoButton>
    <DemoButton style="margin-left: 12px" type="primary">按钮组件</DemoButton>
    <DemoButton style="margin-left: 12px" disabled :loading="true">按钮组件</DemoButton>
    <DemoButton style="margin-left: 12px" size="xs">按钮组件</DemoButton>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
