const userDiv = document.querySelector(".userDiv")
const btnUser = document.querySelector(".btnUsers")
const Fon = document.querySelector(".orqaFon")
const container = document.querySelector(".container")
const chiqish=document.getElementById("userChiqish")
const shaxsiyMalumotlar = document.querySelector(".shaxsiyMalumot")
const userRegistr = document.querySelector(".userRegistr")
const btnExit = document.querySelector(".btnExit")
const btnExitTel = document.querySelector(".btnExitTel")
const userKirish=document.querySelector(".userKirish")
const userRegistrTel = document.querySelector(".userRegistrTel")
const tiklashDiv = document.querySelector(".tiklashDiv")
const notPass = document.getElementById("notPass")
const btnTiklashExit = document.querySelector(".btnTiklashExit")
const userRegistratsia = document.querySelector(".userRegistratsia")
const tiklashBtnKirish = document.querySelector(".tiklashBtnKirish")
const userRegistrSms = document.querySelector(".userRegistrSms");
const btnExitSms=document.querySelector(".btnExitSms")
// bosilganda shaxsiyMalumotlar chiqishi uchun
btnUser.addEventListener("click", function (e) {
    e.preventDefault();
    userDiv.style.display = "block";
    Fon.style.display = "block";
})
// userDiv dan chiqish uchun
chiqish.addEventListener("click", function () {
    userDiv.style.display = "none";
    Fon.style.display = "none";
})
// shaxsiyMalumotlar bosilganda kirish yoki registratsiya qilish
shaxsiyMalumotlar.addEventListener("click", function () {
    userRegistr.style.display="block";
    Fon.style.display = "block";
    userDiv.style.display = "none";
})
// kirish yoki registratsiyadan chiqish uchun
btnExit.addEventListener("click", function () {
     userRegistr.style.display = "none";
     Fon.style.display = "none";
})
// userKirish bosilganda Telefon raqam orqali kirish ishlashi
userKirish.addEventListener("click", function () {
    userRegistrTel.style.display = "block"
    Fon.style.display = "block";
    Fon.style.backgroundColor = "#626262";
})
// Telefon raqam orqali kirishni olib tashlash
btnExitTel.addEventListener("click", function () {
     userRegistrTel.style.display = "none";
    Fon.style.display = "none";
    userRegistr.style.display = "none"
})
// Parolni Tiklash uchun 
notPass.addEventListener("click",function () {
    tiklashDiv.style.display = "block"
    Fon.style.display = "block";
})
//Parolni tiklash qismidan chiqish
btnTiklashExit.addEventListener("click", function () {
    tiklashDiv.style.display = "none"
    Fon.style.display = "none"
    userRegistrTel.style.display = "none";
    userRegistr.style.display = "none";
})
// REgistratsiyadan o'tish telefon raqam orqali
userRegistratsia.addEventListener("click", function () {
     tiklashDiv.style.display = "block";
     Fon.style.display = "block";
})
//Registratsiyadan o'tishda sms parolni kiritsh
tiklashBtnKirish.addEventListener("click", function () {
    userRegistrSms.style.display = "block"
     tiklashDiv.style.display = "none";
})
//Kirishni tastiqlshni olib tashlash
btnExitSms.addEventListener("click", function () {
    userRegistrSms.style.display = "none"
    userRegistrTel.style.display = "none";
    userRegistr.style.display = "none";
    Fon.style.display = "none";    
})