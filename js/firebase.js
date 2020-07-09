let subform = document.querySelector("#subform");

subform.addEventListener("submit",(e) => {
    e.preventDefault();
    db.collection("emails").add({
        emai:subform.email.value
    });

    subform.reset();
    window.alert("Thanks for signing up!!")
});