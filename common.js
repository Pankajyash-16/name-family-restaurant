/* Family Restaurant – shared script (menu data, cart, theme, header, footer, checkout) */
var NAME="Family Restaurant",PHONE="+918826417093",PHONE_SHOW="+91 88264 17093",WA="918826417093";
var EMAIL="priyankagoswami30122007@gmail.com";
var ADDRESS="Jagat Farm, Greater Noida, Uttar Pradesh";
var COLLEGE="NIET – Noida Institute of Engineering and Technology, Greater Noida";
var MAPS="https://www.google.com/maps/search/?api=1&query=Jagat+Farm+Greater+Noida";
 
var MENU=[
{n:"Veg Family Feast (serves 4)",c:"Family Combos",k:"fc",v:1,p:899,e:"🍽️",d:"Paneer tikka, dal makhani, veg biryani, naan, dessert",s:1},
{n:"Non-Veg Family Feast (serves 4)",c:"Family Combos",k:"fc",v:0,p:1199,e:"🍗",d:"Chicken tikka, butter chicken, biryani, naan, dessert",s:1},
{n:"Kids Fun Meal",c:"Family Combos",k:"fc",v:1,p:299,e:"🧒",d:"Mini pizza, fries, juice and a sweet treat",s:1},
{n:"Family Dessert Platter",c:"Family Combos",k:"fc",v:1,p:349,e:"🍨",d:"Brownie, gulab jamun, tiramisu and ice cream",s:1},
{n:"Family Thali (serves 4)",c:"Family Combos",k:"fc",v:1,p:799,e:"🍱",d:"Paneer, dal, mixed veg, rice, roti, raita and sweet",s:1},
{n:"Biryani Family Pack (serves 4)",c:"Family Combos",k:"fc",v:0,p:849,e:"🍛",d:"Large chicken dum biryani with raita and salad",s:1},
{n:"Veg Biryani Family Pack (serves 4)",c:"Family Combos",k:"fc",v:1,p:649,e:"🍚",d:"Large veg dum biryani with raita and salad",s:1},
{n:"Pizza Party Pack",c:"Family Combos",k:"fc",v:1,p:849,e:"🍕",d:"Three large pizzas with garlic bread and a cold drink",s:1},
{n:"Chinese Family Combo (serves 4)",c:"Family Combos",k:"fc",v:1,p:749,e:"🥡",d:"Noodles, fried rice, chilli paneer, momos and soup",s:1},
{n:"Mixed Grill Platter (serves 4)",c:"Family Combos",k:"fc",v:0,p:1399,e:"🍖",d:"Chicken tikka, seekh kebab, fish tikka and naan",s:1},
{n:"Paneer Butter Masala Family Pack",c:"Family Combos",k:"fc",v:1,p:499,e:"🥘",d:"Large serving of rich paneer gravy with 6 naan",s:1},
{n:"Paneer Tikka",c:"Indian",k:"in",v:1,p:220,e:"🍢",d:"Smoky tandoori paneer with mint chutney"},
{n:"Butter Chicken",c:"Indian",k:"in",v:0,p:340,e:"🍗",d:"Creamy tomato gravy served with naan",b:1},
{n:"Dal Makhani",c:"Indian",k:"in",v:1,p:240,e:"🍲",d:"Black lentils slow cooked overnight"},
{n:"Veg Biryani",c:"Indian",k:"in",v:1,p:220,e:"🍚",d:"Fragrant dum biryani with raita"},
{n:"Chicken Biryani",c:"Indian",k:"in",v:0,p:320,e:"🍛",d:"Hyderabadi style dum biryani"},
{n:"Masala Dosa",c:"Indian",k:"in",v:1,p:150,e:"🥞",d:"Crispy dosa, potato masala and sambar"},
{n:"Butter Naan",c:"Indian",k:"in",v:1,p:50,e:"🥖",d:"Fresh from the tandoor"},
{n:"Margherita Pizza",c:"Italian",k:"it",v:1,p:280,e:"🍕",d:"Wood-fired with basil and mozzarella",b:1},
{n:"Penne Alfredo",c:"Italian",k:"it",v:1,p:260,e:"🍝",d:"Creamy white sauce pasta"},
{n:"Chicken Lasagna",c:"Italian",k:"it",v:0,p:340,e:"🍝",d:"Layered pasta, cheese and chicken ragu"},
{n:"Garlic Bread",c:"Italian",k:"it",v:1,p:150,e:"🥖",d:"Toasted with garlic butter and herbs"},
{n:"Tiramisu",c:"Italian",k:"it",v:1,p:180,e:"🍰",d:"Coffee soaked classic dessert"},
{n:"Veg Hakka Noodles",c:"Chinese",k:"cn",v:1,p:190,e:"🍜",d:"Wok tossed noodles with fresh vegetables"},
{n:"Veg Momos",c:"Chinese",k:"cn",v:1,p:150,e:"🥟",d:"Steamed dumplings with spicy dip",b:1},
{n:"Chicken Manchurian",c:"Chinese",k:"cn",v:0,p:260,e:"🥡",d:"Crispy chicken in soy garlic sauce"},
{n:"Chilli Paneer",c:"Chinese",k:"cn",v:1,p:230,e:"🌶️",d:"Indo-Chinese paneer with capsicum"},
{n:"Veg Spring Rolls",c:"Chinese",k:"cn",v:1,p:160,e:"🌯",d:"Crunchy rolls with sweet chilli sauce"},
{n:"Veg Tacos",c:"Mexican",k:"mx",v:1,p:200,e:"🌮",d:"Beans, salsa, corn and cheese"},
{n:"Chicken Burrito",c:"Mexican",k:"mx",v:0,p:280,e:"🌯",d:"Rice, chicken, beans and jalapeño"},
{n:"Nachos Supreme",c:"Mexican",k:"mx",v:1,p:210,e:"🧀",d:"Loaded with cheese and guacamole"},
{n:"Veg Maki Roll",c:"Japanese",k:"jp",v:1,p:280,e:"🍙",d:"Cucumber, avocado and sesame"},
{n:"Salmon Nigiri",c:"Japanese",k:"jp",v:0,p:380,e:"🍣",d:"Fresh salmon on seasoned rice"},
{n:"Chicken Ramen",c:"Japanese",k:"jp",v:0,p:340,e:"🍜",d:"Rich broth, soft egg and noodles"},
{n:"Thai Green Curry",c:"Thai",k:"th",v:1,p:290,e:"🥘",d:"Coconut curry with jasmine rice"},
{n:"Pad Thai",c:"Thai",k:"th",v:0,p:300,e:"🍤",d:"Rice noodles, prawns and peanuts"},
{n:"Veg Tom Yum Soup",c:"Thai",k:"th",v:1,p:180,e:"🍲",d:"Hot and sour soup with lemongrass"},
{n:"Mango Sticky Rice",c:"Thai",k:"th",v:1,p:200,e:"🥭",d:"Sweet coconut rice with ripe mango"},
{n:"Falafel Wrap",c:"Middle Eastern",k:"me",v:1,p:190,e:"🧆",d:"Falafel, hummus and fresh salad"},
{n:"Chicken Shawarma",c:"Middle Eastern",k:"me",v:0,p:220,e:"🥙",d:"Grilled chicken with garlic sauce",b:1},
{n:"Hummus Platter",c:"Middle Eastern",k:"me",v:1,p:180,e:"🥣",d:"Creamy hummus with pita and olive oil"},
{n:"Cheese Burger",c:"American",k:"us",v:0,p:250,e:"🍔",d:"Juicy patty, cheddar and fries"},
{n:"Veggie Burger",c:"American",k:"us",v:1,p:220,e:"🍔",d:"Crispy veg patty, lettuce and mayo"},
{n:"Chicken Wings",c:"American",k:"us",v:0,p:290,e:"🍗",d:"Spicy buffalo wings with ranch dip"},
{n:"Loaded Fries",c:"American",k:"us",v:1,p:140,e:"🍟",d:"Crispy fries with cheese sauce"},
{n:"Mango Lassi",c:"Drinks & Sweets",k:"sw",v:1,p:90,e:"🥛",d:"Thick, creamy and chilled"},
{n:"Masala Chai",c:"Drinks & Sweets",k:"sw",v:1,p:40,e:"☕",d:"Ginger and cardamom tea"},
{n:"Cold Coffee",c:"Drinks & Sweets",k:"sw",v:1,p:120,e:"🥤",d:"Blended with ice cream"},
{n:"Fresh Lime Soda",c:"Drinks & Sweets",k:"sw",v:1,p:70,e:"🍋",d:"Sweet or salted"},
{n:"Chocolate Brownie",c:"Drinks & Sweets",k:"sw",v:1,p:140,e:"🍫",d:"Warm brownie with ice cream"},
{n:"Gulab Jamun",c:"Drinks & Sweets",k:"sw",v:1,p:90,e:"🍡",d:"Soft, warm and syrupy"}
];
var COUPONS={WELCOME20:{t:"pct",v:20,min:0},FEAST150:{t:"flat",v:150,min:800},SUNDAY25:{t:"pct",v:25,min:0,day:0}};
 
