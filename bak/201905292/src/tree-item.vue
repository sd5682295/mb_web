<template>
  
		 <div id="28616ab411e54019a" class="node focus-active">
		    <div class="content-wrapper">
		        <div class="content-hotspot"></div>
		        <div class="bullet-wrapper">
		            <div class="bullet" data-id="28616ab411e54019a">
		                <div class="dot"></div>
		            </div>
		        </div>
		        <div class="content" data-id="28616ab411e54019a" spellcheck="false" autocapitalize="off" contenteditable="true"> {{ data.name }}</div>
		     <div class="action-icon toggle" @click="toggle">
		         <em v-if="hasChild" class="icon">{{open ? '-' : '+'}}</em>
		         <em v-if="!hasChild" class="icon file-text"></em>
		        
		     </div>
		        <div class="children"v-show="open" v-if="hasChild">
       
      
            <tree-item v-for="(item, index) in data.children" :data="item" :key="index"></tree-item>
        </div>
    </div>
	</div>
	
</template>
 
<script>
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
            open: false
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
        }
    }
}
</script>
 
