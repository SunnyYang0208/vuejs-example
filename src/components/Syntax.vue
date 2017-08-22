<template>
  <div class="syntax">
    <div>
      <div>
        <h3>Template Syntax</h3>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'syntax'
  }
</script>

<style lang="less">
  .syntax {
    >div >div {
      h3 {
        color: #333;
        position: relative;
        margin-left: 30px;
        &:after {
          content: "#";
          color: #42b983;
          position: absolute;
          left: -0.7em;
          bottom: -2px;
          font-size: 1em;
          font-weight: bold;
        }
      }
    }
  }
</style>

