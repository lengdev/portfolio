//Typed js
var typed = new Typed("#element-position", {
    strings: [
        "Javascript Developer",
        "Web Developer",
        "System Developer",
        "UX/UI Designer",
    ],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
    backDelay: 2000,
    smartBackspace: false,
});

// Assuming your PDF file is in the same directory
const pdfUrl = "assets/cv/mycv.pdf";

document.getElementById("download").addEventListener("click", function () {
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");

    // Optionally, to trigger download:
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "lengdev.pdf"; // Set the file name
    link.click();
});

//Wow js animation
const wow = new WOW({
    callback: function (box) {
        //console.log(box);
    },
});
wow.init();
