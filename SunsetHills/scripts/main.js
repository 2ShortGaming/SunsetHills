$("#shBtn").on('click', function () {
    //user input
    let bldg1 = parseInt($("#shIn1").val());//3
    let bldg2 = parseInt($("#shIn2").val());//2
    let bldg3 = parseInt($("#shIn3").val());//4
    let bldg4 = parseInt($("#shIn4").val());//7
    let bldg5 = parseInt($("#shIn5").val());//6
    let bldg6 = parseInt($("#shIn6").val());//9

    //build array from user input
    let bldgArray = [bldg1, bldg2, bldg3, bldg4, bldg5, bldg6];

    //left most bldg will always see sunset
    let output = new Array();
    let tallest = 0;
    let currentBldg = 0

    for (let loop = 0; loop <= 5; loop++) {
        currentBldg = bldgArray[loop];
        //determine if the integer is smaller than any before me
        if (currentBldg > tallest) {
            output.push(currentBldg);
            tallest = currentBldg;
        }
        //output to user

        $("#shOut").html(`Given the input, ${output.length} buildings can see the sunset.
                    <br />The buildings that can see the sunset are [${output.toString()}].`)


    }

})
$("#btnClear").on("click", function () {
    $("#shIn1, #shIn2, #shIn3, #shIn4, #shIn5, #shIn6").val("");
    $("#shOut").text("");
})


