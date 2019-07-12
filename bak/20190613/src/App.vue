<template>
	<div class="tree-menu">
		<myheader></myheader>
		<div id="scroll-content">
			<div id="paper">
				<div class="paper-header">
					<div class="paper-name">
						<input type="text" placeholder="无标题" maxlength="200">
					</div>
					<div id="dir" class="paper-dir">

					</div>
				</div>
				<cTree :data="data"></cTree>

			</div>

		</div>

	</div>
</template>

<script>
	import Vue from 'vue'
	import cTree from './tree'
	import myheader from './zzyheader.vue'
	import {
		getdata
	} from '../datahandle/test'
	// import {eventhub} from './hub'

	// hub.$on('aa',(res)=>{
	// 	alert('aaa')
	// })
	export default {
		components: {
			cTree,
			myheader
		},

		data() {
			return {
				data: getdata('st'),
				eventHub: new Vue()
			}
		},
		provide() {
			return {
				eventHub: this.eventHub
			};
		},
		created() {
			this.eventHub.$on('aa', () => {
				this.data = getdata('st')

				// alert(JSON.stringify(this.data))
			})
		}
	}
</script>
