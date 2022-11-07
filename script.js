const headings = ["apple", "orange", "pear", "grapes", "watermelon", "peach"];
const on_sale = ["apple", "pear", "grapes"]

const buildBoxes = () => {
    for(var heading of headings){
        document.body.innerHTML += "<section class='" + heading + "'><h1>" + heading + "</h1><p>Price Goes Here</p></section>";
        if(!on_sale.includes(heading)){
            document.querySelector("."+heading).classList.add("hide");
        }
    }
}

buildBoxes();