/* helpers */
var mem={};
var store={
 get:function(k,d){try{var x=localStorage.getItem(k);return x===null?(k in mem?mem[k]:d):JSON.parse(x)}catch(e){return k in mem?mem[k]:d}},
 set:function(k,v){mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function okPhone(p){return /^[6-9]\d{9}$/.test(String(p).replace(/[\s-]/g,""))}
function setMsg(id,t,k){var e=$(id);if(e){e.textContent=t;e.className="msg "+(k||"")}}
function toast(t){var e=$("toast");e.textContent=t;e.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(function(){e.style.display="none"},2200)}
function newId(p){return p+Math.floor(10000+Math.random()*90000)}
function waLink(text){return "https://wa.me/"+WA+"?text="+encodeURIComponent(text)}
function niceDate(d){try{return new Date(d+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})}catch(e){return d}}
function isSunday(){return new Date().getDay()===0}
 
var cart=store.get("fr_cart",{}),coupon=store.get("fr_coupon",null);
 
/* images */
var IMGQ={"veg-family-feast-serves-4":"indian,thali","non-veg-family-feast-serves-4":"tandoori,chicken","kids-fun-meal":"kids,meal","family-dessert-platter":"dessert,platter","family-thali-serves-4":"indian,thali","biryani-family-pack-serves-4":"chicken,biryani","veg-biryani-family-pack-serves-4":"veg,biryani","pizza-party-pack":"pizza","chinese-family-combo-serves-4":"chinese,food","mixed-grill-platter-serves-4":"mixed,grill","paneer-butter-masala-family-pack":"paneer,butter,masala","veg-biryani":"veg,biryani","veg-maki-roll":"sushi,roll","hummus-platter":"hummus","veggie-burger":"veggie,burger","loaded-fries":"fries","fresh-lime-soda":"lemonade","masala-chai":"chai,tea","veg-momos":"momos","veg-tacos":"tacos","veg-hakka-noodles":"hakka,noodles","veg-spring-rolls":"spring,rolls","veg-tom-yum-soup":"tom,yum,soup"};
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function imgq(m){var s=slug(m.n);if(IMGQ[s])return IMGQ[s];return m.n.toLowerCase().replace(/[^a-z ]/g,"").split(" ").filter(function(w){return w&&["veg","non","serves","family","pack"].indexOf(w)<0}).join(",")}
var USE_ONLINE=true; /* set to false to show the emoji instead of an online sample photo when your own photo is missing */
var EXTS=["jpg","png","jpeg","webp"];
function pimg(i){var m=MENU[i],s=slug(m.n);return '<img loading="lazy" decoding="async" width="400" height="300" alt="'+m.n+'" src="images/'+s+'.jpg" data-s="'+s+'" data-alt="https://loremflickr.com/400/300/'+imgq(m)+'/all?lock='+(i+1)+'" onload="this.classList.add(\'ld\')" onerror="imgFail(this)">'}
function imgFail(el){var t=+(el.getAttribute("data-t")||0)+1;el.setAttribute("data-t",t);if(t<EXTS.length){el.src="images/"+el.getAttribute("data-s")+"."+EXTS[t]}else if(t===EXTS.length&&USE_ONLINE){el.src=el.getAttribute("data-alt")}else{el.style.display="none"}}
/* end images */
 
/* cart logic */
function chg(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];if(d>0)toast(MENU[i].n+" added to cart");refresh()}
function subtotal(){var s=0;for(var i in cart)s+=MENU[i].p*cart[i];return s}
function couponOk(c){var x=COUPONS[c];return !!x&&subtotal()>=x.min&&(x.day===undefined||x.day===new Date().getDay())}
function discount(){if(!coupon||!couponOk(coupon))return 0;var c=COUPONS[coupon],s=subtotal();return Math.min(s,c.t==="pct"?Math.round(s*c.v/100):c.v)}
function delivery(){var s=subtotal();return s&&s<500?40:0}
function total(){return subtotal()-discount()+delivery()}
function ctl(i){var q=cart[i]||0;return q?'<div class="qt"><button onclick="chg('+i+',-1)" aria-label="Decrease quantity">−</button><b>'+q+'</b><button onclick="chg('+i+',1)" aria-label="Increase quantity">+</button></div>':'<button class="add" onclick="chg('+i+',1)">Add to Cart</button>'}
function card(i){var m=MENU[i];return '<article class="it"><div class="pic c-'+m.k+'"><span class="em">'+m.e+'</span>'+pimg(i)+(m.s?'<span class="bs sun">Sunday Special</span>':m.b?'<span class="bs">Bestseller</span>':'')+'</div><h3><span class="tg '+(m.v?'vg':'nv')+'" title="'+(m.v?'Veg':'Non-veg')+'"></span>'+m.n+'</h3><p>'+m.d+'</p><div class="rw"><span class="pr">₹'+m.p+'</span><span data-ctl="'+i+'">'+ctl(i)+'</span></div></article>'}
 
