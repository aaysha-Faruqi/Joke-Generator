const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');

jokeButton.addEventListener('click', clickHandler);

var p=document.querySelector("div>p");
function confetti() {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, 2 * Math.PI);
    ctx.fill();
    const confetti = new Confetti(canvas);
    confetti.add(ctx.getImageData());
    document.body.appendChild(canvas);
  }

  // JavaScript code
let currentColor = '#FFFFFF'; // Start with a white background

function changeBackgroundColor() {
  const colors = ['#F7CED7FF', '#F99FC9FF', '#F1F3FFFF', '#DBBEA1FF', '#A37B73FF', '#3E282BFF', '#D34F73FF', '#9F6B99FF', '#4F3466FF', '#301728FF']; // Add more colors as needed
  let index = 0;

  setInterval(() => {
    currentColor = colors[index];
    document.body.style.backgroundColor = currentColor;
    index = (index + 1) % colors.length;
  }, 1000); // Change color every 1 second
}

// Call the function to start changing the background color
changeBackgroundColor();
function clickHandler(){

    let joke="";

    const xhr=new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-API-Key', 'aR/8X77Dxn93Q8iiWl4sCw==YI5MScDtDQUvTL4O');
    xhr.send();
    jokeButton.innerText="Fetching joke..";
    xhr.onload=function(){
        if(xhr.status===200){
            const result=JSON.parse(xhr.responseText);
            joke=result[0].joke;
            console.log(joke);

            p.innerText=joke;
            jokeButton.innerText="Tell me a joke";
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
             
             
                    emojis: ['😊',], // Use the smiley emoji here
                    emojiSize: 50, // Set the size of the smiley emoji
                    emojiColor: '#FFD700', // Set the color of the smiley emoji to yellow
                    duration: 8000, // Set the duration to 5 seconds
                    max: 200, // Set the maximum number of emojis
                    zIndex: 100, // Set the z-index
                    emojiRotation: 360, // Allow the emojis to rotate
                    emojiTwist: true, // Allow the emojis to twist
                    emojiVelocity: 0, // Set the velocity of the emojis
                    emojiAcceleration: 0, // Set the acceleration of the emojis
                    position: { x: window.innerWidth / 2, y: window.innerHeight }, 



        
            });



        };
    }
}