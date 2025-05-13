function scrollToElement(elementSelector, instance = 0){
        //select all element that match the given selector
        const elements = document.querySelectorAll(elementSelector);
        //check if there are elements matching the selector and if the request instance exist
        if(elements.length > instance){
            //Scroll to the specified instance of the element
            elements[instance].scrollIntoView({ behavior: 'smooth' });
        }  
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});

