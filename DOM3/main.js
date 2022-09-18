//---shopping cart--
$(document).ready(function(){
    update_amounts();
    $('.quantity, .price').on('keyup keypress blur change' ,
    function(e){
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function(){
        var quantity = $(this).find('.quantity').val();
        var price = $(this).find('.price').val();
        var amount =(quantity*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}




//--- for quantity
var incrementQuantity;
var decrementQuantity;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQuantity = plusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".quantity");
    $n.val(Number($n.val())+1 );
    update_amounts();
});
var decrementQuantity = minusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".quantity");
    var QuantityVal = Number($n.val());
    if (QuantityVal > 0 ){
        $n.val(QuantityVal-1);
    }
    update_amounts();
});


