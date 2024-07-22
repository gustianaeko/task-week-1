let dataProjects = [];

const addProject = (event) => {
  event.preventDefault();

  const projectName = document.getElementById("inputProjectName").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;
  const technologies = document.getElementsByName("technologies");
  const uploadImg = document.getElementById("uploadImg").value;

  if (projectName === "") return alert("Please insert your project name");
  if (startDate === "") return alert("Please insert your project start date");
  if (endDate === "") return alert("Please insert your project end date");

  let selectedValue = null;

  for (const radio of technologies) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  let project = {
    projectName,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    description,
    selectedValue,
    uploadImg,
  };

  dataProjects.push(project);

  console.log(dataProjects);

  renderProject();
};

const calculateDateDifference = () => {
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);

  const timeDifference = end - start; //ms
  const daysDiffrence = timeDifference / (1000 * 60 * 60 * 24); //days

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  //montDifference
  const yearDiff = endYear - startYear;
  const monthDiff = endMonth - startMonth;

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  return {
    days: daysDiffrence,
    months: monthDiff,
    years: yearDiff,
  };
};

const renderProject = () => {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < dataProjects.length; i++) {
    document.getElementById("contents").innerHTML += `
    <div class="project-list-item">
        <div class="project-content">
            <div class="headerContent"> 
                <div class="project-image">
                <img src="/assests/images/red.jpg" alt="project image" style="width: 100%; border-radius: 15px;"/>
                </div>
                <h2>
                  <a href="projectDetail.html" target="_blank" style="text-decoration: none;">${
                    dataProjects[i].projectName
                  } - ${dataProjects[i].startDate.getFullYear()}</a>
                </h2>
                <p>
                  Uploaded : ${calculateDateDifference().days} Days ago
                </p>
            </div>
            <div class="detailProjectContent"> 
                20 July 2024 23:30 WIB | Eko Gustiana
            </div>
                <p class="description"> 
                ${dataProjects[i].description}
                </p>
            <div class="projectIcons"> 
                <i class="fa-brands fa-node fa-lg" style="color: #63E6BE;"></i>
                <i class="fa-brands fa-js fa-lg" style="color: #63E6BE;"></i>
                <i class="fa-brands fa-react fa-lg" style="color: #63E6BE;"></i>
                <i class="fa-brands fa-vuejs fa-lg" style="color: #63E6BE;"></i>
            </div>
            <div class="btn-group">
                <button class="btn-post">Delete Post</button>
                <button class="btn-edit"">Edit Post</button>
            </div>
        </div>
    </div>
                `;
  }
};
