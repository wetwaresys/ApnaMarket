$(document).ready(function () {


    $(".submenu > a").click(function (e) {
        e.preventDefault();
        var $li = $(this).parent("li");
        var $ul = $(this).next("ul");

        if ($li.hasClass("open")) {
            $ul.slideUp(350);
            $li.removeClass("open");
        } else {
            $(".nav > li > ul").slideUp(350);
            $(".nav > li").removeClass("open");
            $ul.slideDown(350);
            $li.addClass("open");
        }
    });

});

var CustomFunction = {
    NumbersOnly: function (event) {

        // Allow only backspace and delete
        if (event.keyCode == 46 || event.keyCode == 8) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    },
    AddNewRow: function (objId, formid) {
        var $tableBody = $("#" + objId);
        var $trLast = $tableBody.find("tbody tr:last");
        var $trNew = $trLast.clone();

        var suffix = $trNew.find(':input:first').attr('name').match(/\d+/);
        $trNew.find("td:last").html('<a href="#" class="remove" onclick="RemoveRow(this,event);">Remove</a>');
        $.each($trNew.find(':input'), function (i, val) {
            // Replaced Name
            try {
                var oldN = $(this).attr('name');
                var newN = oldN.replace('[' + suffix + ']', '[' + (parseInt(suffix) + 1) + ']');
                $(this).attr('name', newN);
                //Replaced value
                var type = $(this).attr('type');
                if (type.toLowerCase() == "text") {
                    $(this).val("");
                }

                if (type.toLowerCase() == "checkbox") {
                    $(this).prop('checked', false);
                }
            }
            catch (e) { }
            // If you have another Type then replace with default value
            //$(this).removeClass("input-validation-error");

        });

        $.each($trNew.find('span'), function (i, val) {
            // Replaced Name
            try {
                var oldN = $(this).attr('data-valmsg-for');
                var newN = oldN.replace('[' + suffix + ']', '[' + (parseInt(suffix) + 1) + ']');
                $(this).attr('data-valmsg-for', newN);
            }
            catch (e) { }
            // If you have another Type then replace with default value
            $(this).removeClass("input-validation-error");

        });

        $trLast.after($trNew);
        // Re-assign Validation 
        var form = $("#" + formid)
                                .removeData("validator")
                                .removeData("unobtrusiveValidation");
        $.validator.unobtrusive.parse(form);
    },
    ReArrangeIndex: function (container) {
        var index = 0;

        $("#" + container + " > tbody > tr").each(function (i, tr) {

            $(tr).find('input').each(function (j, val) {
                try {
                    var oldN = $(this).attr('name');
                    var suffix = oldN.match(/\d+/);
                    var newN = oldN.replace('[' + suffix + ']', '[' + parseInt(index) + ']');
                    $(this).attr('name', newN);
                }
                catch (e) { }
            });


            $.each($(tr).find('span'), function (j, val) {
                // Replaced Name
                try {
                    var oldN = $(this).attr('data-valmsg-for');
                    var suffix = oldN.match(/\d+/);
                    var newN = oldN.replace('[' + suffix + ']', '[' + parseInt(index) + ']');
                    $(this).attr('data-valmsg-for', newN);
                }
                catch (e) { }
                // If you have another Type then replace with default value
                $(this).removeClass("input-validation-error");

            });

            index = index + 1;
        });

    },
    RemoveRow: function (obj) {
        $(obj).parent().parent().remove();
    },
    BindDropDown: function (parentCtrl, childCtrl, type) {
        parentId = 0;
        var headerText = $("#" + childCtrl).find("option:first").text();
        if (type == "Subject") {
            parentId = -1;
        }
        else {
            parentId = $("#" + parentCtrl).val();
        }

        ddlId = childCtrl;

        $("#" + ddlId).empty();
        //$("#" + ddlId).append("<option value=\"\">" + type + "</option>");

        //if ($("#"+parentCtrl).val() > 0) {

        $("#" + ddlId).append("<option value=\"\">Please Wait...</option>");
        //$("#img_preloader").css("display", "block");


        var requestdata = {
            parentId: parentId,
            type: type
        }


        /*var d = new FormData()
        d.append("parentId", parentId);
        d.append("type", type);
        */
        //alert(JSON.stringify(requestdata));
        try {
            $.ajax({
                url: "/Learnings/RetrieveLoChild/",
                type: "POST",
                processData: false,
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(requestdata),
                dataType: "json",
                success: function (data) {

                    $("#" + ddlId).empty();
                    $("#" + ddlId).append("<option value=\"\">" + headerText + "</option>");
                    for (var i = 0; i < data.length; i++) {
                        $("#" + ddlId).append("<option value=\"" + data[i].Id + "\">" + data[i].Title + "</option>");
                    }
                    //$("#img_preloader").css("display", "none");
                },
                error: function (er) {
                    $("#" + ddlId).empty();
                    $("#" + ddlId).append("<option value=\"\">" + headerText + "</option>");
                }

            });
        }
        catch (ex) {
            $("#" + ddlId).empty();
            $("#" + ddlId).append("<option value=\"\">" + headerText + "</option>");
            //alert(JSON.stringify(ex));
        }
        return true;
        //}
    },
    LoadPartialView: function (requestData, actionUrl, divId) {

        //$("#" + divId).empty();
        $("#" + divId).html("");
        $("#" + divId).html("Please wait...");
        try {
            $.ajax({
                url: actionUrl,
                type: "POST",
                processData: false,
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(requestData),
                dataType: "html",
                success: function (data) {
                    $("#" + divId).html(data);
                    //$("#img_preloader").css("display", "none");
                },
                error: function (er) {

                    //alert(JSON.stringify(er));
                }

            });
        }
        catch (ex) {
        }
    }
}