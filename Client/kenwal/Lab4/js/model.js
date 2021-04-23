if (localStorage.getItem("productDetails") == null) {
  productDetails = {};
  getProductDetails();
} else {
  productDetails = JSON.parse(localStorage.getItem("productDetails"));
}

function getProductDetails() {
  productDetails["White tea"] = {};
  productDetails["White tea"]["image"] = "whitet.jpg";
  productDetails["White tea"]["name"] = "White tea";
  productDetails["White tea"]["description"] = "not just for rabbits";
  productDetails["White tea"]["units"] = "1 cup:";
  productDetails["White tea"]["price"] = 0.99;
  productDetails["White tea"]["category"] = "tea";

  productDetails["Green tea"] = {};
  productDetails["Green tea"]["image"] = "greent.jpg";
  productDetails["Green tea"]["name"] = "Green tea";
  productDetails["Green tea"]["description"] = "Yellow and banana-shaped";
  productDetails["Green tea"]["units"] = "1 cup:";
  productDetails["Green tea"]["price"] = 1.29;
  productDetails["Green tea"]["category"] = "tea";

  productDetails["Oolong"] = {};
  productDetails["Oolong"]["image"] = "Oolongt.jpg";
  productDetails["Oolong"]["name"] = "Oolong";
  productDetails["Oolong"]["description"] = "That exotic stuff";
  productDetails["Oolong"]["units"] = "1 cup:";
  productDetails["Oolong"]["price"] = 2.99;
  productDetails["Oolong"]["category"] = "tea";

  productDetails["Black tea"] = {};
  productDetails["Black tea"]["image"] = "blackt.jpg";
  productDetails["Black tea"]["name"] = "Black tea";
  productDetails["Black tea"]["description"] = "Red, sweet and juicy";
  productDetails["Black tea"]["units"] = "1 cup:";
  productDetails["Black tea"]["price"] = 1.49;
  productDetails["Black tea"]["category"] = "tea";

  productDetails["Scented"] = {};
  productDetails["Scented"]["image"] = "santedt.jpg";
  productDetails["Scented"]["name"] = "Scented";
  productDetails["Scented"]["description"] = "Red and ripe";
  productDetails["Scented"]["units"] = "1 cup:";
  productDetails["Scented"]["price"] = 1.99;
  productDetails["Scented"]["category"] = "tea";

  productDetails["Herbal"] = {};
  productDetails["Herbal"]["image"] = "herbalt.jpg";
  productDetails["Herbal"]["name"] = "Herbal";
  productDetails["Herbal"]["description"] =
    "Boil them, bake them, mash them...";
  productDetails["Herbal"]["units"] = "1 cup:";
  productDetails["Herbal"]["price"] = 1.88;
  productDetails["Herbal"]["category"] = "tea";

  productDetails["Arabica"] = {};
  productDetails["Arabica"]["image"] = "arabica.jpg";
  productDetails["Arabica"]["name"] = "Arabica";
  productDetails["Arabica"]["description"] = "Green and healthy";
  productDetails["Arabica"]["units"] = "1kg";
  productDetails["Arabica"]["price"] = 1.29;
  productDetails["Arabica"]["category"] = "coffee";

  productDetails["Robusta"] = {};
  productDetails["Robusta"]["image"] = "robusta.jpg";
  productDetails["Robusta"]["name"] = "Robusta";
  productDetails["Robusta"]["description"] = "Green and healthy";
  productDetails["Robusta"]["units"] = "1kg";
  productDetails["Robusta"]["price"] = 1.29;
  productDetails["Robusta"]["category"] = "coffee";

  productDetails["Latte"] = {};
  productDetails["Latte"]["image"] = "latte.jpg";
  productDetails["Latte"]["name"] = "Latte";
  productDetails["Latte"]["description"] = "Green and healthy";
  productDetails["Latte"]["units"] = "1kg";
  productDetails["Latte"]["price"] = 1.29;
  productDetails["Latte"]["category"] = "coffee";

  productDetails["Americano"] = {};
  productDetails["Americano"]["image"] = "Americano.jpg";
  productDetails["Americano"]["name"] = "Americano";
  productDetails["Americano"]["description"] = "Green and healthy";
  productDetails["Americano"]["units"] = "1kg";
  productDetails["Americano"]["price"] = 1.29;
  productDetails["Americano"]["category"] = "coffee";

  productDetails["Cappuccino"] = {};
  productDetails["Cappuccino"]["image"] = "Cappuccino.jpg";
  productDetails["Cappuccino"]["name"] = "Cappuccino";
  productDetails["Cappuccino"]["description"] = "Green and healthy";
  productDetails["Cappuccino"]["units"] = "1kg";
  productDetails["Cappuccino"]["price"] = 1.29;
  productDetails["Cappuccino"]["category"] = "coffee";

  productDetails["Espresso"] = {};
  productDetails["Espresso"]["image"] = "Espresso.jpg";
  productDetails["Espresso"]["name"] = "Espresso";
  productDetails["Espresso"]["description"] = "Green and healthy";
  productDetails["Espresso"]["units"] = "1kg";
  productDetails["Espresso"]["price"] = 1.29;
  productDetails["Espresso"]["category"] = "coffee";

  productDetails["Doppio"] = {};
  productDetails["Doppio"]["image"] = "Doppio.jpg";
  productDetails["Doppio"]["name"] = "Doppio";
  productDetails["Doppio"]["description"] = "Green and healthy";
  productDetails["Doppio"]["units"] = "1kg";
  productDetails["Doppio"]["price"] = 1.29;
  productDetails["Doppio"]["category"] = "coffee";

  productDetails["Cortado"] = {};
  productDetails["Cortado"]["image"] = "Cortado.jpg";
  productDetails["Cortado"]["name"] = "Cortado";
  productDetails["Cortado"]["description"] = "Green and healthy";
  productDetails["Cortado"]["units"] = "1kg";
  productDetails["Cortado"]["price"] = 1.29;
  productDetails["Cortado"]["category"] = "coffee";

  productDetails["Macchiato"] = {};
  productDetails["Macchiato"]["image"] = "Macchiato.jpg";
  productDetails["Macchiato"]["name"] = "Macchiato";
  productDetails["Macchiato"]["description"] = "Green and healthy";
  productDetails["Macchiato"]["units"] = "1kg";
  productDetails["Macchiato"]["price"] = 1.29;
  productDetails["Macchiato"]["category"] = "coffee";

  productDetails["Lungo"] = {};
  productDetails["Lungo"]["image"] = "Lungo.jpg";
  productDetails["Lungo"]["name"] = "Lungo";
  productDetails["Lungo"]["description"] = "Green and healthy";
  productDetails["Lungo"]["units"] = "1kg";
  productDetails["Lungo"]["price"] = 1.29;
  productDetails["Lungo"]["category"] = "coffee";

  productDetails["Croissants"] = {};
  productDetails["Croissants"]["image"] = "croissants.jpg";
  productDetails["Croissants"]["name"] = "Croissants";
  productDetails["Croissants"]["description"] = "Green and healthy";
  productDetails["Croissants"]["units"] = "1kg";
  productDetails["Croissants"]["price"] = 1.29;
  productDetails["Croissants"]["category"] = "pastries";

  productDetails["Pies"] = {};
  productDetails["Pies"]["image"] = "pies.jpg";
  productDetails["Pies"]["name"] = "Pies";
  productDetails["Pies"]["description"] = "Green and healthy";
  productDetails["Pies"]["units"] = "1kg";
  productDetails["Pies"]["price"] = 1.29;
  productDetails["Pies"]["category"] = "pastries";

  productDetails["Danishes"] = {};
  productDetails["Danishes"]["image"] = "danishes.jpg";
  productDetails["Danishes"]["name"] = "Danishes";
  productDetails["Danishes"]["description"] = "Green and healthy";
  productDetails["Danishes"]["units"] = "1kg";
  productDetails["Danishes"]["price"] = 1.29;
  productDetails["Danishes"]["category"] = "pastries";

  productDetails["Macarons"] = {};
  productDetails["Macarons"]["image"] = "macarons.jpg";
  productDetails["Macarons"]["name"] = "Macarons";
  productDetails["Macarons"]["description"] = "Green and healthy";
  productDetails["Macarons"]["units"] = "1kg";
  productDetails["Macarons"]["price"] = 1.29;
  productDetails["Macarons"]["category"] = "pastries";

  productDetails["Strudels"] = {};
  productDetails["Strudels"]["image"] = "strudels.jpg";
  productDetails["Strudels"]["name"] = "Strudels";
  productDetails["Strudels"]["description"] = "Green and healthy";
  productDetails["Strudels"]["units"] = "1kg";
  productDetails["Strudels"]["price"] = 1.29;
  productDetails["Strudels"]["category"] = "pastries";

  productDetails["Cannoli"] = {};
  productDetails["Cannoli"]["image"] = "cannoli.jpg";
  productDetails["Cannoli"]["name"] = "Cannoli";
  productDetails["Cannoli"]["description"] = "Green and healthy";
  productDetails["Cannoli"]["units"] = "1kg";
  productDetails["Cannoli"]["price"] = 1.29;
  productDetails["Cannoli"]["category"] = "pastries";

  productDetails["Pretzels"] = {};
  productDetails["Pretzels"]["image"] = "pretzels.jpg";
  productDetails["Pretzels"]["name"] = "Pretzels";
  productDetails["Pretzels"]["description"] = "Green and healthy";
  productDetails["Pretzels"]["units"] = "1kg";
  productDetails["Pretzels"]["price"] = 1.29;
  productDetails["Pretzels"]["category"] = "pastries";

  productDetails["Tarts"] = {};
  productDetails["Tarts"]["image"] = "tarts.jpg";
  productDetails["Tarts"]["name"] = "Tarts";
  productDetails["Tarts"]["description"] = "Green and healthy";
  productDetails["Tarts"]["units"] = "1kg";
  productDetails["Tarts"]["price"] = 1.29;
  productDetails["Tarts"]["category"] = "pastries";

  productDetails["Profiteroles"] = {};
  productDetails["Profiteroles"]["image"] = "profiteroles.jpg";
  productDetails["Profiteroles"]["name"] = "Profiteroles";
  productDetails["Profiteroles"]["description"] = "Green and healthy";
  productDetails["Profiteroles"]["units"] = "1kg";
  productDetails["Profiteroles"]["price"] = 1.29;
  productDetails["Profiteroles"]["category"] = "pastries";

  productDetails["Tax"] = {};
  productDetails["Tax"]["name"] = "Tax";
  productDetails["Tax"]["price"] = 8.5;
  productDetails["Tax"]["category"] = "tax";

  localStorage.setItem("productDetails", JSON.stringify(productDetails));

  return productDetails;
}

