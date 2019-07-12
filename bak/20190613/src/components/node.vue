<template>

				<div id="28616ab411e54019a" class="node focus-active">
					<div class="content-wrapper">
						<div class="content-hotspot"></div>
						<div class="bullet-wrapper">
							<div class="bullet" data-id="28616ab411e54019a">
								<div class="dot"></div>
							</div>
						</div>
						<div class="content" data-id="28616ab411e54019a" spellcheck="false" autocapitalize="off" contenteditable="true">{{msg}}</div>
						<div class="action-icon toggle" title="展开/收缩">
							<i class="icon icon-minus"></i>
						</div>
					</div>

				</div>

</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'node',
		
		props: {
			msg: String,
		},
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../assets/css/ui-66bed85b8d.css'
</style>
