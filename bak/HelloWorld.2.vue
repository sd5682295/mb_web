<template>
  <div id="editor-header">
        <a class="back" id="back-to-list" href="/list">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <div class="doc-recently-edited dropdown" id="recently-edited">
            <div class="doc-name">代码管理工具</div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <div class="menu" style="position: absolute; width: 220px;">
                <h3 class="title">最近编辑</h3>
                <div class="recently-search-box">
                    <i class="icon icon-search"></i>
                    <input id="recently-search-input" type="text" placeholder="搜索文档标题">
                    <i id="recently-search-clear" class="icon icon-circle-close"></i>
                </div>
                <div class="recently-list">
                </div>
            </div>
        </div>
        <div class="action-undo action" title="撤销">
            <i class="fa fa-undo" aria-hidden="true"></i>
        </div>
        <div class="action-redo action" title="恢复">
            <i class="fa fa-repeat" aria-hidden="true"></i>
        </div>

        <div class="right">

            <div id="toolbar-help" class="operate dropdown">
                <i class="fa fa-question-circle" aria-hidden="true"></i>
                <div class="menu" style="position: absolute; width: 110px;">
                    <ul>
                        <li id="help-tutorial" class="item" data-event="edit_tutorial">
                            使用教程
                        </li>
                        <li id="help-shortcut" class="item" data-event="edit_hotkey">
                            快捷键列表
                        </li>
                        <li id="help-feedback" class="item link" data-event="edit_service">
                            <a href="/feedback_talk" target="_blank">在线客服</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="split"></div>
            <div class="search-box">
                <i style="position: absolute;left: 5px;top:5px" class="fa fa-search"></i>
                <input type="text" id="search-input" placeholder="搜索">
                <i id="search-clear" class="fa fa-times"></i>
            </div>
            <div class="split"></div>
            <div id="toolbar-menu" class="operate dropdown">
                <i class="fa fa-ellipsis-h"></i>
                <div class="menu" style="position: absolute; width: 110px;">
                    <ul>
                        <li id="doc-menu-style" class="item">
                            界面设置
                        </li>
                        <li id="doc-menu-export" class="item">
                            导出/下载
                        </li>
                        <li id="doc-menu-print" class="item">
                            打印
                        </li>
                        <li id="doc-menu-back" class="item link">
                            <a href="/list">返回</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import '../assets/css/style-2f772c0caf.css';
 @import '../assets/css/font-awesome.min.css';
 @import '../assets/css/ui-66bed85b8d.css'

 

</style>
