function generateWish() {
    const name = document.getElementById("nameInput").value.trim();
    const wishMessage = document.getElementById("wishMessage");
    const birthdayImage = document.getElementById("birthdayImage");
    const birthdayMusic = document.getElementById("birthdayMusic"); // Get the audio element
  
    if (name === "") {
      wishMessage.textContent =
        "Please enter your name to receive a birthday wish!";
      birthdayImage.style.display = "none"; // Hide image if no name is entered
      birthdayMusic.pause(); // Pause the music if playing
      birthdayMusic.currentTime = 0; // Reset the music to the start
    } else {
      wishMessage.textContent = `🎈 Happy Birthday, ${name}! 🎉 
  May your day be filled with joy, love, and lots of fun! 🎂🥳`;
      birthdayImage.src = "./assets/rose.jpg"; // URL of a birthday-themed image
      birthdayImage.style.display = "block"; // Show image
      birthdayMusic.play(); // Play the birthday music
    }
  }
  