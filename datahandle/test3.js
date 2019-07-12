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

var one_data = {
	id: '11',
	name: 'a2a5aa',
	pa: '2',
	index: 2,
	updatetime: 9,
	author: 'aaa'
}

function cut(pa,iindex){
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
// 
console.log(cut('st',1))
console.log(ydata[1])
console.log(JSON.stringify(ydata))
