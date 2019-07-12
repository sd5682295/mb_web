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
var myData = [
    {
        'name': 'Web秀',
        'children': [{
            'name': 'web前端',
            'children': [{
                'name': 'CSS'
            }, {
                'name': 'JavaScript'
            }, {
                'name': 'Vue'
            }, {
                'name': '小程序'
            }, {
                'name': 'Three.js'
            }]
        }, {
            'name': '服务器'
        }, {
            'name': '工具类'
        }]
    }, {
        'name': '今日头条',
        'children': [{
            'name': '图片'
        }, {
            'name': '新闻',
            'children': []
        }]
    }, {
        'name': 'Angular'
    }
];

 
import cTree from './tree'
import myheader from './header.vue'
export default {
    components: {
        cTree,
        myheader
    },
    data() {
        return {
            data: myData
        }
    }
}
</script>
/* <style scoped>
 @import './assets/css/ui-66bed85b8d.css'

 

</style> */