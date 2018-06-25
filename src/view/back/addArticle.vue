<template>
    <div class="addArticle">
        <div class="head">
            <div class="title">
                 <div>
                     <input type="text">
                 </div>
            </div>
            <div class="btn">
                 <button>发表博客</button>
            </div>
        </div>
        <div class="mainContent">
             <mavon-editor v-model="editorVal"/>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      editorVal: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.addArticle {
  > .head {
    height: 40px;
    display: flex;
    > .btn {
      flex: none;
      @include wh(100, 40);
      > button {
        width: 80px;
        height: 40px;
        background: #57a3f3;
        color: white;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        outline: none;
      }
    }
    > .title {
      flex: 1;
      > div {
        margin: 0 20px 0 0;
        height: 40px;
        > input {
          width: 100%;
          height: 40px;
          border: 1px solid #dddee1;
          border-radius: 4px;
          color: #495060;
          background-color: #fff;
          background-image: none;
          cursor: text;

          text-indent: 4mm;
        }
      }
    }
  }
  >.mainContent{
      margin-top: 20px;
      min-height: 400px;
  }
}
</style>
