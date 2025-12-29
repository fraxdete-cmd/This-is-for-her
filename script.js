const readBtn = document.getElementById("readBtn");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const text = `
bff, it’s already a new year.

I just wish you well and hope you stay happy, always.

Never forget that I care for you.
Never forget that I’m always here for you.
I’ve got your back always, no matter what.

We both cared, and we both tried in the best way we knew how.
But the universe just never gave us enough space to become “us.”
Still, I’m grateful for every moment we shared.

I hope you never change.
Stay the way you are,
because you’re more beautiful than you think you are.

You were, and will always be,
one of the most beautiful things that ever happened to me.
`;

let index = 0;
let speed = 50; // typing speed (smaller = faster)

function typeWriter() {
  if (index < text.length) {
    letterText.innerHTML += text.charAt(index) === "\n"
      ? "<br>"
      : text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

readBtn.addEventListener("click", () => {
  intro.style.display = "none";
  letter.style.display = "block";
  typeWriter();
});
