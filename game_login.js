function AddUser(){
    player1_name=document.getElementById("Player1_Name_Input").value;
    player2_name=document.getElementById("Player2_Name_Input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="game_page.html";
    
}