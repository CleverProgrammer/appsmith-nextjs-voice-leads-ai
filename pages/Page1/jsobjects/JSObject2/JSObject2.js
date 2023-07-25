export default {

	myVar1: [],
	myVar2: {},
	myFun1 () {
		console.log(AudioRecorder1.dataURL)
		return {url: AudioRecorder1.dataURL, blob: AudioRecorder1.blobURL}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}