function refresh(){
 var ids=Object.keys(cart),n=0;ids.forEach(function(i){n+=cart[i]});
 if(coupon&&!couponOk(coupon)){setMsg("cmsg","Coupon "+coupon+" is no longer valid for this cart and was removed.","bad");coupon=null}
 store.set("fr_cart",cart);store.set("fr_coupon",coupon);
 $("cnt").textContent=n;
 $("cl").innerHTML=ids.length?ids.map(function(i){return '<div class="ci"><span class="n">'+MENU[i].e+' '+MENU[i].n+'</span><div class="qt"><button onclick="chg('+i+',-1)" aria-label="Decrease quantity">−</button><b>'+cart[i]+'</b><button onclick="chg('+i+',1)" aria-label="Increase quantity">+</button></div><b>₹'+MENU[i].p*cart[i]+'</b></div>'}).join(""):'<p class="sm" style="margin-top:20px">Your cart is empty. <a href="menu.html" style="color:var(--acc);font-weight:700">Browse the menu</a></p>';
 $("sm").innerHTML='<div><span>Subtotal</span><span>₹'+subtotal()+'</span></div><div><span>Discount'+(coupon?' ('+coupon+')':'')+'</span><span>− ₹'+discount()+'</span></div><div><span>Delivery</span><span>'+(delivery()?'₹'+delivery():'Free')+'</span></div><div class="tt"><span>Total</span><span>₹'+total()+'</span></div>';
 var sb=subtotal(),fd=$("fdp");
 fd.innerHTML=!sb?"":sb>=500?"🎉 You get free delivery on this order!":'Add ₹'+(500-sb)+' more for free delivery<div class="b2"><i style="width:'+Math.round(sb/5)+'%"></i></div>';
 document.querySelectorAll("[data-ctl]").forEach(function(e){e.innerHTML=ctl(e.getAttribute("data-ctl"))});
}
function applyCoupon(code){
 var c=(code||$("cin").value).trim().toUpperCase();
 if(!COUPONS[c])return setMsg("cmsg","This coupon code is not valid.","bad");
 if(COUPONS[c].day!==undefined&&COUPONS[c].day!==new Date().getDay())return setMsg("cmsg","This offer is valid only on Sundays.","bad");
 if(subtotal()<COUPONS[c].min)return setMsg("cmsg","This coupon needs a minimum order of ₹"+COUPONS[c].min+".","bad");
 coupon=c;refresh();setMsg("cmsg","Coupon applied successfully.","ok")}
