const testauthor = 'aaa'

function sdata(iid, iname, ipa, iindex){
	this.id = iid
	this.name = iname
	this.pa = ipa
	this.index = iindex
	this.updatetime = (Date.now())
	this.author = testauthor
}

module.exports = {
	sdata
}