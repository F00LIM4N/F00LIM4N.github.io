var caracters = "200";
var sHTML = "";
var regex = /<[^>]*>|\n/g;

$( document ).ready(function() {
    let HTML_dots = document.getElementById("code_HTML");
    let CSS_dots = document.getElementById("code_CSS");
    let JS_dots = document.getElementById("code_JS");
    HTML_dots.addEventListener("focus", function() {
        document.getElementById('html_ecrit').style.display = "block";
        document.getElementById('css_ecrit').style.display = "none";
        document.getElementById('js_ecrit').style.display = "none";
    });
    HTML_dots.addEventListener("focusout", function() {
        document.getElementById('html_ecrit').style.display = "none";
    });
    CSS_dots.addEventListener("focus", function() {
        document.getElementById('css_ecrit').style.display = "block";
        document.getElementById('html_ecrit').style.display = "none";
        document.getElementById('js_ecrit').style.display = "none";
    });
    CSS_dots.addEventListener("focusout", function() {
        document.getElementById('css_ecrit').style.display = "none";
    });
    JS_dots.addEventListener("focus", function() {
        document.getElementById('js_ecrit').style.display = "block";
        document.getElementById('html_ecrit').style.display = "none";
        document.getElementById('css_ecrit').style.display = "none";
    });
    JS_dots.addEventListener("focusout", function() {
        document.getElementById('js_ecrit').style.display = "none";
    });
});

function caracters_nombre(){
    var percentage = "";
    let textArea = document.getElementById("code_HTML");
    let text_content = textArea.value.replaceAll(regex, "");
    // let regex_in = textArea.value.match(regex);
    if (text_content.length < ((49/100)*caracters)){
        $('.progress_bar').css( "background-color", "green")
    }
    else if (text_content.length >= ((80/100)*caracters)){
        $('.progress_bar').css( "background-color", "red")
    }
    else{
        $('.progress_bar').css( "background-color", "orange")
    }
    // console.log(text_content.length);
    // console.log(text_content);
    console.log((text_content.length/caracters)*100);
    percentage = (text_content.length/caracters)*100;
    document.getElementById("tiers").innerHTML = percentage + "%";
}

function refresh(){
    var code_HTML = document.getElementById("code_HTML").value;
    var code_CSS = "<style>" + document.getElementById("code_CSS").value + "</style>";
    var code_JS = "<scri" + "pt>" + document.getElementById("code_JS").value + "</scri" + "pt>";
    var page = document.getElementById("res").contentWindow.document;
    page.open();
    page.write(code_HTML + code_CSS + code_JS);
    page.close();
}

function select_color(){
    var input = $('#input_select').val();
    var save = $("#code_CSS").val();
    var sCSS = "";
    if (input == "white_add") {
        sCSS = '*{background-color:white;}';
        $('#no_option').css('display', 'none');
    }
    else if (input == "black_add") {
        sCSS = '*{background-color:black;}';
        $('#no_option').css('display', 'none');
    }
    else if (input == "grey_add") {
        sCSS = '*{background-color:grey;}';
        $('#no_option').css('display', 'none');
    }
    $("#code_CSS").val(save + sCSS);
    refresh();
}

function select_balise(){
    var save = $("#code_HTML").val();
    // console.log(save);
    var input = $('#input_select_balise').val();
    if (input == "balise_title") {
        sHTML = '<h1></h1>';
        $('#no_option_html').css('display', 'none');
    }
    else if (input == "balise_p") {
        sHTML = '<p></p>';
        $('#no_option_html').css('display', 'none');
    }
    else if (input == "balise_header") {
        sHTML = '<header></header>';
        $('#no_option_html').css('display', 'none');
    }
    if (input == "balise_nav") {
        sHTML = '<nav></nav>';
        $('#no_option_html').css('display', 'none');
    }
    else if (input == "balise_section") {
        sHTML = '<section></section>';
        $('#no_option_html').css('display', 'none');
    }
    else if (input == "balise_footer") {
        sHTML = '<footer></footer>';
        $('#no_option_html').css('display', 'none');
    }
    $("#code_HTML").val(save + sHTML);
    refresh();
}

function select_length(){
    var length_for_text = "";
    var input = document.getElementById('input_select_length').value;
    if (input == "length_200") {
        length_for_text = document.getElementById("code_HTML").maxLength = "200";
        caracters = length_for_text;
        // console.log(caracters);
    }
    else if (input == "length_400") {
        length_for_text = document.getElementById("code_HTML").maxLength = "400";
        caracters = length_for_text;
        // console.log(caracters);
    }
    else if (input == "length_600") {
        length_for_text = document.getElementById("code_HTML").maxLength = "600";
        caracters = length_for_text;
        // console.log(caracters);
    }
    else if (input == "length_800") {
        length_for_text = document.getElementById("code_HTML").maxLength = "800";
        caracters = length_for_text;
        // console.log(caracters);
    }
    refresh();
}