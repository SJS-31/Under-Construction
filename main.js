const cardWidth = 500,
  degIncrement = 6,
  card = document.getElementById("card");

const getRotateDeg = (input) => {
  if (input < cardWidth * 0.33) {
    return `-${degIncrement * 3}deg`;
  } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
    return `-${degIncrement}deg`;
  } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
    return "0deg";
  } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
    return `${degIncrement}deg`;
  } else {
    return `${degIncrement * 3}deg`;
  }
};

const onMouseMove = (event) => {
  var element_id = event.target.id
  if(element_id != "btn"){
    const { target } = event;
    const rect = target.getBoundingClientRect();
  
    const rotateX = getRotateDeg(event.clientY - rect.top);
    const rotateY = getRotateDeg(event.clientX - rect.left);
  
    card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
  }else{
    card.style.transform = `none`;
  }

};

const onMouseLeave = () => {
  card.style.transform = `none`;
};

let btn = document.getElementById("btn");

const colors = ["#FD7F2C", "#FDB777", "#FF6200", "purple", "#FD9346"];

btn.addEventListener("mouseenter", function( event ) {
   btn.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
});

const mouseMove = (event) =>{
  card.style.transform = `none`;
}

document.getElementById("body").addEventListener("touchmove", function(){
  console.log("hila re hila")
})