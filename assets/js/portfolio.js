const portfolio = [
  {
    title: "Project: Job Hunter",
    text:
      "Search, find, and save technology jobs you want to apply to. Add a todo list for each job so that you can keep track of each application process!",
    url: "https://project-2-spt.herokuapp.com/",
    img: "./assets/img/portfolio/jobhunter.png",
  },
  {
    title: "Burger O'Clock",
    text:
      "Add and keep track of the various burgers you would like to DEVOUR! Check them off the list when you do.",
    url: "https://intense-citadel-89540.herokuapp.com/",
    img: "./assets/img/portfolio/burger.png",
  },
  {
    title: "Project: Travel Buddy",
    text:
      "Do you want to travel?! Explore a culture before you visit by researching its food and points of interests!",
    url: "https://stadds.github.io/TravelBuddy/",
    img: "./assets/img/portfolio/ian-dooley-3NCA3tbaE5I-unsplash.jpg",
  },
  {
    title: "ReadMe Ready",
    text:
      "Download and use the CLI to answer questions about your project, in order to generate a formatted ReadMe",
    url: "https://github.com/stadds/09-ReadMe-Ready",
    img: "./assets/img/portfolio/readmeready.png",
  },
  {
    title: "CLI Employee Management System",
    text:
      "Download and use the CLI to add, update, delete, and pull reports on your Company's departments, roles, and employees.",
    url: "https://github.com/stadds/12-EmployeeManagementSystem",
    img: "./assets/img/portfolio/ems.png",
  },
  {
    title: "CLI Generate Team Page",
    text:
      "Download and use the CLI to enter in your employees and their information, and generate a HTML team roster page.",
    url: "https://github.com/stadds/10-generate-team-page",
    img: "./assets/img/portfolio/teampage.png",
  },
  {
    title: "Weather Dashboard",
    text: "Search a city for the current and 5 day weather forecast",
    url:
      "https://stadds.github.io/uconn-bootcamp-homework/06-WeatherDashboard/",
    img: "./assets/img/portfolio/ross-sneddon-zNGPmIVPQf4-unsplash.jpg",
  },
  {
    title: "JavaScript Quiz",
    text: "How well do you know the basics? Find out in this timed quiz!",
    url:
      "https://stadds.github.io/uconn-bootcamp-homework/04-CodeQuiz/index.html",
    img: "./assets/img/portfolio/emily-morter-8xAA0f9yQnE-unsplash.jpg",
  },
  {
    title: "Password Generator",
    text:
      "Generate a password between 8 and 128 characters, based on criteria you choose.",
    url:
      "https://stadds.github.io/uconn-bootcamp-homework/04-CodeQuiz/index.html",
    img: "./assets/img/portfolio/hacker-1944688_640.jpg",
  },
];



$(document).ready(function () {

    console.log("...loading");

    for (let i = 0; i < portfolio.length; i++) {
        // console.log("in loop");

        const project = portfolio[i];

        let $cardCol = $("<div>").addClass("col mb-4");

        let $card = $("<div>").addClass("card h-100 bg-third");
        $cardCol.append($card);

        let $cardImg = $("<img>").addClass("card-img-top img-fluid").attr({ src: project.img, alt: ""});
        $card.append($cardImg);

        let $cardBody =  $("<div>").addClass("card-body bg-third");
        $card.append($cardBody);

        let $cardTitle =  $("<h2>").addClass("card-title font-weight-bold").text(project.title);
        $cardBody.append($cardTitle);

        let $hr = $("<hr>").addClass("fourth");
        $cardBody.append($hr);

        let $cardText =  $("<p>").addClass("card-text").text(project.text);
        $cardBody.append($cardText);

        let $cardURL =  $("<a>").addClass("stretched-link").attr({ href: project.url , target: "_blank" });
        $cardBody.append($cardURL);
        
        $("#card-portfolio").append($cardCol);
    }

});