function toggleCart(o){$("dr").classList.toggle("open",o);$("sh").classList.toggle("open",o)}
function openCheckout(){if(!subtotal())return setMsg("cmsg","Add something to your cart first.","bad");toggleCart(false);$("ck").classList.add("open")}
function closeModal(id){$(id).classList.remove("open")}
function showSlip(icon,title,text,html,link){
 $("dnI").textContent=icon;$("dnT").textContent=title;$("dnP").textContent=text;
 $("dnS").innerHTML=html;
 $("dnL").innerHTML=link?'<a class="btn wa" target="_blank" rel="noopener" href="'+link.href+'">'+esc(link.label)+'</a>':"";
 $("dn").classList.add("open")}
function copyCode(el){var c=el.getAttribute("data-code");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(c).catch(function(){});if($("cin"))$("cin").value=c;toast("Code "+c+" copied")}
 
/* bill and slip helpers */
function digits(p){return String(p).replace(/\D/g,"").slice(-10)}
function waTo(phone,text){return "https://wa.me/91"+digits(phone)+"?text="+encodeURIComponent(text)}
function fdt(ts){try{return new Date(ts).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return String(ts)}}
function sr(a,b){return '<div class="sr"><span>'+esc(a)+'</span><b>'+esc(b)+'</b></div>'}
function slipHead(t){return '<div class="sp-h"><b>'+NAME+'</b><span>'+ADDRESS+'</span><span>Phone: '+PHONE_SHOW+'</span><div class="sp-t">'+t+'</div></div>'}
function slipFoot(t){return '<div class="sp-f">'+t+'<br>'+PHONE_SHOW+' · '+EMAIL+'</div>'}
 
