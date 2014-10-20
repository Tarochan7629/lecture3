<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<script>
function frac(bunshi,bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};

var add = function(a, b){
	var bunshi;
	var bunbo;
	
	if(Number .isInteger(a)){
		a = frac(a, 1);
}
	if(Number .isInteger(b)){
		b = frac(b, 1);
}

	if(a.bunbo != b.bunbo){
		bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
		bunbo = a.bunbo * b. bunbo;
	}
	else{
		bunshi = a.bunshi + b.bunshi;
		bunbo = a.bunbo;
	}
	
	var ansewer = frac(bunshi, bunbo);
	return answer;
};
</script>
</body>
</html>
