<template>
	<div id="node-wrapper" class="node-tree">
		<draggable :group='{name: "menu", put: true}' @add='addCollection' @update='sortCollection' :move="getddata" :value="data">

			<c-tree-item v-for="item in data" :data="item" :key="item.index"></c-tree-item>
		</draggable>

	</div>
</template>

<script>
	import cTreeItem from './tree-item'
	import draggable from 'vuedraggable'
	export default {
		props: {
			data: {
				type: [Object, Array],
				required: true,

			}
		},

		components: {
			cTreeItem,
			draggable
		},
		methods: {
			getddata: function(evt) {
					alert(Object.keys(evt.list))
				}
				//       alert(`evt.item=${JSON.stringify(evt.item)} //可以知道拖动的本身
				//       evt.to =${JSON.stringify(evt.to)}   // 可以知道拖动的目标列表
				//       evt.from =${JSON.stringify(evt.from)} // 可以知道之前的列表
				//       evt.oldIndex =${evt.oldIndex} // 可以知道拖动前的位置
				//       evt.newIndex =${evt.newIndex} // 可以知道拖动后的位置`)

				,
			getddata(evt) {
				alert(evt.draggedContext.element.id)
			},
			datadragEnd(evt) {
				alert('拖动前的索引 :' + evt.oldIndex)
				alert('拖动后的索引 :' + evt.newIndex)
				alert(this.tags)
			}
		}
	}
</script>