function addNewItems(
  name,
  image,
  description = "",
  units = "1kg",
  price,
  category
) {
  getProductDetails();

  productDetails[name] = {};
  productDetails[name]["image"] = image;
  productDetails[name]["name"] = name;
  productDetails[name]["description"] = description;
  productDetails[name]["units"] = units;
  productDetails[name]["price"] = price;
  productDetails[name]["category"] = category;

  localStorage.setItem("productDetails", JSON.stringify(productDetails));

  return productDetails;
}

//add new key=>value to the HTML5 storage
function SaveItem(item, quantity) {
  // alert(item+'/'+quantity);
  var oldquantity = parseInt(JSON.stringify(localStorage.getItem(item)));
  if (Number.isInteger(oldquantity)) {
    oldquantity = oldquantity;
  } else {
    oldquantity = 0;
  }

  newquantity = parseInt(oldquantity) + parseInt(quantity);
  // alert(newquantity);
  localStorage.setItem(item, newquantity);
  doShowAll();
}

// function getProductQuantity(item) {
//   var value = "; " + document.cookie;
//   var parts = value.split("; " + product + "=");
//   if (parts.length == 2) return parts.pop().split(";").shift();
// }

// function doShowAll() {
//   if (CheckBrowser()) {
//     var key = "";
//     var list = "<tr><th>Item</th><th>Value</th></tr>\n";
//     var i = 0;
//     //for more advance feature, you can set cap on max items in the cart
//     for (i = 0; i <= localStorage.length-1; i++) {
//       key = localStorage.key(i);
//       list += "<tr><td>" + key + "</td>\n<td>"
//           + localStorage.getItem(key) + "</td></tr>\n";
//     }
//     //if no item exists in the cart
//     if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
//       list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
//     }
//     //bind the data to html table
//     //you can use jQuery too....
//     document.getElementById('cart').innerHTML = list;
//   } else {
//     alert('Cannot save shopping list as your browser does not support HTML 5');
//   }
// }

