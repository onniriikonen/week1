function initializeCode() {
    const button1 = document.getElementById("my-button");
    const heading = document.getElementById("header1");
    const button2 = document.getElementById("add-data");
    const list = document.getElementById("my-list");
    const textarea = document.getElementById("message");

    button1.addEventListener("click", function() {
        console.log("hello world");
        heading.textContent = "Moi maailma";
    });

    button2.addEventListener("click", function() {
        const text = textarea.value;
        const newItem = document.createElement("li");
        newItem.textContent = text;
        list.appendChild(newItem);
    });

}

initializeCode();