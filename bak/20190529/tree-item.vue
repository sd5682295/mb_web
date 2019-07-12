<template>
  
		 <div id="28616ab411e54019a" class="node focus-active">
		    <div class="content-wrapper">
		        <div class="content-hotspot"></div>
		        <div class="bullet-wrapper">
		            <div class="bullet" data-id="28616ab411e54019a">
		                <div class="dot"></div>
		            </div>
		        </div>
		        <div  class="content" data-id="28616ab411e54019a" spellcheck="false" autocapitalize="off" contenteditable="true" @input="update" > {{ data.name }}</div>
		      <div class="action-icon toggle" @click="toggle" title="展开/收缩">
                                <i v-if="open" v-show="hasChild" class="icomoon icon-minus"></i>
								<i v-if="!open" v-show="hasChild" class="icomoon icon-plus"></i>
                            </div>
		        <div class="children"v-show="open" v-if="hasChild">
       
      
            <tree-item v-for="(item, index) in data.children" :data="item" :key="index"></tree-item>
        </div>
    </div>
	</div>
	
</template>
 
<script>
	import {hub} from'./hub.js'
	import {getdata,new_data,fdata,update} from '../datahandle/test.js' 
	
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
            open: true
        }
    },
    computed: {
        hasChild() {
            return this.data.children && this.data.children.length
        }
    },
    methods: {
        toggle() {
            if(this.hasChild) {
                this.open = !this.open
            }
        },
		
		update($event){
      
            if($event.target.innerText.indexOf("\n") >= 0){
                alert('ev')
                new_data(this.$props.data.pa,"")
            }else{
                update(this.$props.data.id,$event.target.innerText)
                }
			
            alert(`===tree-item.vue==emit`)
			this.$parent.$parent.$data.cdata = getdata('st')
			alert(JSON.stringify(this.$parent.$parent.$data.cdata))
		
			// this.$emit('dd')

		}
		// new_empty($event){
		// 	new_data(this.$props.data.pa,"")
		// 	this.$emit('sig','update')
		// }
// 		inputhandle($event){
// 		// alert(typeof $event.target.innerText) 
// 		new_data(this.$props.data.id,$event.target.innerText)
//         
// 		alert(`fdata:${JSON.stringify(fdata)}`)
// 		alert(`getdata:${JSON.stringify(getdata('st'))}`)
// // 	  	alert(this.$props.data.id)
// // 		alert(JSON.stringify(this.$data))
// 		this.$emit('inputdata','aa')

		
      
      // 拓展 如果想要只需要前100位数据
      // this.content = this.content.substring(0,45)
    }
		
    }
</script>
 
