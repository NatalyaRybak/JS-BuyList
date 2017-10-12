$(function () {
var $list = $(".bl-list");
var ONE_ROW_HTML = $(".one-row-template");
var $new_input = $(".addForm");

 function addItem(title){
    var $node = $(ONE_ROW_HTML);
    var quantity = 1;
    var $quantity_label = $node.find(".bl-label");
    $quantity_label.text(quantity);


    $node.find(".bl-product").text(title);

     $node.find(".bl-product").click(function() {
         $node.find(".bl-product").hide();
         $node.find(".name").show();
         $node.find(".name").val(title);
         $node.find(".name").focus();
     });
    $node.find(".bl-plus").click(function () {
        quantity +=1;
        $quantity_label.text(quantity);
    });

    $node.find(".bl-minus").click(function () {
        if (quantity > 1) {
        }
        quantity -= 1;
        $quantity_label.text(quantity);
    });

    $node.find(".bl-delete").click(function () {
       $node.hide();
    });

    $node.find(".bought").click()(function () {
        $node.addClass("is-bought");
    });

    $node.find(".unbought").click()(function () {
        $node.removeClass("is-bought");
    });

    $list.append($node);

     addItem("Помідори");
     addItem("Цибуля");
     addItem("Яблука");
}
 $(".add").click(function () {
   var new_name = $new_input.val();
   if(new_name.trim(){
       addItem(new_name);
       $new_input.val("");
       $new_input.focus();
   })
 })


});