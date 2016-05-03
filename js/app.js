$(document).ready(function(){

    $('#intro').show();
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();

    $('#resultPage').hide();
    $('#presidential').hide();
    $('#primary').hide();
    $('#hc').hide();
    $('#reachOut').hide();
    $('#movement').hide();
    $('#social').hide();

    var presidential = 0;
    var primary = 0;
    var houseCongressional = 0;
    var reachout = 0;
    var movement = 0;

    $('#introBtn').click(function(){
        $('#intro').hide();
        $('#q1').show();
    });

    $('#refresh').click(function(){
        location.reload();
    })

    //Question 1

    $('#yesDes').hide();
    $('#noDes').hide();
    $('#yesDes4').hide();
    $('#noDes4').hide();

    $('#yq1').mouseover(function(){
        $('#yesDes').show();
    });

    $('#yq1').mouseout(function(){
        $('#yesDes').hide();
    });

    $('#nq1').mouseover(function(){
        $('#noDes').show();
    });

    $('#nq1').mouseout(function(){
        $('#noDes').hide();
    });

    $('#yq1').click(function(){
        $('#q1').hide();
        $('#q2').show();
    });

    $('#nq1').click(function(){
        reachout += 10;
        movement += 10;
        calculate();
    });

    //Question 2

    var swing = ["OH", "CO", "IA", "NV", "NH", "VA", "FL"];
    var proCollage = ["ME", "NE"];
    var dropTurnout = ["MO", "WA", "DE", "CA", "IN", "OK", "NV", "AL", "UT", "MS"];
    var lowTurnout = ["IN", "TX", "UT", "TN", "NY", "MS", "OK", "DC", "NJ", "WV", "NV"];
    var earlyPrimary = ["IA", "NH", "NV", "SC"];
    var relativelyEarly = [ "AL", "AK", "AR", "CO", "GA", "MA", "MN", "OK", "TN", "TX", "VT", "VA"];

    var openPrimary = ["AL", "AK", "GA", "IL", "IN", "MA", "MI", "MS", "NH", "NC", "ND", "OH", "OK", "SC", "TN", "TX", "VA", "VT", "WI"];
    var notOpen = ["AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "HI", "ID", "IA", "KS", "KY", "LA", "ME", "MD", "MN", "MO", "MT", "NE", "NV", "NJ", "NM", "NY", "OR", "PA", "RI", "SD", "UT", "WA", "WV", "WY"];


    $('#stateCode').change(function(){
        var state = $("#stateCode").val();
        console.log(state);

        for (var i = 0; i < openPrimary.length; i++) {
            if (openPrimary[i] === state) {
                $('#q2').hide();
                $('#q3').show();
            }
        }

        for (var i = 0; i < notOpen.length; i++) {
            if (notOpen[i] === state) {
                $('#q2').hide();
                $('#q4').show();
            }
        }

        for (var i = 0; i < swing.length; i++) {
            if (swing[i] === state) {
                presidential += 10;
            }
        }

        for (var i = 0; i < proCollage.length; i++) {
            if (proCollage[i] === state) {
                presidential += 5;
            }
        }

        for (var i = 0; i < dropTurnout.length; i++) {
            if (dropTurnout[i] === state) {
                houseCongressional += 5;
            }
        }

        for (var i = 0; i < lowTurnout.length; i++) {
            if (lowTurnout[i] === state) {
                houseCongressional += 10;
            }
        }

        for (var i = 0; i < earlyPrimary.length; i++) {
            if (earlyPrimary[i] === state) {
                primary += 10;
            }
        }

        for (var i = 0; i < relativelyEarly.length; i++) {
            if (relativelyEarly[i] === state) {
                primary += 5;
            }
        }

        return presidential;
        return primary;
        return houseCongressional;
    });


    //Question 3

    $('#yq3').click(function(){
        $('#q3').hide();
        $('#q4').show();
    });

    $('#nq3').click(function(){
        primary += 5;
        $('#q3').hide();
        $('#q4').show();
    });

    //Question 4

    $('#yq4').mouseover(function(){
        $('#yesDes4').show();
    });

    $('#yq4').mouseout(function(){
        $('#yesDes4').hide();
    });

    $('#nq4').mouseover(function(){
        $('#noDes4').show();
    });

    $('#nq4').mouseout(function(){
        $('#noDes4').hide();
    });

    $('#yq4').click(function(){
        calculate();
    });

    $('#nq4').click(function(){
        houseCongressional += 5;
        calculate();
    });


    function calculate() {

        $('#questions').hide();

        $('#resultPage').show();
        $('#social').show();

        console.log(presidential);
        console.log(primary);
        console.log(houseCongressional);
        console.log(movement);
        console.log(reachout);

        var total = presidential + primary + houseCongressional + movement + reachout;

        if(total === 0){
            movement += 5;
            reachout += 5;
        }

        var rank = [presidential, primary, houseCongressional, movement, reachout];

        rank.sort(function (a) {
            if(a>0){
                return a;
            }
        });

        console.log(rank);

        if(presidential > 0) {
            $('#presidential').show();
        }

        if(primary > 0) {
            $('#primary').show();
        }

        if(houseCongressional > 0) {
            $('#hc').show();
        }

        if(movement > 0) {
            $('#movement').show();
        }

        if(reachout> 0) {
            $('#reachOut').show();
        }
    }

});
