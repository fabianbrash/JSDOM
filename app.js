const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const addListBtn = document.querySelector(".addListBtn");

//text.style.color = "red";
//text.style.backgroundColor = "red"; 
//text.classList.add("change");

changeColor.addEventListener("click", () => {
    //text.classList.add('change');
    text.classList.toggle('change');
});


const userList = document.querySelectorAll(".name-list li");

const userListRoot = document.querySelector(".name-List");
const listInput = document.querySelector(".list-input");

console.log(userList);

for(user of userList){
    user.addEventListener('click', function() {
        console.log(this);
        this.style.color = "red";
    });
}

addListBtn.addEventListener('click', () => {
    //Create a li out of thin air
      const newLi = document.createElement('LI');
      const liContent = document.createTextNode(listInput.value);
      console.log(listInput.value);
    //Add the input value inside that new li
    newLi.appendChild(liContent);

    //Attach the li to the user List
    userListRoot.appendChild(newLi);

    //Clear form
    listInput.value = '';
})