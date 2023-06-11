/* Hiện thị show address*/ 
var click_show_address = document.getElementById("content__transport-address");
var show_address = document.getElementById("show__address");
var icon_down = document.getElementById("transport-address-down");
var icon_up = document.getElementById("transport-address-up");

var modal_product_detail = document.getElementById("modal__product-detail");
var modal__overlay_product_detail = document.getElementById("modal__overlay-product-detail");

click_show_address.onclick = function() {
    show_address.style.display = "block"
    icon_down.style.display = "none"
    icon_up.style.display = "block"
    modal_product_detail.style.display = "flex"
    show__table.style.display = "none"
    modal__overlay_bold.style.display = "none"
}



var click_address_district = document.getElementsByClassName("show__address-item")[6];
var show_address_district = document.getElementById("address-district");

click_address_district.onclick = function(event) {
    show_address.style.display = "none"
    show_address_district.style.display = "block"
}

var click_address_commune = document.getElementsByClassName("address-district-item")[0];
var show_address_commune = document.getElementById("address-commune");

click_address_commune.onclick = function(event) {
    show_address_district.style.display = "none"
    show_address_commune.style.display = "block"
}



// Hiển thị form phí vận chuyển
var click_show_transport_fee = document.getElementsByClassName("transport-fee-support")[0];
var show_transport_fee = document.getElementsByClassName("transport-fee-support-method")[0];
var transport_fee_icon_down = document.getElementsByClassName("transport-fee-support-icon--down")[0];
var transport_fee_icon_up = document.getElementsByClassName("transport-fee-support-icon--up")[0];

click_show_transport_fee.onclick = function(event) {
    show_transport_fee.style.display = "block"
    transport_fee_icon_down.style.display = "none"
    transport_fee_icon_up.style.display = "block"
    modal_product_detail.style.display = "flex"
    show__table.style.display = "none"
    modal__overlay_bold.style.display = "none"
}

/* Click phí vận chuyển */
var fast_transport_icon = document.getElementById("fast__transport-check");
var express_transport_icon = document.getElementById("express__transport-check");

var click_fast_transport = document.getElementsByClassName("fast__transport-method")[0];
var click_express_transport = document.getElementsByClassName("express__transport-method")[0];

click_fast_transport.onclick = function(event) {
    fast_transport_icon.style.display = "block"
    express_transport_icon.style.display = "none"
    modal__overlay_bold.style.display = "none"
}

click_express_transport.onclick = function(event) {
    fast_transport_icon.style.display = "none"
    express_transport_icon.style.display = "block"
    modal__overlay_bold.style.display = "none"
}



/* Thoát khỏi form */ 
modal__overlay_product_detail.onclick = function() {
    show_address.style.display = "none"
    show_address_district.style.display = "none"
    show_address_commune.style.display = "none"
    modal_product_detail.style.display = "none"
    icon_up.style.display = "none"
    icon_down.style.display = "block"
    show_transport_fee.style.display = "none"
    transport_fee_icon_down.style.display = "block"
    transport_fee_icon_up.style.display = "none"
}


// Hiển thị thông tin thêm
var click_to_show_table = document.getElementsByClassName("description__info-detail-more")[0];
var show__table = document.getElementsByClassName("show__table")[0];
var modal__overlay_bold = document.getElementById("modal__overlay-product-detail-bold");

click_to_show_table.onclick = function(event) {
    modal_product_detail.style.display = "flex"
    show__table.style.display = "block"
    modal__overlay_bold.style.display = "block"
}

modal__overlay_bold.onclick = function() {
    modal_product_detail.style.display = "none"
}