function CheckBrowser() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    // we can use localStorage object to store data
    return true;
  } else {
    return false;
  }
}

//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll(cusName) {
  const save = localStorage.getItem("productDetails");
  saveOrder(cusName);

  const saveOrders = localStorage.getItem("orders");

  console.log(saveOrders);

  localStorage.clear();
  localStorage.setItem("productDetails", save);

  if (saveOrders != "null" && saveOrders != null) {
    console.log("orders saved");
    localStorage.setItem("orders", saveOrders);
  }
  // doShowAll();
}

function saveOrder(cusName) {
  if (JSON.parse(localStorage.getItem("orders")) == null) {
    orders = {};
    localStorage.setItem("orders", JSON.stringify(orders));
  } else {
    orders = JSON.parse(localStorage.getItem("orders"));
  }

  const current = new Date();
  const currentTime = current.toLocaleString();

  orders[cusName]["time"] = currentTime;

  for (i = 0; i <= localStorage.length - 2; i++) {
    key = localStorage.key(i);
    if (key == "productDetails" || key == "orders") {
      continue;
    }

    console.log(key);

    orders[cusName][key] = localStorage.getItem(key);
  }

  console.log(orders);
  localStorage.setItem("orders", JSON.stringify(orders));

  // orders = storage;
}

