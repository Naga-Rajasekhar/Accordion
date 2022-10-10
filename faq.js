const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {}

function creatingFaq() {
  faqData.forEach((faqitem) => {
    createFaq(faqitem.question, faqitem.answer);
  });
}
creatingFaq();

function createFaq(ques, sol) {
  const faq = document.createElement("div");
  faq.classList.add("faq");
  accordianBody.appendChild(faq);

  const faq_header = document.createElement("div");
  faq_header.classList.add("faq_header");
  faq.appendChild(faq_header);

  const h3 = document.createElement("h3");
  h3.innerText = ques;
  faq_header.appendChild(h3);

  const button = document.createElement("button");
  button.classList.add("show_btn");
  button.innerText = "+";
  faq_header.appendChild(button);

  const p = document.createElement("p");
  p.innerText = sol;
  p.classList.add("hidden");
  faq.appendChild(p);
}

function btnStatusUpdate() {}

// adding EventListener to the Button
const allFaq = document.querySelectorAll(".show_btn");
allFaq.forEach((eachFaq) => {
  eachFaq.addEventListener("click", () => {
    const answer = eachFaq.parentElement.parentElement.lastChild;
    answer.classList.toggle("hidden");
  });
});
