const keyboard = {
  elements: {
    main: null,
    keys_container: null,
    keys: [],
    material_keys: [],
  },

  properties: {
    value: "",
    capslock: false,
  },
  event_handlers: {
    oninput: null,
    onclose: null,
  },

  init() {
    // create main elements
    this.elements.main = document.createElement("div");
    this.elements.keys_container = document.createElement("div");

    // add class to div
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keys_container.classList.add("keyboard--keys");
    this.elements.keys_container.appendChild(this.create_keys());

    //copy paste the elements in keyscontainer to kerys array using queryselectorall

    this.elements.keys = this.elements.keys_container.querySelectorAll(
      ".default"
    );

    // append these two elements and add to body of html document
    this.elements.main.appendChild(this.elements.keys_container);
    document.body.appendChild(this.elements.main);

    //for adding the current value to the text area
    document.querySelectorAll(".text-center").forEach((element) => {
      element.addEventListener("focus", () => {
        this.open(
          document.getElementById("keywords").value,
          (current_value) => {
            document.getElementById("keywords").value =
              keyboard.properties.value; //current value is this.properties.value
          }
        );
      });
    });
  },

  create_keys() {
    const fragment = document.createDocumentFragment(); //virtual document
    const key_layout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "capslock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "enter",
      "done",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "space",
    ];

    key_layout.forEach((key) => {
      const btn = document.createElement("button");
      const line_break = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

      //set attributes
      btn.setAttribute("type", "button");
      btn.classList.add("keyboard--key");

      switch (key) {
        case "backspace":
          btn.classList.add("keyboard--key--wide", "material-icons");
          btn.innerHTML = "backspace";

          btn.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this.trigger_event("oninput");
          });
          break;

        case "capslock":
          btn.classList.add(
            "keyboard--key--wide",
            "keyboard__key__activate",
            "material-icons"
          );
          btn.innerHTML = "keyboard_capslock";

          btn.addEventListener("click", () => {
            this.toggle_capslock();
          });
          break;
        case "enter":
          btn.classList.add("keyboard--key--wide", "material-icons");
          btn.innerHTML = "keyboard_return";

          btn.addEventListener("click", () => {
            this.properties.value += "\n";
            this.trigger_event("oninput");
          });
          break;
        case "space":
          btn.classList.add("keyboard--key--extra--wide", "material-icons");
          btn.innerHTML = "space_bar";

          btn.addEventListener("click", () => {
            this.properties.value += " ";
            this.trigger_event("oninput");
          });
          break;

        case "done":
          btn.classList.add(
            "keyboard--key--wide",
            "keyboard_key_dark",
            "material-icons"
          );
          btn.innerHTML = "check_circle";

          btn.addEventListener("click", () => {
            this.close();
            this.trigger_event("onclose");
          });
          break;
        default:
          btn.textContent = key.toLowerCase(); //text content of elements

          btn.classList.add("default"); //for selecting the default keys

          btn.addEventListener("click", () => {
            this.properties.value += this.properties.capslock
              ? key.toUpperCase()
              : key.toLowerCase();
            this.trigger_event("oninput");
          });
      }
      fragment.appendChild(btn);
      if (line_break) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment; //return value of create keys()
  },

  trigger_event(handler_name) {
    if (this.event_handlers[handler_name] !== "function") {
      this.event_handlers[handler_name](this.properties.value); //this will give the current value of the keyboard
    }
  },

  toggle_capslock() {
    //console.log("capslock toggled");
    this.properties.capslock = !this.properties.capslock;

    for (const key of this.elements.keys) {
      if (key.childElementCount == 0) {
        key.textContent = this.properties.capslock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initial_value, oninput, onclose) {
    //this can be used as call by value function
    this.properties.value = initial_value || " ";
    this.event_handlers.oninput = oninput;
    this.event_handlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.event_handlers.oninput = oninput;
    this.event_handlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  },
};

window.addEventListener("DOMContentLoaded", function () {
  keyboard.init();
});
