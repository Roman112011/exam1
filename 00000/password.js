    document.getElementById('check').onclick = function(){
    let password = document.getElementById('password').value;

     if (password == 'Xiaomi18112011'){
		window.location.href="temasecret.html";
		alert('вітаю на сайті');
	 }
     else alert('невірний пароль')
}