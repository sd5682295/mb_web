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
 
import cTree from './tree'
import myheader from './zzyheader.vue'
import {getdata} from '../datahandle/test'
export default {
    components: {
        cTree,
        myheader
    },
    data() {
        return {
            data: getdata('st')
        }
    }
}
</script>