function orderSlip(o){
 var rows=o.lines.map(function(l){return '<tr><td>'+esc(l.n)+'</td><td>'+l.q+'</td><td>'+l.p+'</td><td>'+l.p*l.q+'</td></tr>'}).join("");
 return '<div class="slip">'+slipHead("ORDER BILL")+sr("Bill no",o.id)+sr("Date",fdt(o.ts))+sr("Customer",o.name)+sr("Mobile","+91 "+o.phone)+sr("Address",o.address)+sr("Payment",o.pay)+
 '<table><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amt</th></tr>'+rows+'</table>'+
 '<div class="sp-tot">'+sr("Subtotal","₹"+o.sub)+(o.disc?sr("Discount ("+o.coupon+")","− ₹"+o.disc):"")+sr("Delivery",o.del?"₹"+o.del:"Free")+'<div class="sr sp-g"><span>TOTAL</span><b>₹'+o.total+'</b></div></div>'+
 slipFoot("Thank you for ordering! Estimated delivery: 30–40 minutes.")+'</div>'}
function orderText(o){
 var t="*"+NAME+"*\nORDER BILL\nBill no: "+o.id+"\nDate: "+fdt(o.ts)+"\nCustomer: "+o.name+"\nMobile: "+o.phone+"\nAddress: "+o.address+"\n\n";
 o.lines.forEach(function(l){t+=l.n+" x"+l.q+" = ₹"+l.p*l.q+"\n"});
 t+="\nSubtotal: ₹"+o.sub+(o.disc?"\nDiscount ("+o.coupon+"): -₹"+o.disc:"")+"\nDelivery: "+(o.del?"₹"+o.del:"Free")+"\n*TOTAL: ₹"+o.total+"*\nPayment: "+o.pay+"\n\nThank you for ordering! Estimated delivery: 30-40 minutes.\n"+NAME+", "+ADDRESS+"\nPhone: "+PHONE_SHOW;
 return t}
function showOrder(o,fresh){
 showSlip(fresh?"🎉":"🧾",fresh?"Order placed successfully":"Order bill",
  fresh?"Your bill is shown below. You can print it or, if you like, send it to the customer's WhatsApp.":"Here is the bill for this order.",
  orderSlip(o),{href:waTo(o.phone,orderText(o)),label:"Send to +91 "+o.phone+" on WhatsApp (optional)"})}
