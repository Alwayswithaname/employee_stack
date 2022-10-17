const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h3 class="card-title">${manager.getName()}</h3>
            <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h4>
        </div>
        <div class='card-body'>
            <ul class="list-group">
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
        <h4 class="card-title"><i class="fas fa-glasses mr-2></i>${engineer.getRole()}</h4>
    </div>
    <div class='card-body'>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
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
        <h4 class="card-title"><i class="fas fa-user-gradguate mr-2></i>${intern.getRole()}</h4>
    </div>
    <div class='card-body'>
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${intern.getOfficeNumber()}</li>
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
</head>

<body>
        <div class=" ">
            <div class='row'>
                <h1 class=" ">
            </div>
        </div>
    </div>
    <div>
        <div class="row">
            <div class=" ">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>

        `
    }