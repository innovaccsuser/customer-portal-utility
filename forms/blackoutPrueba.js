function submitForm() {
	this.submit(this.ticket);
}

function uploadDocuments(){
	this.uploadDocument();
}

function removeFile(file){
	var index = this.files.indexOf(file);
	if(index > -1){
		this.files.splice(index, 1);
	}
}

function init(){
}