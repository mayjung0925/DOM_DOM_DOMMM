document.addEventListener('DOMContentLoaded', function () {
    //create a button with the text 'Add Square'
    const button = document.createElement("button");
    const btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    //Add container to use it as a flex container
    const container = document.createElement("div");
    container.classList.add("container")
    document.body.appendChild(container);
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    let counter = 0;

    const colorArr = [
        '#FAEBD7',
        '#00FFFF',
        '#7FFFD4',
        '#FFE4C4',
        '#8A2BE2',
        '#7FFF00',
        '#6495ED',
        '#00FFFF',
        '#00008B',
        '#E9967A',
        '#9932CC',
        '#8FBC8F',
        '#FF1493',
        '#FF00FF',
        '#FFD700',
        '#ADFF2F',
        '#FF69B4',
        '#E0FFFF',
        '#90EE90',
        '#87CEFA'
    ]

    button.addEventListener('click', function () {
        counter++
        //create a new div with id& class name, style it to a square
        const newDiv = document.createElement('div');
        newDiv.id = counter;
        newDiv.className = 'box';
        newDiv.style.width = '100px';
        newDiv.style.height = '100px';
        newDiv.style.backgroundColor = 'black';

        // set a variable with the value of id attribute & createTextNode to hold it
        const newDivNum = newDiv.getAttribute('id');
        const newDivText = document.createTextNode(newDivNum);

        container.appendChild(newDiv);


        newDiv.addEventListener('click', function () {
            //click the newdiv->change the background color
            const randomNum = Math.floor(Math.random() * colorArr.length);
            newDiv.style.backgroundColor = colorArr[randomNum];

            newDiv.style.display = 'flex';
            newDiv.style.justifyContent = 'center';
            newDiv.style.alignItems = 'center';

        })

        //when mouse is over the newDiv, newDivText value shows up
        newDiv.addEventListener('mouseover', function () {
            newDiv.appendChild(newDivText);
        })

        //when mouse is out of the div, newDivText is empty
        newDiv.addEventListener('mouseout', function () {
            newDiv.textContent = ""
        })

        newDiv.addEventListener('dblclick', function () {


           
            const nextSibling = newDiv.nextElementSibling;
            const previousSibling = newDiv.previousElementSibling;

            if (newDivNum % 2 === 0 && nextSibling) {
                nextSibling.remove();

            } else if (newDivNum % 2 === 0 && !nextSibling) {
                return alert('No More Squares ')
            } else if (newDivNum % 2 !== 0 && previousSibling) {
                previousSibling.remove();
            } else if (newDivNum % 2 !== 0 && !previousSibling) {
                return alert('Oops! ')
            }



        })

    })





})