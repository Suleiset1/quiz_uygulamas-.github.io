const questions = [
  {
        question: "1)Bilgisayarların birbiri ile iletişim kurmalarını sağlayan protokol aşağıdakilerden hangisidir?",
        options: ["DNS", "IP", "HTML", "XML"],
        answer: "IP"
    },
    {
        question: "2)İnternet adreslerinde görülen kısaltmalardan aşağıdakilerden hangisi eğitim kurumlarını ifade eder?",
        options: [".edu", ".gov", ".mil", ".net"],
        answer: ".edu"
    },
  {
    question: "3)HTML'de en büyük başlık nedir?",
    options: ["h1", "h2", "h3", "h4"],
    answer: "h1"
  },
  {
    question: "4)Hazırlamakta olduğunuz forma şifreli alanlar eklemek için aşağıdakilerden hangisi kullanılır?",
    options: ["Checkbox", "Submit", "Text", "Password"],
    answer: "Password"
  },
  {
    question: "5)Aşağıdakilerden özelliklerden hangisi bir metindeki satırların arasındaki mesafeyi ayarlamaya yarar?",
    options: ["rowspace", "front-space", "line-height", "height"],
    answer:"line-height"
   },
    {
        question: "6)Aşağıdaki target parametrelerinden hangisi bağlantının yeni bir pencerede açılmasını sağlar?",
        options: ["_blank", "_self", "_parent", "_top"],
        answer: "_blank"
    },
    {
        question: "7)Aşağıdaki yöntemlerden hangisinde bir tarih oluşturulurken hata alınır?",
        options: ["new Date(dateString)", "new Date()", "new Date(seconds)", "new Date(year,month,day,hours,minutes,seconds,milliseconds"],
        answer: "new Date(seconds)"
    },
    {
        question: "8)Bir HTML sayfasına JavaScript eklemek için hangi etiket kullanılır?",
        options: ["script=java", "javascript", "script", "js"],
        answer: "script"
    },
    {
        question: "9)javascript ifadeleri aşağıdakilerden hangisi tarafından sonlandırılır",
        options: ["/", "!", ";", "Hiçbiri"],
        answer: ";"
    },
    {
        question: "10)Aşağıdakilerden hangisi html belgesini tanımlamada kullanılır?",
        options: ["Css", "Doctype", "Link", "Style"],
        answer: "Doctype"
    },
    {
        question: "11)Yazının rengini değiştiren Css komutu hangisidir?",
        options: ["Textcolor", "FontColor", "Font-Color", "Color"],
        answer: "Color"
    },
    {
        question: "12)Css'de yazı tipini değiştiren ifade hangisidir?",
        options: ["Font", "Font-name", "FontName", "Font-Family"],
        answer:"Font-Family"
    },
    {
        question: "13)Css'de arkaplan rengini değiştiren etiket hangisidir?",
        options: ["background-color", "bg-color", "b-color", "bground"],
        answer:"background-color"
    },
    {
        question: "14)Harici bir Css sayfasını,html sayfamıza ekleyen komut hangisidir?",
        options: ["link", "stylesheet", "style", "type"],
        answer:"link"
    },
    {
        question: "15)Bir yazının belirli bir bölümünü biçimlendirmek için hangi etiket kullanılır?",
        options: ["span", "div", "p", "display"],
        answer: "span"
    },
    {
        question: "16)Bir sayfanın başlığı hangi etiket altına yazılır?",
        options: ["body", "title", "form", "hr"],
        answer: "title"
    },
    {
        question: "17)Aşağıdakilerden hangisi bir web sitesinin ana sayfasının dosya adıdır?",
        options: ["anasayfa.html", "anasayfa.htm", "birincisayfa.html", "index.html"],
        answer:"index.html"
    },
    {
        question: "18)Alt satıra geçiren etiket aşağıdakilerden hangisidir?",
        options: ["hr", "br", "center", "p"],
        answer:"br"
    },
    {
        question: "19)HTML' de link(bağlantı) vermek için kullanılan etiket nedir?",
        options: ["li", "src", "a", "div"],
        answer:"a"
    },
    {
        question: "20)Bir web sayfası hangi etiket ile biter?",
        options: ["body", "head", "html", "meta"],
        answer:"html"
    }

];

let currentQuestionIndex = 0;
let userAnswers = [];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = document.createElement('label');
    option.innerHTML = `<input type="radio" name="answer" value="${currentQuestion.options[i]}"> ${currentQuestion.options[i]}`;
    optionsContainer.appendChild(option);
  }
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  
  if (!selectedOption) {
    alert('Lütfen bir seçenek seçin!');
    return;
  }

  const answer = selectedOption.value;
  userAnswers.push(answer);

  if (currentQuestionIndex === questions.length - 1) {
    showResult();
  } else {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function showResult() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

    const resultText = `Toplam ${questions.length} sorudan ${score}/${questions.length} puan aldınız.`;
  resultContainer.textContent = resultText;
}

loadQuestion();
submitButton.addEventListener('click', submitAnswer);
