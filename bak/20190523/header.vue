<template>
	<div id="editor-header">
		<a class="back" id="back-to-list" href="/list">
			<i class="icon icon-chevron-left"></i>
		</a>
		<div class="doc-recently-edited dropdown" id="recently-edited">
			<div class="doc-name">代码管理工具</div>
			<i class="icon icon-drop-down"></i>
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
			<i class="icon icon-undo"></i>
		</div>
		<div class="action-redo action" title="恢复">
			<i class="icon icon-redo"></i>
		</div>
		<div class="action-save action">
			<span>已保存</span>
			<i class="icon icon-spinner" title="保存中..."></i>
		</div>
		<div class="right">
			<div id="toolbar-mind" class="operate">
				<i class="icon icon-mind-o"></i>
			</div>
			<div id="toolbar-play" class="operate">
				<i class="icon icon-demo"></i>
			</div>
			<div id="toolbar-share" class="operate">
				<i class="icon icon-share-rect"></i>
			</div>
			<div id="toolbar-help" class="operate dropdown">
				<i class="icon icon-help-bold"></i>
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
				<i class="icon icon-search"></i>
				<input type="text" id="search-input" placeholder="搜索">
				<i id="search-clear" class="icon icon-circle-close"></i>
			</div>
		</div>
	</div>


</template>

<script>
	export default {
		name: 'header'

	}
</script>
<style scoped>
 @import './assets/css/ui-66bed85b8d.css'

 

</style>
