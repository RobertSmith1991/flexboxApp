let isResizing = false;
let lastDownX = 0;
let count = 0;
let mainContainer = document.querySelector(".main-container");
let graphAxis = document.querySelector(".graph-axis");
let btns = document.querySelectorAll(".btn");

const getN = () => Math.floor(Math.random() * 16);//arrow function

function flex_Basis(id) {
    let selector = mainContainer.children;
    for (let i = 0; i <= count; i++) {
        selector[i].style.flexBasis = id;
    };
};

let rangeWidth = document.querySelector('#range-width');
rangeWidth.value = 100;
rangeWidth.addEventListener('change', function (e) {
    let allElements = document.querySelectorAll('.main-container > div');
    allElements.forEach(function (btn) {
        let range = rangeWidth.value + 'px'
        btn.style.width = range;
    })
});

let rangeHeight = document.querySelector('#range-height');
rangeHeight.value = 100;
rangeHeight.addEventListener('change', function (e) {
    let allElements = document.querySelectorAll('.main-container > div');
    allElements.forEach(function (btn) {
        let range = rangeHeight.value + 'px'
        btn.style.height = range;
    })
});




function createBlock() {
    let height = document.querySelector('#range-height').value + 'px';
    let width = document.querySelector('#range-width').value + 'px';
    console.log(height, width)
    count++;
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const newElement = document.createElement('div');
    newElement.classList.add('boxElement');
    newElement.style.width = width;
    newElement.style.height = height;
    const numb = document.createElement('h2');
    numb.textContent = count;
    const newElement2 = document.createElement('div');
    newElement2.classList.add('boxClose');
    const x_close = document.createElement('h3');
    x_close.textContent = 'X';
    x_close.classList.add('xclose');
    newElement2.appendChild(x_close);
    //newElement2.textContent = 'X';
    newElement2.addEventListener("click", function (e) {
        console.log(e);
        let remv = e.target.parentNode;
        remv.parentNode.remove();
    });
    randomNumber = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber += hex[getN()];
    }
    newElement.style.background = randomNumber;
    //newElement.classList.add('element');
    newElement.appendChild(newElement2);
    newElement.appendChild(numb);
    mainContainer.appendChild(newElement);
};

for (i = 0; i <= 4; i++) createBlock();


//resize container element

mainContainer.addEventListener('mousedown', function (e) {
    isResizing = true;
    lastDownX = e.clientX;
});

document.addEventListener('mousemove', function (e) {
    if (!isResizing) return;

    let width = parseInt(getComputedStyle(miDiv, null).getPropertyValue('width'));
    let newWidth = width + (e.clientX - lastDownX);

    miDiv.style.width = newWidth + 'px';

    lastDownX = e.clientX;
});

document.addEventListener('mouseup', function () {
    isResizing = false;
});

function changeLinescolours(id) {
    let classColour = id + '-lines';
    mainContainer.classList.add(classColour);
    graphAxis.classList.add(classColour);
    const clases = ['row-lines', 'row-reverse-lines', 'column-lines', 'column-reverse-lines'];
    let newList = clases.slice(0, clases.indexOf(classColour)).concat(clases.slice(clases.indexOf(classColour) + 1));
    newList.forEach(classToRemove => {
        mainContainer.classList.remove(classToRemove);
        graphAxis.classList.remove(classToRemove);
    })

}