function doShowAll() {
  if (CheckBrowser()) {
    var key = "";
    var list =
      "<tr><th>Item-Image</th><th>Item-Type</th><th>Item</th><th>Qty</th><th>Value</th><th>Action</th></tr><tbody>\n";
    var i = 0;
    //for more advance feature, you can set cap on max items in the cart
    var price_intoqty = 0;
    for (i = 0; i <= localStorage.length - 2; i++) {
      key = localStorage.key(i);
      if (key == "productDetails" || key == "orders") {
        continue;
      }
      var productDetails = getProductDetails();

      price_intoqty = productDetails[key]["price"] * localStorage.getItem(key);
      list +=
        '<tr><td align="center"><img title="' +
        productDetails[key]["name"] +
        '" src="img/' +
        productDetails[key]["image"] +
        '" class="person__thumbnail"/><td align="center">' +
        productDetails[key]["category"] +
        '</td><td align="center">' +
        key +
        '</td>\n\n<td align="center"> <input class="input-name" name="' +
        key +
        '" id="' +
        key +
        '_basket" type="number" value="' +
        localStorage.getItem(key) +
        '" style="background: rgb(78, 79, 78);width:155px;height:28px;"/></td><td align="center">' +
        price_intoqty +
        '</td><td align="center"><a class="btn__animate" onclick="javascript:ModifyItem(\'' +
        key +
        "', document.getElementById('" +
        key +
        '_basket\').value)" style="background-color: #f1b450;color: #392824;font-size: 12px;font-weight: 600;font-family: sans-serif;border: 1px solid blanchedalmond;border-radius:9px 9px; padding: 5px 10px; margin:10px"><b> Update</b></a><i  onclick="javascript:RemoveItem(\'' +
        key +
        '\')" class="fa fa-trash" style="padding: 0 5px;"></i></td></tr>\n';
    }
    //if no item exists in the cart
    if (
      list ==
      "<tr><th>Item-Image</th><th>Item-Type</th><th>Item</th><th>Qty</th><th>Value</th><th>Action</th></tr><tbody>\n"
    ) {
      list +=
        "<tr><td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td></tr>\n";
    } else {
      list += `<tr><td></td></tr>\n<tr><td colspan="6" align="center">
       
     <a onclick="javascript:getName()" style="background-color: #f1b450;color: #392824;font-size: 1.2rem;font-weight: 600;font-family: sans-serif;border: 1px solid blanchedalmond;border-radius:9px 9px; padding: 10px 15px;"><b> Add to Order</b></a></td></tr>`;
    }
    //bind the data to html table
    //you can use jQuery too....
    document.getElementById("cart").innerHTML = list;
    list += "</tbody>";
  } else {
    alert("Cannot save shopping list as your browser does not support HTML 5");
  }

  var x = document.getElementById("cartBtn");
  x.style.display = "none";
}

//change an existing key=>value in the HTML5 storage
function ModifyItem(item, quantity) {
  //check if key exists
  // alert(item+"/"+quantity);
  if (localStorage.getItem(item) != null) {
    //update
    localStorage.setItem(item, quantity);
  }
  doShowAll();
}

