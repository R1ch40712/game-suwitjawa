function getPilihanComputer() {
  // menangkap pilihan komputer
  // membangkitkan bilangan random
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "Menang!" : "Kalah!";
  if (player == "orang") return comp == "gajah" ? "Kalah!" : "Menang!";
  if (player == "semut") return comp == "orang" ? "Kalah!" : "Menang!";
  if (player == "orang") return comp == "semut" ? "Menang!" : "Kalah!";
  if (player == "gajah") return comp == "semut" ? "Kalah!" : "Menang!";
  if (player == "semut") return comp == "gajah" ? "Menang!" : "Kalah!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "image/" + gambar[i++] + ".jpg");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      //   mengubah gambar di area komputer
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "image/" + pilihanComputer + ".jpg");

      //   menampilkan hasil di info
      const hsl = document.querySelector(".info");
      hsl.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp: " + pilihanComputer);
//   //   console.log("player: " + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   //   mengubah gambar di area komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".jpg");

//   //   menampilkan hasil di info
//   const hsl = document.querySelector(".info");
//   hsl.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp: " + pilihanComputer);
//   //   console.log("player: " + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   //   mengubah gambar di area komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".jpg");

//   //   menampilkan hasil di info
//   const hsl = document.querySelector(".info");
//   hsl.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp: " + pilihanComputer);
//   //   console.log("player: " + pilihanPlayer);
//   //   console.log("hasil: " + hasil);

//   //   mengubah gambar di area komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "image/" + pilihanComputer + ".jpg");

//   //   menampilkan hasil di info
//   const hsl = document.querySelector(".info");
//   hsl.innerHTML = hasil;
// });
