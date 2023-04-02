const userDiv = document.querySelector(".userDiv");
const btnUser = document.querySelector(".btnUsers");
const Fon = document.querySelector(".orqaFon");
const container = document.querySelector(".container");
const chiqish = document.getElementById("userChiqish");
const shaxsiyMalumotlar = document.querySelector(".shaxsiyMalumot");
const userRegistr = document.querySelector(".userRegistr");
const btnExit = document.querySelector(".btnExit");
const btnExitTel = document.querySelector(".btnExitTel");
const userKirish = document.querySelector(".userKirish");
const userRegistrTel = document.querySelector(".userRegistrTel");
const tiklashDiv = document.querySelector(".tiklashDiv");
const notPass = document.getElementById("notPass");
const btnTiklashExit = document.querySelector(".btnTiklashExit");
const userRegistratsia = document.querySelector(".userRegistratsia");
const tiklashBtnKirish = document.querySelector(".tiklashBtnKirish");
const userRegistrSms = document.querySelector(".userRegistrSms");
const btnExitSms = document.querySelector(".btnExitSms");
const katalogExitBtn = document.querySelector(".katalogExitBtn");
const katalogdiv = document.querySelector(".katalogdiv");
const btnCategory = document.querySelector(".btnCategory");
// bosilganda shaxsiyMalumotlar chiqishi uchun
btnUser.addEventListener("click", function (e) {
  e.preventDefault();
  userDiv.style.display = "block";
  Fon.style.display = "block";
});
// userDiv dan chiqish uchun
chiqish.addEventListener("click", function () {
  userDiv.style.display = "none";
  Fon.style.display = "none";
});
// shaxsiyMalumotlar bosilganda kirish yoki registratsiya qilish
shaxsiyMalumotlar.addEventListener("click", function () {
  userRegistr.style.display = "block";
  Fon.style.display = "block";
  userDiv.style.display = "none";
});
// kirish yoki registratsiyadan chiqish uchun
btnExit.addEventListener("click", function () {
  userRegistr.style.display = "none";
  Fon.style.display = "none";
});
// userKirish bosilganda Telefon raqam orqali kirish ishlashi
userKirish.addEventListener("click", function () {
  userRegistrTel.style.display = "block";
  Fon.style.display = "block";
  Fon.style.backgroundColor = "#626262";
});
// Telefon raqam orqali kirishni olib tashlash
btnExitTel.addEventListener("click", function () {
  userRegistrTel.style.display = "none";
  Fon.style.display = "none";
  userRegistr.style.display = "none";
});
// Parolni Tiklash uchun
notPass.addEventListener("click", function () {
  tiklashDiv.style.display = "block";
  Fon.style.display = "block";
});
//Parolni tiklash qismidan chiqish
btnTiklashExit.addEventListener("click", function () {
  tiklashDiv.style.display = "none";
  Fon.style.display = "none";
  userRegistrTel.style.display = "none";
  userRegistr.style.display = "none";
});
// REgistratsiyadan o'tish telefon raqam orqali
userRegistratsia.addEventListener("click", function () {
  tiklashDiv.style.display = "block";
  Fon.style.display = "block";
});
//Registratsiyadan o'tishda sms parolni kiritsh
tiklashBtnKirish.addEventListener("click", function () {
  userRegistrSms.style.display = "block";
  tiklashDiv.style.display = "none";
  Fon.style.display = "block";
});
//Kirishni tastiqlshni olib tashlash
btnExitSms.addEventListener("click", function () {
  userRegistrSms.style.display = "none";
  userRegistrTel.style.display = "none";
  userRegistr.style.display = "none";
  Fon.style.display = "none";
});
// categoriya uchun
btnCategory.addEventListener("click", function (e) {
  e.preventDefault();
  katalogdiv.style.display = "block";
});
katalogExitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  katalogdiv.style.display = "none";
});
const katalogRight = document.querySelector(".katalogRight");
const katalogTelefon = document.querySelector(".katalogTelefon");
katalogTelefon.addEventListener("click", function () {
  katalogRight.style.display = "block";
  katalogTelefon.style.backgroundColor = "white";
  katalogdiv.style.display = "block";
});
// category Pc chiqazish
const categoryBtnList = document.querySelector(".categoryBtnList");
const BtnKategoryPc = document.querySelector(".BtnKategoryPc");
const sectionCategory = document.querySelector(".sectionCategory");
const sectionEngOmmabop = document.querySelector(".sectionEngOmmabop");
const slideshowContainer2 = document.querySelector(".slideshow-container2");
const slideshowContainer3 = document.querySelector(".slideshow-container3");
const section3BrendlarBoyicha = document.querySelector(
  ".section3BrendlarBoyicha"
);
const section3DokonlarBoyicha = document.querySelector(
  ".section3DokonlarBoyicha"
);
const dotsHover1 = document.querySelector(".dotsHover1");
const dotsHover = document.querySelector(".dotsHover");
BtnKategoryPc.addEventListener("click", function () {
  categoryBtnList.style.display = "block";
  sectionCategory.style.display = "none";
  slideshowContainer2.style.display = "none";
  slideshowContainer3.style.display = "none";
  sectionEngOmmabop.style.display = "none";
  section3BrendlarBoyicha.style.display = "none";
  section3DokonlarBoyicha.style.display = "none";
  dotsHover.style.display = "none";
  dotsHover1.style.display = "none";
});

const btnCategoryOnlyLaptop = document.querySelector(".btnCategoryOnlyLaptop");
const categoryBtnList2 = document.querySelector(".categoryBtnList2");
btnCategoryOnlyLaptop.addEventListener("click", function () {
    categoryBtnList2.style.display = "block";
     sectionCategory.style.display = "none";
     slideshowContainer2.style.display = "none";
     slideshowContainer3.style.display = "none";
     sectionEngOmmabop.style.display = "none";
     section3BrendlarBoyicha.style.display = "none";
     section3DokonlarBoyicha.style.display = "none";
     dotsHover.style.display = "none";
    dotsHover1.style.display = "none";
  categoryBtnList.style.display = "none";
})
const katalogMiniCheckbox = document.querySelector(".katalogMiniCheckbox");
const FiltrlashBtn = document.querySelector(".FiltrlashBtn");
const categoryMiniLeft = document.querySelector(".categoryMiniLeft");
FiltrlashBtn.addEventListener("click", function () {
    katalogMiniCheckbox.style.display = "block";
    categoryMiniLeft.style.display="none"
})
const ExitFiltr = document.querySelector(".ExitFiltr");
ExitFiltr.addEventListener("click", function () {
     katalogMiniCheckbox.style.display = "none";
     categoryMiniLeft.style.display = "block";
})