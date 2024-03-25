const synad= new Map([
        ["teostus","реализация"],
        ['algoritm', "алгоритм"],
        [ 'kavand', "план"],
        [ "kasutajaliides", "пользовательский интерфейс"],
        [ 'mudel', "модель"],
        [ 'andmebaasi skeem', "диаграмма базы данных"],
        [  'standart', "стандарт"],
        [  'tsükel', "цикл"],
        [  'andmetöötlus', "обработка данных"],
        [  'andmestruktuur', "структура данных"],
        [  'arenduskeskkond', "среда разработки"],
        [ 'projektihaldus tööriist', "инструмент управления проектами"],
        [ 'kavandamine', "планирование"],
        [ 'iteratsioon', "итерация"],
        [ 'parandus', "коррекция"],
        ["koskmudel","каскадная модель"],
        ["agile mudel","агильная модель"],
        ["spiraalne mudel","спиральная модель"],
        ["inkrementaalne mudel","инкерментная модель"],
        ["nõudmised","требования"],
        ["realiseerimine","реализация"],
        ["testimine","тестирование"],
        ["integreerimine","интеграция"],
        ["kasutamine","использование"],
        ["holdus","обслуживание"],
        ["eelised","преимущества"],
        ["puudused","недостатки"],
        ["elutsükkel","жизненный цикл"],
        ["arendamine","разработка"],
        ["valideerimine","валидация"],

    ]);
// dictionary

// random sõna
function randomSynaEst() {
    const juhuslikSyna = Math.floor(Math.random() * synad.size);
    const synaKey = Array.from(synad.keys())[juhuslikSyna]; // get key from dictionary
    const synaValue = synad.get(synaKey); //get value from dictionaruy
    document.getElementById("random-synaEst").innerHTML = synaKey;
    document.getElementById("kontrollEst").setAttribute("data-translation", synaValue);
    document.getElementById("vastusEst").innerHTML = "";
}

function randomSynaRus() {
    const juhuslikSyna = Math.floor(Math.random() * synad.size);
    const synaKey = Array.from(synad.keys())[juhuslikSyna]; // get key from dictionary
    const synaValue = synad.get(synaKey); //get value from dictionaruy
    document.getElementById("random-synaRus").innerHTML = synaValue;
    document.getElementById("kontrollRus").setAttribute("data-translation", synaKey);
    document.getElementById("vastusRus").innerHTML = "";
}

function checkTranslationEst() {
    const userInput = document.getElementById("kontrollEst").value.trim().toLowerCase();
    const correctTranslation = document.getElementById("kontrollEst").getAttribute("data-translation").toLowerCase();
    const answer = document.getElementById("vastusEst");
    answer.style.color = "black";

    if (userInput === correctTranslation) { // check for correct translate
        answer.innerHTML = "Õige vastus!";
        answer.style.color = "green";

    }
    else if (userInput === "") { // if space
        answer.innerHTML = "Kirjuta sõna vene keeles";
        answer.style.color = "black";
    }
    else { // if wrong
        answer.innerHTML = "Vale vastus, proovi uuesti.";
        answer.style.color = "red";
    }
}


function checkTranslationRus() {
    const userInput = document.getElementById("kontrollRus").value.trim().toLowerCase();
    const correctTranslation = document.getElementById("kontrollRus").getAttribute("data-translation").toLowerCase();
    const answer = document.getElementById("vastusRus");
    answer.style.color = "black";

    if (userInput === correctTranslation) { // check for correct translate
        answer.innerHTML = "Õige vastus!";
        answer.style.color = "green";

    }
    else if (userInput === "") { // if space
        answer.innerHTML = "Kirjuta sõna vene keeles";
        answer.style.color = "black";
    }
    else { // if wrong
        answer.innerHTML = "Vale vastus, proovi uuesti.";
        answer.style.color = "red";
    }
}

function answerTestEst() {  // we can get correct answer by button

    const correctTranslation = document.getElementById("kontrollEst").getAttribute("data-translation");
    document.getElementById("vastusEst").innerHTML = correctTranslation;

}


function answerTestRus() {  // we can get correct answer by button

    const correctTranslation = document.getElementById("kontrollRus").getAttribute("data-translation");
    document.getElementById("vastusRus").innerHTML = correctTranslation;

}