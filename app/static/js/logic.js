$(document).ready(function() {
    console.log("Page Loaded");

    $("#predict").click(function() {
        predictions();
    });
});

// Call Flask API endpoint
function predictions() {
    // Get form values
    var distance_from_home = parseFloat($("#distance_from_home").val());
    var distance_from_last_transaction = parseFloat($("#distance_from_last_transaction").val());
    var ratio_to_median_purchase_price = parseFloat($("#ratio_to_median_purchase_price").val());
    var repeat_retailer = $("#repeat_retailer").is(":checked") ? 1.0 : 0.0;
    var used_chip = $("#used_chip").is(":checked") ? 1.0 : 0.0;
    var used_pin_number = $("#used_pin_number").is(":checked") ? 1.0 : 0.0;
    var online_order = $("#online_order").is(":checked") ? 1.0 : 0.0;

    // Create payload
    var payload = {
        "distance_from_home": distance_from_home,
        "distance_from_last_transaction": distance_from_last_transaction,
        "ratio_to_median_purchase_price": ratio_to_median_purchase_price,
        "repeat_retailer": repeat_retailer,
        "used_chip": used_chip,
        "used_pin_number": used_pin_number,
        "online_order": online_order
    };

    // POST request to backend
    $.ajax({
        type: "POST",
        url: "/predictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            console.log("Prediction returned:", returnedData);
            //{ok: true, prediction: '0.03'}
            var prob = parseFloat(returnedData.prediction);

            if (prob > 0.5) {
                $("#output").text(`⚠️ Likely fraud — Risk score: ${(prob * 100).toFixed(2)}%`);
            } else {
                $("#output").text(`✅ Low fraud risk — Risk score: ${(prob * 100).toFixed(2)}%`);
            }

        },

        
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}