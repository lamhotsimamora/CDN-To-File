<?php 

function _getFile($url){
	return file_get_contents($url);
}

function _writeFile($filename,$data){
	$myfile = fopen($filename, "w") or die("Unable to open file!");
	$txt = $data;
	return fwrite($myfile, $txt);
}


if (isset($_POST) && isset($_POST['url']))
{
	$url = $_POST['url'];

	$data = _getFile($url);

	$filename =  substr(strrchr($url, "/"), 1);

	if ($filename==='')
	{
		$filename = 'example1.html';
	}

	$result  = _writeFile('files/'.$filename,$data);

	echo ($result);
}else{
	echo '';
}