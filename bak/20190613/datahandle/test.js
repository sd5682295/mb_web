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


var author = 'aaa'
var fdata = ydata

function alert_str(e) {
	return alert(JSON.stringify(e))
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
		// console.log(`--ddata--${ddata}`)
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

function sdata(iid,iname,ipa,iindex){
	this.id = iid
	this.name = iname
	this.pa = ipa
	this.index = iindex
	this.updatetime=(Date.now())
	this.author = author
}


function new_data(iid, iname, open, iindex) {

	if (open) {
		alert(`open--${open}--iid--${iid}--`)
		ydata.map((ddata => {
			if (ddata.pa === iid) {
				ddata.index += 1
			}
		}))
		ydata.push(
		new sdata(ydata.length,iname,iid,0, Date.now(),author)
// 		{
// 			id: (ydata.length),
// 			name: iname,
// 			pa: iid,
// 			index: 0,
// 			updatetime: lasttime() + 1,
// 			author: 'aaa'
// 		}
		)
	} else {
		alert(`open--${open}--iid--${iid}--`)
		ydata.map((ddata => {
			if (ddata.pa === iid) {
				if (ddata.index > iindex) {
					ddata.index += 1
				}

			}
		}))
		ydata.push({
			id: (ydata.length),
			name: iname,
			pa: iid,
			index: iindex + 1,
			updatetime: lasttime() + 1,
			author: 'aaa'
		})
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

	const pev_data = ydata.filter(ddata => {
		if (ddata.pa === sel.pa) {
			if (ddata.index === (sel.index - 1)) {
				return ddata
			}
		}
	})[0]
	const num = ydata.filter(ddata => {
		if (ddata.pa === pev_data.id) {
			return ddata
		}
	}).length
	ydata.map(ddata => {
		if (ddata.pa === sel.pa) {
			if (ddata.id === sel.id) {
				ddata.pa = pev_data.id
				ddata.index = num
			}
			if (ddata.index > sel.index) {
				ddata.index -= 1
			}
		}
	})
}

function data_ctab(sel) {
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
	data_ctab
}
