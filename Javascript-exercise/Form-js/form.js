document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;

    var body =
        "İsim: " +
        name +
        "\nSoyisim: " +
        surname +
        "\nE-posta: " +
        email +
        "\nTelefon: " +
        phone +
        "\nKonu: " +
        title +
        "\nMesaj: " +
        message;

    var mailtoLink =
        "mailto:contact@stilteks.com.tr" +
        "?subject=" +
        encodeURIComponent("Stilteks İletişim") +
        "&body=" +
        encodeURIComponent(body);

    window.location.href = mailtoLink;

    // Form alanlarını temizle
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
});