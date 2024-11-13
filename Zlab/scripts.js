document.getElementById("iframet").srcdoc = `<html lang="tr"><head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Zlab</title>

    <style>

    /* CSS */

*{

margin:5px;

}

body{

    background-color:#1e1e1e;

}

button {

  appearance: button;

  backface-visibility: hidden;

  background-color: #405cf5;

  border-radius: 6px;

  border-width: 0;

  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;

  box-sizing: border-box;

  color: #fff;

  cursor: pointer;

  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;

  font-size: 100%;

  height: 44px;

  line-height: 1.15;

  margin: 12px 0 0;

  outline: none;

  overflow: hidden;

  padding: 0 25px;

  position: relative;

  text-align: center;

  text-transform: none;

  transform: translateZ(0);

  transition: all .2s,box-shadow .08s ease-in;

  user-select: none;

  -webkit-user-select: none;

  touch-action: manipulation;

  width: 100%;

}



button:disabled {

  cursor: default;

}



button:focus {

  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;

}

#input{

  box-sizing: border-box;

  font-family: inherit;

  font-size: 14px;

  vertical-align: baseline;

  font-weight: 400;

  line-height: 1.29;

  letter-spacing: .16px;

  border-radius: 0;

  outline: 2px solid transparent;

  outline-offset: -2px;

  width: 100%;

  height: 40px;

  border: none;

  border-bottom: 1px solid #8d8d8d;

  background-color: #f4f4f4;

  padding: 0 16px;

  color: #161616;

  transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);

  }  

  #input:focus{

      outline: 2px solid #0f62fe;

      outline-offset: -2px;

  }

    </style>

  </head>

  <body>

    <main>

        <button type="button" class="btn btn-primary">Buraya butonun yazısını yazacaksınız</button><p class="text-center" style="color: white;">Buraya yazmak istediğiniz yazıyı yazacaksınız</p><h1>Buraya html kodunuzu yazıcaksınız</h1><input type="text" id="input"><input type="date"><input type="checkbox" style="color: white;">Örnek: Lütfen EULA'yı kabul edin. Gibi onay isteyen şeyler yazılabilir<input type="color"> 

    </main>

  



            </body></html>`;

document.getElementById("editor").textContent = `::Yorum satırları



:: Yorum satırları burada görüldüğü gibi yazılır. "::" yazdıktan sonra istediğiğiniz yazıyı yazabilirsiniz



:: Yazdırma ve Değişkenler komudu



yazdır "Merhaba" 

:: Burada tırnak işareti (") içindeki yazı yazdırılır



yazdır 100 + 50 

:: Burada matamatik işlemi yapılabilir. 4 işlemi de yapabilirsiniz



değişken = 100.7 

:: Burada değişkene ad verilir ve = koyup değişkene değer verilir. (int, float, str)



yazdır değişken 

:: Burada değişken yazdırılır



a = 50

b = 100

yazdır a / b 

:: Burada a ve b değişkenine değer verdik ve onları matamatik işlemi ile yazdırdık



:: Al komudu



al isim "Lütfen isminizi girin" 

::Burada bir değişkene "al" komudunu verdik ve sormak istediğimiz soruyu yazdık. Yazdığımız cevabı verdiğimiz değişkene kaydedicek.

yazdır isim 

:: Burada yukarıda sorduğumuz değişkeni yazdırıyor


:: Döngü 

döngü 3:
yazdır "ZekaNet Labs"
bırak

:: Kullanımı
:: döngü <sayı>:
:: <kod>
:: bırak

:: Sayı kadar kodu döngüde çalıştırır



:: GUI komutları



:: Pencere



pencere Zlab

:: Burada "Zlab" adında pencere oluşturduk. Tüm GUI görüntülenmesi sağ tarafta gözükecektir





:: Buton

buton "Buraya butonun yazısını yazacaksınız"



:: Yazı

yazı "Buraya yazmak istediğiniz yazıyı yazacaksınız"



:: Html

html "<h1>Buraya html kodunuzu yazıcaksınız</h1>"



:: Giriş 

giriş

:: Burada ekrana yazı yazabileceğimiz bir yer eklendi



:: Takvim



takvim

:: Burada ekrana takvim görüntülenmesi eklendi



:: Tik



tik "Örnek: Lütfen EULA'yı kabul edin. Gibi onay isteyen şeyler yazılabilir"



:: Renk



renk

:: Burada renk seçebilirsiniz









:: Zlab aşkıyla ©️2024

`;

