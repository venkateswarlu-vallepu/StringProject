
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

      <h1>Day-2 String Methods</h1>
    
      <button
      type='button' onClick={()=>{
        console.log("Slice Method:-")
        let hero = "The Joker is portrayed as a criminal mastermind.Joker Introduced as a psychopath with a warped,";
       console.log("Input is","\n",hero);
       console.log("output of given indexes is","\n",hero.slice(3 ,9),"\n",hero.slice(28,36))

      }}>Slice</button>

     <button
      type='button' onClick={()=>{
        console.log("Split Method:-")
        let hero = "Ravana is the mythical multi-headed demon-king.Ravana could change into any form he wished.";
       console.log("Input is","\n",hero);
       console.log("output of given indexes is","\n",hero.split("R"),"\n",hero.split("m"),"\n",hero.split(" "))

      }}>Split</button>
      

      <button
      type='button' onClick={()=>{
        console.log("sub-(str&string) Method:-")
        let hero = "Ravana is the mythical multi-headed demon-king.Ravana could change into any form he wished.";
        console.log("sybstr method:-")
       console.log("Input is","\n",hero);
       console.log("output of given indexes is","\n",hero.substr(47,60))

       console.log("substring method:-")
       let hero1 = "Ravana is the mythical multi-headed demon-king.Ravana could change into any form he wished.";
       console.log("Input is ","\n",hero1)
       console.log("output of given indexes is ","\n",hero1.substring(0,46)) 
       

      }}>sub-(str&string)</button>

      <button type='button' onClick={()=>{
        console.log("Trim Method:-")
        console.log("Gaps in starting & ending of string:-")
        let villian = "                    A cruelly malicious person who is involved in or devoted to wickedness or crime;who constitutes an important evil agency in the plot.                        ";
        console.log("Given Input is ","\n",`***${villian}***`);
        console.log("Output is","\n",`***${villian.trim()}***`);

        console.log("Gaps inbetween the elements:-")
        let villian1 = "                    A       cruelly malicious person who        is involved in or devoted to wickedness or crime;who constitutes an important evil agency in the plot.                        ";
        console.log("Given Input is ","\n",`***${villian1}***`);
        console.log("Output is","\n",`***${villian1.trim()}***`);
      }}>trim</button>

      <button type='button' onClick={()=>{
        console.log("toUpperCase:-");
        let TTD = "Tirumala Tirupati Devasthanams (TTD) is an independent trust which manages the temples including the Tirumala Venkateswara Temple in Andhra Pradesh.";
        console.log("Before Using Method:-")
        console.log(TTD);
        console.log("After Using Method:-","\n",TTD.toUpperCase());

      }}>toUpperCase</button>
      
      <button type='button' onClick={()=>{
        console.log("toLowerCase:-");
        let TTD = "Tirumala Tirupati Devasthanams (TTD) is an independent trust which manages the temples including the Tirumala Venkateswara Temple in Andhra Pradesh.";
        console.log("Before Using Method:-")
        console.log(TTD);
        console.log("After Using Method:-","\n",TTD.toLowerCase());

      }}>toLowerCase</button>

      <h1>Other Topics</h1>
      <h2>Destructuring of Array & Object <br></br>Rest Parameters</h2>

      <button type='button' onClick={()=>{
        console.log("Destructuring of Array:-")
        let array = ["Nikhil","Anupama","Srinivas Reddy","Harsha"];
        console.log("Normal array ","\n",array);
        let [hero,heroine,comedian1,comedian2] = array;
        console.log("After Destructuring:-");
        console.log(hero,"\n",heroine,"\n",comedian1,"\n",comedian2);
        

      }}>Array Destructuring</button>

      <button type='button' onClick={()=>{
        console.log("Destructuring of Object:-")
        let object = {
          name: "Nikhil",
          age : "37",
          Prof : "Actor",
          maritalStatus : "Married",
          totalMovies : "17",
          hits: "10",
          flops: "7"
        }
        let heroName = object.name;
        let heroAge = object.age;
        let heroProf = object.Prof;
        let heroMS = object.maritalStatus;
        let movies = object.totalMovies;
        let hitMovies = object.hits;
        let flopMovies = object.flops; 
        console.log("Hero Name:- ","\n",heroName);
        console.log("Hero Age:- ","\n",heroAge);
        console.log("Hero Profession:- ","\n",heroProf);
        console.log("Hero Marital Status:- ","\n",heroMS);
        console.log("Total Movies:- ","\n",movies);
        console.log("Hits:- ","\n",hitMovies);
        console.log("Flops:- ","\n",flopMovies);
      }}>Object Destructuring</button>
      
      <button type='button' onClick={()=>{
       console.log("Rest Parameters(RP)")  
        let   RP = (...rp)=>{
          let value = "";
          value = rp;
          console.log(value);
      
        } 
        RP(43,54,32,"venkatesh",74,738,936);
        console.log(RP);
       
      }}>Rest Parameters</button>
    </div>
  );
}

export default App;
