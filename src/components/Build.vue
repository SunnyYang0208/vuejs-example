<template>
  <div class="framework">
    <div>
      <h3>Direct 'script' Include</h3>
    </div>
    <div>
      <h3>Quick start a project with offical CLI</h3>
      <img src="../img/build_quick_start.png" >
    </div>
    <div>
      <h3>Build folders</h3>
      <div>build</div>
      <img src="../img/folder_build.png" />
      <div>config</div>
      <img src="../img/folder_config.png" />
      <div>src</div>
      <img src="../img/folder_src.png" />
      <div>index.html</div>
      <div>package.json</div>
    </div>
  </div>
</template>

<script>
document.title = 'Build'
export default {
  name: 'build'
}
</script>

<style lang="less" scoped>
 div.framework {
   font-size: 2rem;
   img {
     display: block;
     margin-bottom: 20px;
   }
 }
</style>