function saveFile(uzantı, bool) {
  if (bool) {
    const text = htmlkode;

    const blob = new Blob([text], { type: "text/plain" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = `dosya.${uzantı}`;

    a.click();
  } else {
    const text = document.getElementById("editor").value;

    const blob = new Blob([text], { type: "text/plain" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = `dosya.${uzantı}`;

    a.click();
  }
}

document.getElementById("openFile").addEventListener("click", () => {
  const input = document.createElement("input");

  input.type = "file";

  input.accept = ".zlab";

  input.onchange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        document.getElementById("editor").value = e.target.result;
      };

      reader.readAsText(file);
    }
  };

  input.click();
});

function sor(deger) {
  return satir.startsWith(deger);
}

function logToDiv() {
  var originalLog = console.log;

  var logContainer = document.getElementById("consoleOutput");

  var logMessages = [];

  console.log = function () {
    originalLog.apply(console, arguments);

    for (var i = 0; i < arguments.length; i++) {
      logMessages.push(xss(arguments[i]));
    }

    logContainer.innerHTML = logMessages.join("<br>");
  };
}

logToDiv();

let degiskenler = {};

let listeler = {};

function xss(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

function icerik(deger) {
  const kelimeler = satir.split(" ");

  return kelimeler.slice(kelimeler.indexOf(deger) + 1).join(" ");
}

function showPopup(deger) {
  document.getElementById("iframet").srcdoc = deger;

  htmlkode = deger;
}

function joinArray(arr) {
  var joinedString = arr.join("");

  return joinedString;
}

var htmCod = [];

document.getElementById("runButton").addEventListener("click", () => {
  divElement = document.getElementById("consoleOutput");

  console.clear();

  divElement.innerHTML = "";

  htmCod.length = 0;

  var code = document.getElementById("editor").value;

  code = code
    .replace(
      /döngü\s+(?<repeat>\d+):\n+(?<code>[\w\W\d\s\"]+)bırak/i,
      (match, repeat, code) => {
        return "".padEnd(Number(repeat) * code.length, code);
      }
    )
    .slice(0, -1);

  const kodSatirlari = code.split("\n");

  for (satir of kodSatirlari) {
    if (satir.trim() === "" || satir.startsWith("::")) {
      continue;
    }

    if (sor("yazdır")) {
      const ifade = icerik("yazdır").trim();

      try {
        with (degiskenler) {
          console.log(eval(ifade));
        }
      } catch (e) {
        console.log(`Hata: Yazım hatanız var!`);
      }
    } else if (sor("al")) {
      const [degiskenAdi, inputMesaji] = icerik("al")
        .split('"')

        .map((item) => item.trim())

        .filter((item) => item);

      const deger = prompt(inputMesaji);

      if (!isNaN(deger)) {
        degiskenler[degiskenAdi] = Number(deger);
      } else {
        degiskenler[degiskenAdi] = deger;
      }
    } else if (satir.includes("=")) {
      const [degiskenAdi, degiskenDegeri] = satir

        .split("=")

        .map((item) => item.trim());

      try {
        degiskenler[degiskenAdi] = eval(degiskenDegeri);
      } catch {
        console.log(`Hata: ${degiskenAdi} değişkenine değer atanamadı.`);
      }
    } else if (sor("liste")) {
      const kismi = icerik("liste").split(" ");

      const listeAdi = kismi[0];

      const listeDegeri = JSON.parse(kismi.slice(1).join(" "));

      listeler[listeAdi] = listeDegeri;
    } else if (sor("pencere")) {
      htmAd = icerik("pencere");
    } else if (sor("yazı")) {
      htmCod.push(
        '<p class="text-center" style="color: white;">' +
          xss(eval(icerik("yazı"))) +
          "</p>"
      );
    } else if (sor("buton")) {
      htmCod.push(
        '<button type="button" class="btn btn-primary">' +
          xss(eval(icerik("buton"))) +
          "</button>"
      );
    } else if (sor("html")) {
      htmCod.push(eval(icerik("html")));
    } else if (sor("renk")) {
      htmCod.push('<input type="color">' + "</input>");
    } else if (sor("tik")) {
      htmCod.push(
        '<input type="checkbox" style="color: white;">' +
          xss(eval(icerik("tik"))) +
          "</input>"
      );
    } else if (sor("takvim")) {
      htmCod.push('<input type="date">' + "</input>");
    } else if (sor("giriş")) {
      htmCod.push('<input type="text" id="input">' + "</input>");
    } else {
      console.log(
        "Dikkat! Yazım hatanız var veya herhangi bir komutu yanlış yazmış olabilirsiniz."
      );
    }
  }

  var htmKod = joinArray(htmCod);

  if (code.includes("pencere")) {
    document.getElementById("bas").textContent = htmAd;

    showPopup(`

<!DOCTYPE html>

<html lang="tr">

  <head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>${htmAd}</title>

    <style>

    /* CSS */

*{

margin:5px;

}

body{

    background-color:#1e1e1e;

}

button {

  appearance: button;

  backface-visibility: hidden;

  background-color: #405cf5;

  border-radius: 6px;

  border-width: 0;

  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;

  box-sizing: border-box;

  color: #fff;

  cursor: pointer;

  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;

  font-size: 100%;

  height: 44px;

  line-height: 1.15;

  margin: 12px 0 0;

  outline: none;

  overflow: hidden;

  padding: 0 25px;

  position: relative;

  text-align: center;

  text-transform: none;

  transform: translateZ(0);

  transition: all .2s,box-shadow .08s ease-in;

  user-select: none;

  -webkit-user-select: none;

  touch-action: manipulation;

  width: 100%;

}



button:disabled {

  cursor: default;

}



button:focus {

  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;

}

#input{

  box-sizing: border-box;

  font-family: inherit;

  font-size: 14px;

  vertical-align: baseline;

  font-weight: 400;

  line-height: 1.29;

  letter-spacing: .16px;

  border-radius: 0;

  outline: 2px solid transparent;

  outline-offset: -2px;

  width: 100%;

  height: 40px;

  border: none;

  border-bottom: 1px solid #8d8d8d;

  background-color: #f4f4f4;

  padding: 0 16px;

  color: #161616;

  transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);

  }  

  #input:focus{

      outline: 2px solid #0f62fe;

      outline-offset: -2px;

  }

    </style>

  </head>

  <body>

    <main>

        ${htmKod} 

    </main>

  </body>

</html>

            `);
  }

  logToDiv();
});

const editor = document.getElementById("editor");

const suggestions = document.createElement("ul");

suggestions.className = "suggestions";

document.body.appendChild(suggestions);

editor.addEventListener("keydown", (e) => {
  const suggestionItems = suggestions.querySelectorAll("li");

  if (suggestions.style.display === "block" && suggestionItems.length > 0) {
    let selectedIndex = -1;

    suggestionItems.forEach((item, index) => {
      if (item.classList.contains("selected")) {
        selectedIndex = index;

        item.classList.remove("selected");
      }
    });

    if (e.key === "ArrowDown") {
      e.preventDefault();

      selectedIndex = (selectedIndex + 1) % suggestionItems.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();

      selectedIndex =
        (selectedIndex - 1 + suggestionItems.length) % suggestionItems.length;
    } else if (e.key === "Tab") {
      e.preventDefault();

      if (selectedIndex >= 0) {
        suggestionItems[selectedIndex].click();
      }
    }

    if (selectedIndex >= 0) {
      suggestionItems[selectedIndex].classList.add("selected");
    }
  } else if (e.key === "Tab") {
    const cursorPosition = editor.selectionStart;

    const textBeforeCursor = editor.value.substring(0, cursorPosition);

    const currentLine = textBeforeCursor.split("\n").pop();

    const matchingCommands = commands.filter((command) =>
      command.startsWith(currentLine)
    );

    if (matchingCommands.length > 0) {
      e.preventDefault();

      const lines = editor.value.split("\n");

      const lineIndex = textBeforeCursor.split("\n").length - 1;

      lines[lineIndex] = matchingCommands[0];

      editor.value = lines.join("\n");

      editor.setSelectionRange(editor.value.length, editor.value.length);
    } else {
      editor.value =
        editor.value.substring(0, cursorPosition) +
        "\t" +
        editor.value.substring(cursorPosition);

      editor.setSelectionRange(cursorPosition + 1, cursorPosition + 1);

      e.preventDefault();
    }
  } else if (e.key === '"') {
    const cursorPosition = editor.selectionStart;

    editor.value =
      editor.value.substring(0, cursorPosition) +
      '""' +
      editor.value.substring(cursorPosition);

    editor.setSelectionRange(cursorPosition + 1, cursorPosition + 1);

    e.preventDefault();
  } else if (e.key === "[") {
    const cursorPosition = editor.selectionStart;

    editor.value =
      editor.value.substring(0, cursorPosition) +
      "[]" +
      editor.value.substring(cursorPosition);

    editor.setSelectionRange(cursorPosition + 1, cursorPosition + 1);

    e.preventDefault();
  }
});

function pyapi() {
  try {
    pywebview.api.kaydet(editor.textContent);
  } catch (err) {
    saveFile("zlab", false);
  }
}

function pyapi2() {
  try {
    pywebview.api.html(htmlkode);
  } catch (err) {
    saveFile("html", true);
  }
}

function pyapi3() {
  try {
    pywebview.api.exe(htmlkode);
  } catch (err) {
    alert(
      "Web desteği yok 😥\nAma Zlab İDE indirerek kullanabilirsiniz.\nEğer Zlab İDE'de bu hatayı alıyorsanız, projenizi çalıştırdıktan sonra derleyin."
    );
  }
}
