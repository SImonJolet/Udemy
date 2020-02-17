const courseName = document.getElementById('courseName');
const courseRating= document.getElementById('courseRating');

const btnAdd = document.getElementById('btnAdd');

const courseList = document.getElementById('courseList');

const clear = () => {
    courseName.value="";
    courseRating.value="";
}

btnAdd.addEventListener('click', () => {

    const courseNameValue= courseName.value;
    const courseRatingValue = courseRating.value;

        if(courseNameValue.lenght <=0 || courseRatingValue.lenght <= 0){
            alert('vous devez remplir les deux champs');
        } 
        
    const newItem= document.createElement('ion-item');
    newItem.textContent = courseNameValue + ":" + courseRatingValue + "/5";

    clear();
    courseList.appendChild(newItem);

});