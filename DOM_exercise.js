// exercise

//1. Select the section with an id of container without using querySelector.
const sectionWithIdContainer = document.getElementById('container');

//2. Select the section with an id of container using querySelector.
const section_selectWithQuerySelector = document.querySelector('#container');

//3. Select all of the list items with a class of “second”.
const secondClasses = document.getElementsByClassName('second');

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdClassInOl = document.querySelector('ol > .third');

//5. Give the section with an id of container the text “Hello!”.
sectionWithIdContainer.append('Hello');

//6. Add the class main to the div with a class of footer.
const div_footer = document.querySelector('.footer')
div_footer.classList.add('main');

//7. Remove the class main on the div with a class of footer.
div_footer.classList.remove('main');

//8. Create a new li element.
const newLi = document.createElement('li');

//9. Give the li the text “four”.
newLi.innerText = 'four';

//10. Append the li to the ul element.
document.querySelector('ul').append(newLi);

//11. Loop over all of the lis inside the ol tag and 
//give them a background color of “green”.
const lis = document.querySelectorAll('ol > li')

for (let li of lis) {
    li.style.color = 'green'
}

//12. Remove the div with a class of footer
div_footer.remove();