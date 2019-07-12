<template>

	<div id="28616ab411e54019a" class="node focus-active">
		<div class="content-wrapper">
			<div class="content-hotspot"></div>
			<div class="bullet-wrapper">
				<div class="bullet" data-id="28616ab411e54019a">
					<div class="dot"></div>
				</div>
			</div>
			<div id="data.id" class="content" v-focus:setfocusindex="data.updatetime" ref="data.id" :key="data.updatetime"
			 spellcheck="false" autocapitalize="off" contenteditable="true" @input="keeping_update"> {{data.name}}</div>
			<div class="action-icon toggle" @click="toggle" title="展开/收缩">
				<i v-if="open" v-show="hasChild" class="icomoon icon-minus"></i>
				<i v-if="!open" v-show="hasChild" class="icomoon icon-plus"></i>
			</div>
			<div class="children" v-show="open" v-if="hasChild">
				<tree-item v-for="(item, index) in data.children" :data="item" :key="index"></tree-item>
			</div>
		</div>
	</div>

</template>

<script>
	import {
		new_data,
		update,
		lasttime,
	} from '../datahandle/test'
	export default {
		name: 'TreeItem',
		props: {
			data: {
				type: [Object, Array],
				required: true
			}
		},

		data() {
			return {
				open: true,

			}
		},
		directives: {
			focus: {
				// 指令的定义
				inserted: function(el, binding) {
					const str = JSON.stringify
					// alert(`setfocusindex:${str(binding.value)}`)
					if (binding.value === lasttime()) {
						el.focus()
						if (window.getSelection) {
							var max_Len = el.innerHTML.length
							var range = window.getSelection()
							range.selectAllChildren(el)
							range.collapseToEnd()
						} else if (document.selection) { //ie10 9 8 7 6 5
							var range = document.selection.createRange() //创建选择对象
							range.moveToElementText(obj) //range定位到obj
							range.collapse(false) //光标移至最后
							range.select()
						}
					}
				}
			}
		},

		inject: ["eventHub"],
		computed: {
			hasChild() {
				return this.data.children && this.data.children.length
			}
		},
		methods: {
			dfocus() {
				// alert(JSON.stringify(lasttime()))
				this.$nextTick(function() {
					alert('aa')
				})
			},

			ff(a) {
				alert(JSON.stringify(a))
			},
			toggle() {
				if (this.hasChild) {
					this.open = !this.open
				}
			},
			keeping_update($event) {
				const s = (a) => {
					return JSON.stringify(a)
				}
				if ($event.target.innerHTML.indexOf('<br>') >= 0) {

					$event.target.innerHTML = $event.target.innerHTML.replace('<br>', '')
					new_data(this.$props.data.pa, "")
					this.eventHub.$emit('aa')
					this.getref()
					this.dfocus()

				} else {
					update(this.$props.data.id, $event.target.innerText)
				}

				// 				if($event.target.innerText==="\n\n"){
				// 					$event.target.innerText = ""
				// 				}else if ($event.target.innerText.indexOf("\n") >= 0) {
				// 					// $event.target.preventDefault()
				// 					$event.target.innerText = $event.target.innerText.substring(0, $event.target.innerText.length - 1);
				// 					new_data(this.$props.data.pa, "")
				// 					this.eventHub.$emit('aa')
				// 					this.dfocus()
				// 				} else {
				// 					update(this.$props.data.id, $event.target.innerText)
				// 				}

			},

			getref() {
				alert(JSON.stringify(this.$refs.a))
			}
		}
	}
</script>