function placeOrder(e){
 e.preventDefault();
 var nm=$("cn").value.trim(),ad=$("ca").value.trim(),ph=$("cp").value.trim();
 if(!nm||!ad)return setMsg("ckMsg","Please enter your name and delivery address.","bad");
 if(!okPhone(ph))return setMsg("ckMsg","Please enter a valid 10-digit mobile number.","bad");
 var lines=Object.keys(cart).map(function(i){return {n:MENU[i].n,q:cart[i],p:MENU[i].p}});
 var o={id:newId("FR"),name:nm,phone:digits(ph),address:ad,lines:lines,sub:subtotal(),disc:discount(),coupon:coupon,del:delivery(),total:total(),pay:$("cpay").value,ts:Date.now()};
 var all=store.get("fr2_orders",[]);all.unshift(o);store.set("fr2_orders",all.slice(0,20));
 cart={};coupon=null;refresh();$("ckForm").reset();setMsg("ckMsg","","");closeModal("ck");showOrder(o,true);
}
 
/* layout injection */
(function(){
 var pages=[["index.html","Home"],["menu.html","Menu"],["booking.html","Booking"],["contact.html","Contact"],["help.html","Help"]];
 var cur=(location.pathname.split("/").pop()||"index.html").toLowerCase();
 var nav=pages.map(function(p){return '<a href="'+p[0]+'"'+(cur===p[0]?' class="on"':'')+'>'+p[1]+'</a>'}).join("");
 document.body.insertAdjacentHTML("afterbegin",'<div class="top"><div class="wrap"><span>🔥 Sunday Special: 25% OFF with code <b>SUNDAY25</b></span><span class="tr"><a href="tel:'+PHONE+'">📞 '+PHONE_SHOW+'</a><span>📍 '+ADDRESS+'</span></span></div></div><header class="hd"><div class="wrap nav"><a class="logo" href="index.html"><i class="lg">🍽️</i><span>Family<small>Restaurant</small></span></a><nav id="nv">'+nav+'</nav><div class="nr"><a class="btn cta" href="booking.html">Book a Table</a><a class="ib" href="tel:'+PHONE+'" aria-label="Call us">📞</a><button class="cb" id="cbtn" aria-label="Open cart">🛒<i id="cnt">0</i></button><button class="bg" id="bgr" aria-label="Open navigation menu">☰</button></div></div></header>');
 document.body.insertAdjacentHTML("beforeend",
 '<footer class="ft"><div class="wrap"><div class="fgrid"><div><a class="logo" href="index.html"><i class="lg">🍽️</i><span>Family<small>Restaurant</small></span></a><p>Delicious world cuisine for the whole family. Fresh food, warm service and a table for everyone.</p><div class="soc"><a href="tel:'+PHONE+'" aria-label="Call us">📞</a><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a><a href="mailto:'+EMAIL+'" aria-label="Email">✉️</a><a href="'+MAPS+'" target="_blank" rel="noopener" aria-label="Location">📍</a></div></div><div><h3>Quick links</h3>'+nav+'</div><div><h3>Contact</h3><span>📍 '+ADDRESS+'</span><a href="tel:'+PHONE+'">📞 '+PHONE_SHOW+'</a><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">💬 Chat on WhatsApp</a><a href="mailto:'+EMAIL+'">✉️ '+EMAIL+'</a></div><div class="hrs"><h3>Opening hours</h3><div><span>Mon – Sat</span><span>11 AM – 11 PM</span></div><div class="sunr"><span>Sunday ⭐</span><span>10 AM – 11:30 PM</span></div><div><span>Sunday offers</span><span>25% OFF</span></div></div></div><div class="visit">📍 Find us near <b>'+COLLEGE+'</b></div></div><div class="bar">© 2026 '+NAME+' · College Project</div></footer><a class="wafab" href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">💬</a>'+
 '<div class="sh" id="sh"></div>'+
 '<aside class="dr" id="dr" aria-label="Cart"><div class="dh"><h3>Your Cart</h3><button id="dcl" aria-label="Close cart">×</button></div><div class="cl" id="cl"></div><div class="fdp" id="fdp"></div><div class="cp"><input id="cin" placeholder="Coupon code" autocomplete="off"><button class="btn" onclick="applyCoupon()">Apply</button></div><div class="cch"><button onclick="applyCoupon(\'WELCOME20\')">WELCOME20</button><button onclick="applyCoupon(\'FEAST150\')">FEAST150</button><button onclick="applyCoupon(\'SUNDAY25\')">SUNDAY25</button></div><div class="msg" id="cmsg"></div><div class="sm" id="sm"></div><button class="btn" style="margin-top:10px;width:100%" onclick="openCheckout()">Checkout</button></aside>'+
 '<div class="md" id="ck"><div class="box"><h3 style="margin-bottom:12px">Delivery details</h3><form id="ckForm" novalidate><div class="fg"><div><label for="cn">Name</label><input id="cn" autocomplete="name"></div><div><label for="cp">Mobile number</label><input id="cp" type="tel" inputmode="numeric" maxlength="11" autocomplete="tel"></div><div class="full"><label for="ca">Delivery address</label><textarea id="ca" rows="2"></textarea></div><div class="full"><label for="cpay">Payment method</label><select id="cpay"><option>Cash on delivery</option><option>UPI</option><option>Card</option></select></div></div><div class="msg" id="ckMsg"></div><div class="bt"><button type="button" class="btn gh" onclick="closeModal(\'ck\')">Back</button><button class="btn" type="submit" style="flex:1">Place Order</button></div></form></div></div>'+
 '<div class="md" id="dn"><div class="box dn"><div class="big noprint" id="dnI"></div><h3 id="dnT" class="noprint" style="margin:6px 0"></h3><p id="dnP" class="sm noprint"></p><div id="dnS"></div><div class="bt noprint"><span id="dnL"></span><button class="btn gh" onclick="window.print()">Print / Save PDF</button><button class="btn gh" onclick="closeModal(\'dn\')">Close</button></div></div></div>'+
 '<div class="toast" id="toast" role="status"></div>');
 $("cbtn").onclick=function(){toggleCart(true)};
 $("dcl").onclick=$("sh").onclick=function(){toggleCart(false)};
 $("bgr").onclick=function(){$("nv").classList.toggle("open")};
 $("ckForm").onsubmit=placeOrder;
 $("cin").onkeydown=function(e){if(e.key==="Enter")applyCoupon()};
 document.querySelectorAll("[data-code]").forEach(function(el){el.onclick=function(){copyCode(el)};el.onkeydown=function(e){if(e.key==="Enter")copyCode(el)}});
 refresh();
})();
 
