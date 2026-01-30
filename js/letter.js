// 💌 LETTER CONTENT (WITH FORMATTING)
const letterContent = `Swara, my dear Rasmalai ❤️,

I made all this for you. ✨ Just so that I could see you smile. 🥺 But sadly, I'm not there to see it right now. 😞 But don't worry. I'll be with you someday... One day ❤️

I know sometimes you might feel that I don't love you, or that I love you less. But that's not true at all. 🥺❤️

I love you more than words can express. 💘 More than the stars ⭐ love the night sky 🌃🌙. More than the ocean 🌊🪸 loves the shore ⛱️🏖️.

If you think I'll leave you, I'll never ever leave you. 😤 No matter what happens, I'll always be by your side, loving you with all my heart. 🥰 Actually, you're stuck with me. 😅😘❤️✨

Every moment with you feels like a dream. Because it's just SO perfect. 😭 

Your smile is my most favorite thing in this world.😍🥺😭✨❤️💘
(Yes even more favorite than your so hot waist 👉🏻👈🏻😩😘😋)

Sometimes I don't always find the perfect words in the moment, but I hope this little surprise shows how much you actually mean to me. 🥺🥰

You just EXIST and my world lights up. 💫 
I feel happy. I think about you randomly throughout the day and it makes me smile.

You inspire me to be better, to love deeper, and to believe in the magic of us. I really believe we'll be together one day. And I WILL make it happen one day ❤️ 

If some small things, like this, make you smile, make you happy, then I want to do them for you. Always. 🥺❤️✨
Will you let me have the privilege to do all these things for my pretty princess? 🥺❤️

Yes I'm possessive and jealous sometimes 🔥, but it's only because I care about you so much ❤️‍🩹. I want to protect you from any hurt. 🥺❤️
I want to be your safe place, your home, your everything. 🏠
I hope this little letter brings a smile to your face and warmth to your heart. Because you deserve all the happiness in the world. 😌

To my dearest Swara,
You are my forever,
my reason to smile,
my heart's desire,
my one and only,
my desire to love,
my endless joy,
my sweetest dream,
my everything,
my Rasmalai.

Forever yours,
Your silly Batman 🤧💘✨🦇 
(Yea okay I won't go out after 10 PM 😭✨)
`;

// ELEMENTS
const btnLetter = document.getElementById("btn__letter");
const boxLetter = document.querySelector(".box__letter");
const letterBorder = document.querySelector(".letter__border");
const textLetter = document.querySelector(".text__letter p");
const titleLetter = document.querySelector(".title__letter");
const closeBtn = document.querySelector(".close");

let index = 0;
let typingInterval;

// 🖋️ TYPEWRITER FUNCTION
function startTyping() {
    textLetter.innerHTML = "";
    index = 0;

    typingInterval = setInterval(() => {
        if (index < letterContent.length) {
            const char = letterContent[index];

            if (char === "\n") {
                textLetter.innerHTML += "<br>";
            } else {
                textLetter.innerHTML += char;
            }

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}

// 💌 OPEN LETTER
let letterOpen = false;
let gifsAnimated = false;
btnLetter.addEventListener("click", () => {
    if (letterOpen) return; // Prevent double opening
    letterOpen = true;
    gifsAnimated = false; // Reset for new opening
    
    boxLetter.style.display = "block";

    setTimeout(() => {
        letterBorder.style.display = "block";
    }, 600);

    // TITLE TYPE
    titleLetter.innerHTML = "A letter For You 💌";
    let tIndex = 0;

    // HEART + GIF ANIMATIONS (only once)
    setTimeout(() => {
        if (!gifsAnimated) {
            gifsAnimated = true;
            document.getElementById("heart__letter")?.classList.add("animationOp");
            document.querySelectorAll(".left-gif")?.forEach(img => 
                img.classList.add("animationOp")
            );
        }
    }, 1200);

    // START TYPING
    setTimeout(startTyping, 2500);
});

// ❌ CLOSE LETTER
closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);

    textLetter.innerHTML = "";
    titleLetter.innerHTML = "";

    document.getElementById("heart__letter")?.classList.remove("animationOp");
    document.querySelectorAll(".left-gif")?.forEach(img => 
        img.classList.remove("animationOp")
    );

    letterBorder.style.display = "none";
    boxLetter.style.display = "none";
    
    letterOpen = false; // Allow opening again
});
