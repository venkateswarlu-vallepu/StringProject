
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day-1 String Methods</h1>
      <button type='button' onClick={()=>{
        console.log("charAt Method:-")
        let name = "Venkateswarlu";
        console.log("Given element is ",name);
        console.log("Index of given char is 6 = ",name.charAt(6));
        console.log("---------------------------------------------")
        let numbers = "2569826197733707952846";
        console.log("Given element is ",numbers);
        console.log("Index of given char is 10 = ",numbers.charAt(10));
        console.log("---------------------------------------------")
      }}>charAt</button>

      <button type='button' onClick={()=>{
        console.log("chaCodeAt Method:-");
        console.log("English:-");
        let movie = "Karthikeya-2";
        console.log("Given element is ",movie);
        console.log("Unicode of given index is - ",movie.charCodeAt(7));
        console.log("---------------------------------------------")
        console.log("Telugu:-");
        let movieT = "కార్తికేయ ౨";
        console.log("Given element is ",movieT);
        console.log("Unicode of given index is - ",movieT.charCodeAt(7));
        console.log("---------------------------------------------")
        console.log("Hindi:-");
        let movieH = "कार्तिकेय-2";
        console.log("Given element is ",movieH);
        console.log("Unicode of given index is - ",movieH.charCodeAt(7));
        console.log("---------------------------------------------")
       

      }}>charCodeAt</button>

      <button type='button' onClick={()=>{
        console.log("fromCharCode Method:-");
        console.log("My Name is ")
        console.log("In English")
        console.log(String.fromCharCode(86));
        console.log(String.fromCharCode(69));
        console.log(String.fromCharCode(78));
        console.log(String.fromCharCode(75));
        console.log(String.fromCharCode(65));
        console.log(String.fromCharCode(84));
        console.log(String.fromCharCode(69));
        console.log(String.fromCharCode(83));
        console.log(String.fromCharCode(72));
        console.log("---------------------------------------------")
        console.log("In Telugu")
        console.log(String.fromCharCode(3125,3142));
        console.log(String.fromCharCode(3074));
        console.log(String.fromCharCode(3093));
        console.log(String.fromCharCode(3103,3143));
        console.log(String.fromCharCode(3127,3149));
        console.log("---------------------------------------------")
      }}>fromCharCode</button>

      <button type='button' onClick={()=>{
        console.log("Concat Method:-")
        let playerName = "Ronaldo";
        let game = " is a Football Player";
        console.log("Normal elements are ","\n",playerName);
        console.log(game);
        let playerInfo = playerName.concat(game);
        console.log("After using Concat method:-")
        console.log(playerInfo);
        console.log("-------------------------------------------")
        let playerName1 = "MS Dhoni";
        let game1 = " is a Cricket Player";
        console.log("Normal elements are ","\n",playerName1);
        console.log(game1);
        let playerInfoC = playerName1.concat(game1);
        console.log("After using Concat method:-")
        console.log(playerInfoC);
        console.log("-------------------------------------------")
        let playerNameB = "Michael Jordan";
        let gameB = " is a Basketball Player";
        console.log("Normal elements are ","\n",playerNameB);
        console.log(gameB);
        let playerInfoB = playerNameB.concat(gameB);
        console.log("After using Concat method:-")
        console.log(playerInfoB);
        console.log("-------------------------------------------")
        
      }}>Concat</button>

      <button type='button' onClick={()=>{
        console.log("endsWith Method:-");
       let input = "Tirumala Tirupathi Venkateswara Swamy"
       console.log("Input is:- ","\n",input);
       let godName = input.endsWith("Swamy");
       console.log("Result is:- ")
       if(godName === true){
        console.log("Given input is a God Name");
       } else {
        console.log("Given input is a not God Name");
       }
       console.log("---------------------------------------------")
       let input2 = "Raavanasura"
       console.log("Input is:- ","\n",input2);
       let godName2 = input2.endsWith("Swamy");
       console.log("Result is:- ")
       if(godName2 === true){
        console.log("Given input is a God Name");
       } else {
        console.log("Given input is a Rakshasas Name");
       }
       console.log("---------------------------------------------")
      }}>endsWith</button>

      <button type='button' onClick={()=>{
        console.log("Includes Method:-")
        let name = "Govind";
        console.log("Given String is :-")
        console.log(name);
        let result = name.includes("9");
        if(result === true){
       console.log("There is Number in given String")
        } else {
      console.log("There is no Number in given String");
        }
        console.log("----------------------------------------------")
      }}>Includes</button>

      <button type='button' onClick={()=>{
        console.log("indexOf Method:-")
        let element = "Cristiano Ronaldo";
        console.log("Given String is");
        console.log(element);
        console.log("index of given element is  ","\n",element.indexOf("R"));
        console.log("----------------------------------------------")
      }}>indexOf</button>

<button type='button' onClick={()=>{
        console.log("lastIndexOf Method:-")
        let element = "Cristiano Ronaldo";
        console.log("Given String is");
        console.log(element);
        console.log("index of given element is  ","\n",element.lastIndexOf("o"));
        console.log("----------------------------------------------")
      }}>lastIndexOf</button>

      <button type='button' onClick={()=>{
        console.log("Length Method:-")
       let string = "Ravana is a rakshasa king of the island of Lanka, and the chief antagonist of the Hindu epic Ramayana and its adaptations.";
        console.log("length of given string is ");
        console.log(string.length);
        console.log("------------------------------------------------");
      }}>length</button>

      <button type='button' onClick={()=>{
        console.log("Repeat Method:-")
        let sentence = "Peter Piper picked a peck of pickled peppers"; 
        console.log("Given Tongue Twister is ")
        console.log(sentence);
        console.log("using Repeat Mode:-")
        console.log(sentence.repeat(20));
        console.log("-------------------------------------");
      }}>repeat</button>

      <button type='button' onClick={()=>{
        console.log("Replace Method:-")
      let villian = "Ravana is the mythical multi-headed demon-king.Raone could change into any form he wished.";
      console.log("Given sentence is:- ","\n",villian);
      console.log("After Replacement:-")
      console.log(villian.replace("Raone","Ravana"));
      console.log("---------------------------------------------");

      console.log("Using Global Replacement:-");
      let villian2 = "Ra1 is the mythical multi-headed demon-king.ra1 could change into any form he wished.";
      console.log("Given sentence is:-  ","\n",villian2);
      console.log("After Global Replacement");
      console.log(villian2.replace(/Ra1/gi,"Ravana"));
      console.log("---------------------------------------------");
      }}>replace</button>

      <button type='button' onClick={()=>{
          console.log("Search Method:-")
          let hero = "The Joker is portrayed as a criminal mastermind.Joker Introduced as a psychopath with a warped,";
          console.log("Input is ","\n",hero);
          console.log("Index of given value :-")
        console.log(hero.search("Joker"));
        console.log("--------------------------------------------");
      }}>search</button>

      <h1>Day-2 String Methods <br></br><img src='https://c.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif' alt=''></img></h1>
    </div>
  );
}

export default App;
