const message = ['You will meet a new friend soon', 'Be patient with your loved ones', 'Donate to a good cause', 'Be confident in your skills', 'You will have good luck', 'Money will come into your possession', 'Try something new', 'Do not spend all your money this month!', 'Beware of the colour Red!', 'Tell a loved one you love them', 'A loyal companion will give you good advice', 'Your current goals are about to be obtained'];
const zodiac = ['Aquarius: 20th January - 18th February','Pieces: 19th February  - 20th March','Aries: 21st March - 19th April','Taurus: 20th April - 20th May','Gemini: 21st May - 20th June', 'Cancer: 21st June - 22nd July','Leo: 23rd July - 22nd August','Virgo: 23rd August - 22nd September','Libra: 23rd September - 22nd October','Scorpio: 23rd October - 21st November','Sagittarius: 22nd November - 21st December', 'Capricorn: 22nd December - 19th January' ];
const horoscope = [];


function pictureChange() {
  let imageNum = Math.floor(Math.random() * 12);
  let messageNum = Math.floor(Math.random() * 12)
  if(imageNum === 0) {
      document.getElementById('theImage').src="./images/aquarius_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[0];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 1) {
      document.getElementById('theImage').src="./images/pisces_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[1];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 2) {
      document.getElementById('theImage').src="./images/aries_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[2];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 3) {
      document.getElementById('theImage').src="./images/taurus_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[3];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
      
  } else if (imageNum === 4) {
      document.getElementById('theImage').src="./images/gemini_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[4];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 5) {
      document.getElementById('theImage').src="./images/cancer_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[5];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 6) {
      document.getElementById('theImage').src="./images/leo_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[6];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 7) {
      document.getElementById('theImage').src="./images/virgo_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[7];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 8) {
      document.getElementById('theImage').src="./images/libra_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[8];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 9) {
      document.getElementById('theImage').src="./images/scorpio_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[9];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 10) {
      document.getElementById('theImage').src="./images/sagittarius_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[10];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else if (imageNum === 11) {
      document.getElementById('theImage').src="./images/capricorn_gold.png";
      document.getElementById("horoZodiac").innerHTML = zodiac[11];
      document.getElementById("horoSecret").innerHTML = message[messageNum];
  } else {
      return document.getElementById('theImage').src="./images/Zodiac_Circle_Transparent_PNG_Clip_Art_Image.png";
  }
}




