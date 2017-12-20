$(document).on("click", '#logIn', function(){
    $(".main").empty(); 
    $(".main").append(          
        `<h3>User Name</h3>
        <input type='text' id="user">
        <h3>Password</h3>
        <input type='text' id="password">
        <button id="submit">Submit</button>
    `);
});



$(document).on("click", '#signIn', function(){
    $(".main").empty(); 
    $(".main").append(          
        `<h3>User Name</h3>
        <input type='text' id="user">
        <h3>Password</h3>
        <input type='text' id="password">
        <h3>Retype Password</h3>
        <input type='text' id="password"> <br>
        <button id="submit">Submit</button>
    `);
});


function display(){
    $(".main").empty(); 
    $(".main").append(          
        `<h3>From:</h3>
        <input type='text' id="origin">
        <h3>Time Leaving: </h3>
        <input type='time' id="time">
        <h3>To: </h3>
        <input type='text' id="destination">
        <button id="search">Search</button>
    `);

};

$(document).on("click", '#submit', function(){
    $(".main").empty(); 
    display();
});

$(document).on("click", '#guest', function(){

    display();
})