<template>
    <div class="tree-menu" >
			<zzyheader></zzyheader>
                <div id="scroll-content">
        <div id="paper">
            <div class="paper-header">
                <div class="paper-name">
                    <input type="text" placeholder="无标题" maxlength="200">
                </div>
                <div id="dir" class="paper-dir">

                </div>
            </div>

           
               <cTree :data=cdata></cTree>

                </div>

            </div>
        
    </div>
</template>
<script>

import {getdata,new_data,fdata} from '../datahandle/test.js' 
import {hub} from './hub.js'
import cTree from './tree'
import zzyheader from './zzyheader.vue'

var ydata = [
    {id:'1',name:'a1',pa:'st',index:0,updatetime:0,author:'aaa'},
    {id:'2',name:'a2',pa:'st',index:1,updatetime:1,author:'aaa'},
    {id:'3',name:'a3',pa:'st',index:2,updatetime:2,author:'aaa'},
    {id:'4',name:'a1a1',pa:'1',index:0,updatetime:3,author:'aaa'},
    {id:'5',name:'a1a2',pa:'1',index:1,updatetime:4,author:'aaa'},
    {id:'6',name:'a1a3',pa:'1',index:2,updatetime:5,author:'aaa'},
    {id:'10',name:'',pa:'2',index:3,updatetime:6,author:'aaa'},
    {id:'7',name:'a2a1',pa:'2',index:0,updatetime:7,author:'aaa'},
    {id:'8',name:'a2a2',pa:'2',index:1,updatetime:8,author:'aaa'},
    {id:'9',name:'a2a3',pa:'2',index:2,updatetime:9,author:'aaa'}

]

export default {
    components: {
        cTree,
        zzyheader
		},
    data(){
		return {cdata:fdata}
		},
// 		mounted() {
// 			this.update()
// 		},
// 		created() {
// 			hub.$on('dd',this.update)
// 		},

// 	methods:{
// 		// 
// 	updated:function(){
// 		this.$on('dd',()=>{this.cdata = getdata('st')
// 		alert(`cdata:${JSON.stringify(this.cdata)}`)})
// 		
// 	}
// 
// 
// },
}

</script>
