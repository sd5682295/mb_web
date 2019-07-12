<!-- <div id="28616ab411e54019a" class="node focus-active">
                    <div class="content-wrapper">
                        <div class="content-hotspot"></div>
                        <div class="bullet-wrapper">
                            <div class="bullet" data-id="28616ab411e54019a">
                                <div class="dot"></div>
                            </div>
                        </div>
                        <div class="content" data-id="28616ab411e54019a" spellcheck="false" autocapitalize="off" contenteditable="true">需求</div>
                        <div class="action-icon toggle" title="展开/收缩">
                                <i class="icon icon-minus"></i>
                            </div>
                        <div class="children"> -->


<template>
                <div id="node-wrapper" class="node-tree">
        
            <c-tree-item  v-for="item in data" :data="item"></c-tree-item>
        
    </div>
</template>
 
<script>


import cTreeItem from './tree-item'
export default {
    props: {
        data: {
            type: [Object, Array],
            required: true
        }
    },
    components: {
        cTreeItem
    }
}
</script>

/* <style scoped>
 @import './assets/css/ui-66bed85b8d.css'
 </style> */