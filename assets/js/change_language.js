var userLang = navigator.language || navigator.userLanguage; 
        console.log("The language is: " + userLang);
        if (userLang == 'pt-BR') {
            var novaURL = "index-ptbr.html";
            $(window.document.location).attr('href',novaURL);
        }
        else {
            var novaURL = "index-en.html";
            $(window.document.location).attr('href',novaURL);
        }