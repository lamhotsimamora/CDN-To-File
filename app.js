$app = new Vue({
	el : '#app',
	data : {
		url : null,
		name_btn : 'Get File',
		btn_disabled : false,
		response : null
	},
	methods : {
		clear : function(){
			this.url = null
		},
		makeFile: function(){
			  if (this.url == null || this.url === '' || this.url.trim()==='')
			  {
			  	this.$refs.url.focus();
			  	return;
			  }
			  this.response = null;
			  this.btn_disabled = true;
			  this.name_btn = 'Loading...';
			  __({
			  	url : 'http://localhost/CDN-To-File/system.php',
			  	method : 'post',
			  	data : {
			  		url : this.url
			  	}
			  }).request($response=>{
			  	   this.btn_disabled = false;
			  	   this.name_btn = 'Get File';
			  	   if ($response)
			  	   {
			  	   	    this.response = $response
			  	   }
			  });
		}
	}
})