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

function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.size);
    const synaKey = Array.from(synad.keys())[juhuslikSyna];
    const synaValue = synad.get(synaKey);
    document.getElementById("random-syna").innerHTML = synaKey;
    document.getElementById("kontroll").setAttribute("data-translation", synaValue);
    document.getElementById("vastus").innerHTML = "";
}

function checkTranslation() {
    const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
    const correctTranslation = document.getElementById("kontroll").getAttribute("data-translation").toLowerCase();
    const answer = document.getElementById("vastus");
    answer.style.color = "black";

    if (userInput === correctTranslation) {
        answer.innerHTML = "Õige vastus!";
        answer.style.color = "green";

    }
    else if (userInput === "") {
        answer.innerHTML = "Kirjuta sõna vene keeles";
        answer.style.color = "black";
    }
    else {
        answer.innerHTML = "Vale vastus, proovi uuesti.";
        answer.style.color = "red";
    }
}

function answerTest() {

    const correctTranslation = document.getElementById("kontroll").getAttribute("data-translation");
    document.getElementById("vastus").innerHTML = correctTranslation;

}