//buttons flexbox

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const ID = e.currentTarget.id;
        console.log(ID);

        switch (ID) {
            /*case "row" || "column" || "row-reverse" || "column-reverse":*/
            case "row":
            case "column":
            case "row-reverse":
            case "column-reverse":
                mainContainer.style.flexDirection = ID;
                const listado = ["row", "column", "row-reverse", "column-reverse"];
                changeLinescolours(ID);
                result(ID, listado);
                break;
            case "flex-start":
            case "flex-end":
            case "center":
            case "space-around":
            case "space-between":
            case "space-evenly":
                mainContainer.style.justifyContent = ID;
                const listado2 = ["flex-start", "flex-end", "center", "space-around", "space-between", "space-evenly"];
                result(ID, listado2);
                break;
            case "stretch":
            case "flexStartAI":
            case "flexEndAI":
            case "centerAI":
            case "baseline":
                if (ID == "flexStartAI") {
                    mainContainer.style.alignItems = "flex-start";
                } else if (ID == "flexEndAI") {
                    mainContainer.style.alignItems = "flex-end";
                } else if (ID == "centerAI") {
                    mainContainer.style.alignItems = "center";
                } else {
                    mainContainer.style.alignItems = ID;
                }
                const listado3 = ["stretch", "flexStartAI", "flexEndAI", "centerAI", "baseline"];
                result(ID, listado3);
                break;
            case "nowrap":
            case "wrap":
                mainContainer.style.flexWrap = ID;
                const listado4 = ["nowrap", "wrap"];
                result(ID, listado4);
                break;
            //case "100px":
            //case "250px":
            //case "350px":
            //    const listado6 = ["100px", "250px", "350px"];
            //    result(ID, listado6);
            //    mainContainer.children;
            //    for (i = 0; i <= count; i++) {
            //        selector5[i].style.width = ID;
            //    };
            //    break;
            case "flex-startAC":
            case "flex-endAC":
            case "centerAC":
            case "space-aroundAC":
            case "space-betweenAC":
            case "space-evenlyAC":
                if (ID == "flex-startAC") {
                    mainContainer.style.alignContent = "flex-start";
                } else if (ID == "flex-endAC") {
                    mainContainer.style.alignContent = "flex-end";
                } else if (ID == "space-aroundAC") {
                    mainContainer.style.alignContent = "space-around";
                } else if (ID == "centerAC") {
                    mainContainer.style.alignContent = "center";
                } else if (ID == "space-betweenAC") {
                    mainContainer.style.alignContent = "space-between";
                } else if (ID == "space-evenlyAC") {
                    mainContainer.style.alignContent = "space-evenly";
                }
                mainContainer.style.justifyContent = ID;
                const listado7 = ["flex-startAC", "flex-endAC", "centerAC", "space-aroundAC", "space-betweenAC", "space-evenlyAC"];
                result(ID, listado7);
                break;
            case "auto":
            case "150px":
            case "200px":
            case "300px":
                const listado9 = ["auto", "150px", "200px", "300px"];
                result(ID, listado9);
                flex_Basis(ID);
                break;
            case "stretchAS":
            case "flex-startAS":
            case "flex-endAS":
            case "centerAS":
            case "autoAS":
                let selectoras = mainContainer.lastElementChild;
                if (ID == "flex-startAS") {
                    selectoras.style.alignSelf = "flex-start";
                } else if (ID == "flex-endAS") {
                    selectoras.style.alignSelf = "flex-end";
                } else if (ID == "centerAS") {
                    selectoras.style.alignSelf = "center";
                } else if (ID == "stretchAS") {
                    selectoras.style.alignSelf = "stretch";
                } else if (ID == "baselineAS") {
                    selectoras.style.alignSelf = "baseline";
                } else if (ID == "autoAS") {
                    selectoras.style.alignSelf = "auto";
                }

                const listado10 = ["stretchAS", "flex-startAS", "flex-endAS", "centerAS", "autoAS"];
                result(ID, listado10);
                break;
            case "inline":
                createBlock();
                break;
            case "none":
                const selector2 = mainContainer.lastElementChild;
                selector2.remove();
                count = count - 1;
                break;
            //case "height100":
            //    const listado15 = ["height100"];
            //    result(ID, listado15);
            //    const selector = mainContainer.children;
            //    for (i = 0; i <= count; i++) {
            //        selector[i].style.height = "100px";
            //    }
            case "flex-grow-0":
            case "flex-grow-1":
                let selectorg = mainContainer.children;
                const listadoGrow = ["flex-grow-0", "flex-grow-1"];
                result(ID, listadoGrow);
                if (ID === 'flex-grow-0') {
                    for (i = 0; i <= count; i++) {
                        selectorg[i].style.flexGrow = "0";
                    }
                } else if (ID === 'flex-grow-1') {
                    for (i = 0; i <= count; i++) {
                        selectorg[i].style.flexGrow = "1";
                    }
                }
                break;
            case "flex-shrink-0":
            case "flex-shrink-1":
                //let selectorsh = mainContainer.children;
                let selectorsh = mainContainer.lastElementChild;
                const listadoShrink = ["flex-shrink-0", "flex-shrink-1"];
                result(ID, listadoShrink);
                if (ID === 'flex-shrink-0') {
                    //console.log(selectorsh['-1']);
                    selectorsh.style.flexShrink = "0";
                    //for (i = 0; i <= count; i++) {
                    //    selectorsh[i].style.flexShrink = "0";
                    //}
                } else if (ID === 'flex-shrink-1') {
                    //console.log(selectorsh['-1']);
                    selectorsh.style.flexShrink = "10";
                    //for (i = 0; i <= count; i++) {
                    //    selectorsh[i].style.flexShrink = "1";
                    //}
                }//
                break;
            case "order":
                let orderX = mainContainer.lastElementChild;
                orderX.style.order = '-1';



        }

    })
})


const result = function (id, lista) {//function expression
    console.log('hello');
    let position = lista.indexOf(id); //The indexOf() method searches an array for an element value and returns its position.
    lista.splice(position, 1);
    //The splice() method can be used to add new (and remove) items to an array: 
    //The first parameter (2) defines the position where new elements should be added (spliced in).
    //The second parameter (0) defines how many elements should be removed.
    //The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
    //The splice() method returns an array with the deleted items: 
    document.getElementById(id).style.background = "green";
    document.getElementById(id).style.color = "white";
    console.log(lista);
    lista.forEach(function (parameter) {
        document.getElementById(parameter).style.background = "white";
        document.getElementById(parameter).style.color = "black";
    })
}



