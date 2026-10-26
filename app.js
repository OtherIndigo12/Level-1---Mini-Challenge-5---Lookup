
//Data


//Elements
const uInput = document.getElementById("uInput");
const sButton = document.getElementById("sButton");
const username = document.getElementById("username");
const id = document.getElementById("identification");
const nodeId = document.getElementById("nodeID");
const oCard = document.getElementById("oCard");
const notFound = document.getElementById("notFound");

//Functions

function getUser(login)
{
    return fetch('https://api.github.com/users/octocat')
        .then((response) => {
            console.log(response.status, response.ok);
            return response.json();
        })
}

//Listeners
sButton.addEventListener("click", function(event) 
{
    event.preventDefault();

    if (uInput.value === "octocat")
    {
        getUser()
        .then((user) => {
            oCard.classList.remove("oCard");
            username.textContent = user.login
            id.textContent = user.id
            nodeId.textContent = user.node_id
            notFound.textContent = "";          
        })
    }
    
    else
    {
        notFound.textContent = "This user does not exist....";
        oCard.classList.add("oCard");
        username.textContent = "";
        id.textContent = "";
        nodeId.textContent = "";
    }
});
//On page load

