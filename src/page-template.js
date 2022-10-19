const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h3 class="card-title">${manager.getName()}</h3>
            <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h4>
        </div>
        <div class='card-body'>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
   `;
};

const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title">${engineer.getName()}</h3>
        <h4 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h4>
    </div>
    <div class='card-body'>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">github: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div>
`;
};

const generateIntern = intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title">${intern.getName()}</h3>
        <h4 class="card-title"><i class="fas fa-user-gradguate mr-2"></i>${intern.getRole()}</h4>
    </div>
    <div class='card-body'>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
};

    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
        );
        
        return html.join("");
    }

    module.exports = team => {

        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
        <div class=" ">
            <div class='row'>
                <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class=" ">
            </div>
        </div>
    </div>
    <div>
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>

        `
    }