/* premium effects: header shrink, back to top, scroll reveal, counters */
(function(){
 var hd=document.querySelector(".hd"),tt=document.createElement("button"),tick=false;
 tt.className="totop";tt.setAttribute("aria-label","Back to top");tt.textContent="↑";
 tt.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};document.body.appendChild(tt);
 function onScroll(){if(tick)return;tick=true;requestAnimationFrame(function(){var y=window.pageYOffset||0;if(hd)hd.classList.toggle("sc",y>20);tt.classList.toggle("show",y>500);tick=false})}
 window.addEventListener("scroll",onScroll,{passive:true});onScroll();
 function count(el){var raw=el.getAttribute("data-n"),t=parseFloat(raw),d=(raw.split(".")[1]||"").length,sfx=el.getAttribute("data-s")||"",st=Date.now();(function f(){var p=Math.min(1,(Date.now()-st)/1200);el.textContent=(t*p).toFixed(d)+sfx;if(p<1)requestAnimationFrame(f)})()}
 if(!("IntersectionObserver" in window))return;
 try{
  document.documentElement.classList.add("js");
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);e.target.querySelectorAll("[data-n]").forEach(count)}})},{threshold:.12});
  document.querySelectorAll(".ttl,.sub,.sun,.of,.cz a,.rv>div,.step,.fe div,.band,.st").forEach(function(el){el.classList.add("rz");io.observe(el)});
 }catch(e){document.documentElement.classList.remove("js")}
})();
 
/* low-power / data-saver devices get a lighter version (no looping animations) */
(function(){try{var m=navigator.deviceMemory,c=navigator.hardwareConcurrency,sv=navigator.connection&&navigator.connection.saveData;if((m&&m<=2)||(c&&c<=2)||sv)document.documentElement.classList.add("lite")}catch(e){}})();
 