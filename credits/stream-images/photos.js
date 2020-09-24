class Photo {
	constructor(iphoto_url, iphoto_photographerName, iphoto_title, iphoto_location) {
		this.url = iphoto_url;			this.photographer = iphoto_photographerName;
		this.title = iphoto_title;		this.location = iphoto_location;
	}
	makeAnchor(){
		return `<a href="${this.url}">${this.photographer}: ${this.title}, ${this.location}</a>`;
	}
}
var photos = [];
function AUSP(iphoto_unsplashID, iphoto_photographerName, iphoto_title, iphoto_location ) {
	photos.push(new Photo(`https://unsplash.com/photos/${iphoto_unsplashID}`, iphoto_photographerName, iphoto_title, iphoto_location))
}

AUSP('twukN12EN7c', 'Simon Berger', 'landscape photography of mountains', 'Altmünster am Traunsee, Neukirchen bei Altmünster, Oberösterreich, Österreich')
AUSP('RwHv7LgeC7s', 'Johannes Plenio', 'forest heat by sunbeam', 'Altmünster am Traunsee, Neukirchen bei Altmünster, Oberösterreich, Österreich')
AUSP('wAACxuRfvUE', 'Daniel Mirlea', 'snow covered mountain during daytime', "Unknown")
AUSP('mCR10j_B6sM', 'Dimitri Iakymuk', 'purple flower field under blue sky during daytime photo', 'Lavande fileds')