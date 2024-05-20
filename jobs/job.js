const jobs = [
    {
      title: "Software Engineer",
      image: "software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "40",
      link: "https://www.naukri.com/fresher-software-engineer-jobs",
    },
  
    {
      title: "Data Scientist",
      image: "data-scientist.svg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "30",
      link: "https://www.naukri.com/data-scientist-jobs",
    },
  
    {
      title: "Project Manager",
      image: "project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "10",
      link: "https://www.naukri.com/project-manager-jobs",
    },
  
    {
      title: "Product Manager",
      image: "product-manager.svg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "20",
      link: "https://www.naukri.com/fresher-product-management-jobs-in-india",
    },
  
    {
      title: "Sales Representative",
      image: "sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "40",
      link: "https://www.naukri.com/sales-representative-jobs",
    },
  
    {
      title: "Marketing Manager",
      image: "marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "25",
      link: "https://www.naukri.com/marketing-manager-jobs-in-madhya-pradesh",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  