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
function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.size);
    const synaKey = Array.from(synad.keys())[juhuslikSyna]; // get key from dictionary
    const synaValue = synad.get(synaKey); //get value from dictionaruy
    document.getElementById("random-syna").innerHTML = synaKey;
    document.getElementById("kontroll").setAttribute("data-translation", synaValue);
    document.getElementById("vastus").innerHTML = "";
}

function checkTranslation() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
    const correctTranslation = document.getElementById("kontroll").getAttribute("data-translation").toLowerCase();
    const answer = document.getElementById("vastus");
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

function answerTest() {  // we can get correct answer by button

    const correctTranslation = document.getElementById("kontroll").getAttribute("data-translation");
    document.getElementById("vastus").innerHTML = correctTranslation;

}