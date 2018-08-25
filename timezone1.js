var para = document.createElement("p");
para.id="times";
document.body.appendChild(para);



window.setInterval("print_d()",1000); // 1000ms
		function date_set(country,tz) {
			var d,utc,up_time;
			d = new Date();
			utc = d.getTime() + (d.getTimezoneOffset()*60000);
			up_time = new Date(utc + (3600000*tz));
			return "Time in " +country+ " is: " + up_time.toLocaleString();
		}
		function print_d() {
			var times = document.getElementById("times");
			times.innerHTML = date_set("Vijayawada","+5.5")+"<br>";
			times.innerHTML += date_set("Singapore","+8")+"<br>";
			times.innerHTML += date_set("Samoa","-11")+"<br>";
			times.innerHTML += date_set("Honolulu","-10")+"<br>";
			times.innerHTML += date_set("Anchorage","-8")+"<br>";
			times.innerHTML += date_set("Las Vegas","-7")+"<br>";
			times.innerHTML += date_set("Costa Rica","-6")+"<br>";
			times.innerHTML += date_set("Austin","-5")+"<br>";
			times.innerHTML += date_set("Atlanta","-4")+"<br>";
			times.innerHTML += date_set("Bermuda","-3")+"<br>";
			times.innerHTML += date_set("St. Johns","-2.5")+"<br>";
			times.innerHTML += date_set("Cape verde","-1")+"<br>";
			times.innerHTML += date_set("Freetown","0")+"<br>";
			times.innerHTML += date_set("Algiers","+1")+"<br>";
			times.innerHTML += date_set("Barcelona","+2")+"<br>";
			times.innerHTML += date_set("Athens","+3")+"<br>";
			times.innerHTML += date_set("Dubai","+4")+"<br>";
			times.innerHTML += date_set("Kabul","+4.5")+"<br>";
			times.innerHTML += date_set("Karachi","+5")+"<br>";
			times.innerHTML += date_set("Kathmandu","+5.75")+"<br>";
			times.innerHTML += date_set("Dhaka","+6")+"<br>";
			times.innerHTML += date_set("Rangoon","+6.5")+"<br>";
			times.innerHTML += date_set("Bangkok","+7")+"<br>";
			times.innerHTML += date_set("Beijing","+8")+"<br>";
			times.innerHTML += date_set("Pyongyang","+8.5")+"<br>";
			times.innerHTML += date_set("Tokya","+9")+"<br>";
			times.innerHTML += date_set("Darwin","+9.5")+"<br>";
			times.innerHTML += date_set("Sydney","+10")+"<br>";
			times.innerHTML += date_set("Noumea","+11")+"<br>";
			times.innerHTML += date_set("Fiji","+12")+"<br>";
			times.innerHTML += date_set("Kritimati","+14")+"<br>";
		}