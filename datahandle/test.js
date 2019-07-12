var ydata = [{
		id: '1',
		name: 'a1',
		pa: 'st',
		index: 0,
		updatetime: 0,
		author: 'aaa'
	},
	{
		id: '2',
		name: 'a2',
		pa: 'st',
		index: 1,
		updatetime: 1,
		author: 'aaa'
	},
	{
		id: '3',
		name: 'a3',
		pa: 'st',
		index: 2,
		updatetime: 2,
		author: 'aaa'
	},
	{
		id: '4',
		name: 'a1a1',
		pa: '1',
		index: 0,
		updatetime: 3,
		author: 'aaa'
	},
	{
		id: '5',
		name: 'a1a2',
		pa: '1',
		index: 1,
		updatetime: 4,
		author: 'aaa'
	},
	{
		id: '6',
		name: 'a1a3',
		pa: '1',
		index: 2,
		updatetime: 5,
		author: 'aaa'
	},
	{
		id: '10',
		name: '',
		pa: '2',
		index: 3,
		updatetime: 6,
		author: 'aaa'
	},
	{
		id: '7',
		name: 'a2a1',
		pa: '2',
		index: 0,
		updatetime: 7,
		author: 'aaa'
	},
	{
		id: '8',
		name: 'a2a2',
		pa: '2',
		index: 1,
		updatetime: 8,
		author: 'aaa'
	},
	{
		id: '9',
		name: 'a2a3',
		pa: '2',
		index: 2,
		updatetime: 9,
		author: 'aaa'
	}

]

var sdata = require('./model.js')

var fdata = ydata

function alert_str(e) {
	return alert(JSON.stringify(e))
}
function log_str(e) {
	return console.log(JSON.stringify(e))
}

function lasttime() {
	var maxdata = 0
	for (i = 0; i < ydata.length; i++) {
		if (ydata[i]['updatetime'] > maxdata) {
			maxdata = ydata[i]['updatetime']
		}

	}
	return maxdata
}

function getdata(pa) {

	return ydata.filter(ddata => {
		if (!ddata.pa) {
			return []
		}
		if (ddata.pa === pa) {
			return ddata
		}
	}).map(ddata => {
		return {
			id: ddata.id,
			name: ddata.name,
			pa: ddata.pa,
			index: ddata.index,
			updatetime: ddata.updatetime,
			children: getdata(ddata.id)
		}
	}).sort((a, b) => {
		return a.index - b.index
	})
}

function add(idata) {
	let old_data = {}
	ydata.map(ddata => {
		if (ddata.pa === idata.pa) {
			if (ddata.index >= idata.index) {
				ddata.index += 1
			}
		}
	})
}

function cut(pa,index){
	var cache_data = {}
	
	ydata.map((ddata,index)=>{
		if(ddata.pa === pa){
			if(ddata.index===iindex){
				cache_data=index
			}
			if(ddata.index>iindex){
				ddata.index-=1
			}
		}
		
	})
	return cache_data
}

/* ---------------------------------------------------------

100数据处理/110基础函数
说明       ：        数据移位
@to_data   :		目标数据
@from_data :		移动数据

------------------------------------------------------------ */
function edit_data(from_data,new_pa,new_index){
	ydata.map(ddata=>{
		if(ddata.pa===new_pa){
			if(ddata.index>=new_index){
				ddata.index+=1
			}
		}
		if(ddata.pa === from_data.pa){
			if (ddata.index>from_data.index){
				ddata.index-=1
			}
		}
		if(ddata.id === from_data.id){
			ddata.pa = new_pa
			ddata.index = new_index
		}
	})
}

function data_draggable(odata,ndata){
	alert(`odata:${JSON.stringify(odata)},ndata:${JSON.stringify(ndata)}`)
	
	const new_pa = ndata.pa
	const new_index = ndata.index
	edit_data(odata,new_pa,new_index)
	// edit_data(ndata,new_pa,new_index)
	alert(JSON.stringify(ydata))
	
}

function new_data(iname,iid, iindex, open) {

	if (open) {
		var ndata = {
			id:ydata.length,
			name:iname,
			pa:iid,
			index:iindex,
			updatetime:Date.now(),
			author:'aaa'
		}
		add(ndata)
		ydata.push(ndata)

	} 
	else {
		var ndata = {
			id:ydata.length,
			name:iname,
			pa:iid,
			index:iindex+1,
			updatetime:Date.now(),
			author:'aaa'
		}
		add(ndata)
		ydata.push(ndata)

	}

}

function update(iid, iname) {
	iname = iname.replace(/^\s*/, "")
	// alert(`iname:${iname}iname`)
	ydata.map((ddata) => {
		if (ddata.id === iid) {
			ddata.name = iname
		}
		return ddata
	})
}

function data_tab(sel) {
	if (sel.index === 0) {
		return
	}

	let pev_data = ydata.filter(ddata => {
		if (ddata.pa === sel.pa) {
			if (ddata.index === (sel.index - 1)) {
				return ddata
			}
		}
	})[0]
	let num = ydata.filter(ddata => {
		if (ddata.pa === pev_data.id) {
			return ddata
		}
	}).length
	edit_data(sel,pev_data.id,num-1)
}

function data_stab(sel) {
	if (sel.pa === "st") {
		return
	}
	const parent_data = ydata.filter(ddata => {
		if (ddata.id === sel.pa) {
			return ddata
		}
	})[0]
	ydata.map(ddata => {
		if (ddata.pa === parent_data.pa) {
			if (ddata.index > parent_data.index) {
				ddata.index += 1
			}
		}
		if (ddata.pa === sel.pa) {
			if (ddata.index > sel.index) {
				ddata.index -= 1
			}
			if (ddata.id === sel.id) {
				ddata.pa = parent_data.pa
				ddata.index = parent_data.index + 1
			}



		}
	})
}

module.exports = {
	getdata,
	new_data,
	fdata,
	update,
	lasttime,
	data_tab,
	data_stab,
	data_draggable
}
