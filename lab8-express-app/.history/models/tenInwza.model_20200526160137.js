module.exports = mongoose => {
	const sche = new mongoose.Schema ({
	name:  {type: String, required:true}
})
	const tenInwza = mongoose.model( "tenInwza",sche);
	return tenInwza
}