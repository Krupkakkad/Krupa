// JavaScript to include the navbar
fetch('nav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

function calculateAge() {
  const birthday = document.getElementById('birthday').value;
  const ageSelect = document.getElementById('age');
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  // Update the age select field
  ageSelect.value = age;
}
function updateBatchTimings() {
  const gender = document.getElementById('gender').value;
  const batchSelect = document.getElementById('batch');

  // Clear existing options
  batchSelect.innerHTML = '';

  // Define batch timings for male and female
  const maleBatchTimings = [
      '6:00 AM - 7:00 AM',
      '7:00 AM - 8:00 AM',
      '8:00 AM - 9:00 AM',
      '7:00 PM - 8:00 PM',

  ];
  const femaleBatchTimings = [
      '3:00 PM - 4:00 PM',
      '6:00 PM - 7:00 PM',
      
  ];

  // Populate batch timings based on selected gender
  let batchTimings;
  if (gender === 'male') {
      batchTimings = maleBatchTimings;
  } else if (gender === 'female') {
      batchTimings = femaleBatchTimings;
  } else {
      batchTimings = [];
  }

  // Add options to the select element
  batchTimings.forEach(time => {
      const option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      batchSelect.appendChild(option);
  });
}
document.getElementById('submitButton').addEventListener('click', function() {

/*console.log("getcookie",getCookie());
if(getCookie()==document.getElementById('mobileNumber').value)
    return alert('mobile is already submitted');
*/
setCookie();
window.location.href = 'Thankyou.html';

});
            function calculateAge() {
            const birthday = document.getElementById('birthday').value;
            const ageSelect = document.getElementById('age');
            const birthDate = new Date(birthday);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            // Update the age field
            ageSelect.value = age;
        }
       /* function setCookie(){
            document.cookie ="mo="+ document.getElementById('mobileNumber').value+";";
        }
         function getCookie(){
            debugger;
             return document.cookie.split(';').find((row)=>row.startsWith("mo="))?.split("=")[1]
        }*/
       


        /*
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }
        
        
        function handleSubmit() {
            const mobileNumber = document.getElementById('mobileNumber').value;
            setCookie('mobileNumber', mobileNumber, 365);  // Set cookie to expire in 1 year
        
            // You can add code here to handle the form submission, like sending data to the server
            document.getElementById('submissionForm').submit();
        }
        
        document.getElementById('submitButton').addEventListener('click', handleSubmit);*/

        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }
        
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }
        
        function handleSubmit() {
            const mobileNumber = document.getElementById('mobileNumber').value;
            const storedMobileNumber = getCookie('mobileNumber');
        alert(storedMobileNumber);
            if (mobileNumber === storedMobileNumber) {
                alert('You are already registered with this mobile number.');
                return false; // Prevent form submission
            }
        
            setCookie('mobileNumber', mobileNumber, 365);  // Set cookie to expire in 1 year
        
            // Redirect to thankyou.html
            window.location.href = 'thankyou.html';
        
            // Prevent default form submission behavior
            return false;
        }
        
        function checkRegistration() {
            const storedMobileNumber = getCookie('mobileNumber');
            if (storedMobileNumber) {
                document.getElementById('alreadyRegistered').style.display = 'block';
                document.getElementById('registrationForm').style.display = 'none';
            }
        }
        
        document.getElementById('submitButton').addEventListener('click', handleSubmit);
        
        // Check registration status when the page loads
        window.onload = checkRegistration;
        