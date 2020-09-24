class Photo {
	constructor(iphoto_url, iphoto_photographerName, iphoto_title, iphoto_description) {
		this.url = iphoto_url;			this.photographer = iphoto_photographerName;
		this.title = iphoto_title;		this.description = iphoto_description;
	}
	makeAnchor(){
		return `<a href="${this.url}">${this.photographer}: ${this.description}</a>`;
	}
}
var photos = [];
function AddUnsplashPhoto(iphoto_unsplashID, iphoto_photographerName, iphoto_title, iphoto_description ) {
	photos.push(new Photo(`https://unsplash.com/photos/${iphoto_unsplashID}`, iphoto_photographerName, iphoto_title, iphoto_description))
}