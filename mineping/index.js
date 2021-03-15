function updateText() {
	ipAddress = document.getElementById('ipInput').value;
	if (ipAddress !== "") {
		fetch(`https://api.mcsrvstat.us/2/${ipAddress}`)
		.then(data => {return data.json()})
		.then(response => {
			console.log(`Server ${ipAddress} pinged.`)
			document.getElementById('output1').innerHTML = replaceMOTDText(response.motd.html[0])
			document.getElementById('output2').innerHTML = replaceMOTDText(response.motd.html[1])
		});
	}
}
/**
 * @function Replaces spaces with &nbsp's in order to allow for MOTDs to be centered.
 * @param text What text to replace
**/
function replaceMOTDText(text) {
	return text
	//return text.replace(' ', '&nbsp;')
}