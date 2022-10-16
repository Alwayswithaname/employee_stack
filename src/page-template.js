const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card" employee-card">
        <div class="card-header">
            <h3 class="card-title">${manager.getName()}</h3>
            <h4 class="card-title">${manager.getRole()}</h4>
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


}