function orderContent(cusName) {
  if (CheckBrowser()) {
    var key = "";
    var list_ord = '<section class="drink section-padding">';
    list_ord += "<div>";
    list_ord +=
      '<h3 class="drink-form__title bell-fonts" style="text-align:  center;">The Order Section</h3><table width="100%" border="1" >';
    list_ord +=
      "<tr><th>Item-Image</th><th>Item-Type</th><th>Item</th><th>Qty</th><th>Value</th></tr><tbody>\n";
    var i = 0;
    //for more advance feature, you can set cap on max items in the cart
    var price_intoqty = 0;
    var total_price = 0;
    for (i = 0; i <= localStorage.length - 2; i++) {
      key = localStorage.key(i);
      if (key == "productDetails" || key == "orders") {
        continue;
      }
      var productDetails = getProductDetails();
      price_intoqty = productDetails[key]["price"] * localStorage.getItem(key);
      total_price = total_price + price_intoqty;
      list_ord +=
        '<tr><td align="center"><img title="' +
        productDetails[key]["name"] +
        '" src="img/' +
        productDetails[key]["image"] +
        '" class="person__thumbnail"/><td align="center">' +
        productDetails[key]["category"] +
        '</td><td align="center">' +
        key +
        '</td>\n<td align="center">' +
        localStorage.getItem(key) +
        '</td>\n<td align="center"> ' +
        price_intoqty +
        "</td></tr>\n";
    }
    //if no item exists in the cart
    if (
      list_ord ==
      "<tr><th>Item-Image</th><th>Item-Type</th><th>Item</th><th>Value</th><th>Qty</th><th>Action</th></tr><tbody>\n"
    ) {
      list +=
        "<tr><td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td>\n<td align='center'><i>empty</i></td></tr>\n";
    } else {
      var total_plus_tax = total_price + productDetails["Tax"]["price"];
      list_ord +=
        '<tr><td colspan="3" style="border:none;">&nbsp;</td><td>Sub-total</td><td>' +
        total_price +
        '</td></tr>\n<td colspan="3" style="border:none;">&nbsp;</td><td>Tax</td><td>' +
        productDetails["Tax"]["price"] +
        '</td></tr>\n<td colspan="3" style="border:none;">&nbsp;</td><td>Total</td><td>' +
        total_plus_tax +
        `</td></tr>\n\n<tr><td colspan="5" align="center" style="border:none;"><a href="WebStore.html" style="background-color: #f1b450;color: #392824;font-size: 1.2rem;font-weight: 600;font-family: sans-serif;border: 1px solid blanchedalmond;border-radius:9px 9px; padding: 8px 10px;"><b> Cancel</b></a>&nbsp;<button class="nameSaveOrder" style="background-color: #f1b450;color: #392824;font-size: 1.2rem;font-weight: 600;font-family: sans-serif;border: 1px solid blanchedalmond;border-radius:9px 9px; padding: 8px 10px;"> Confirm Order</button></td></tr>`;
    }

    //bind the data to html table
    //you can use jQuery too....

    list_ord += "</tbody></table><div><section>";
    document.getElementById("order_sec").innerHTML = list_ord;
    saveOrderByName(cusName);
  } else {
    alert("Cannot save shopping list as your browser does not support HTML 5");
  }

  var x = document.getElementById("cartBtn");
  x.style.display = "none";

  var y = document.getElementById("navBtn");
  y.style.display = "none";

  var z = document.getElementById("cart_sect");
  z.style.display = "none";
}

function orderComplete(cusName) {
  var list_confirm = '<section class="drink section-padding">';
  list_confirm += "<div>";
  list_confirm +=
    '<h3 class="drink-form__title bell-fonts" style="text-align:  center; margin:20px">Thank  You , Your Order  Has  Been  Successfully  Submited!</h3><a href="WebStore.html" style="background-color: #f1b450;color: #392824;font-size: 1.2rem;font-weight: 600;font-family: sans-serif;border: 1px solid blanchedalmond;border-radius:9px 9px; padding: 10px 30px; margin-left: 46%;"><b> Exit</b></a></div></section>';

  ClearAll(cusName);
  document.getElementById("order_sec").innerHTML = list_confirm;
}

//delete an existing key=>value from the HTML5 storage
function RemoveItem(item) {
  localStorage.removeItem(item);
  doShowAll();
}
