function randomsColor(){
    var colors = [
        "#FE9A22","#F22BB2","#2EC5CE","#9356F7"
    ],

    var random_color = colors[Math.floor(
        Math.random() * colors.length
    )];

    var x = document.getElementById('pick');
    x.style.color = random_color;
    console.log('random color')
    console.log(x.style.color)
}