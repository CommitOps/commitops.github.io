# Quiz: Python Basics

<form id="quizForm" onsubmit="return checkAnswers()">
  <h3>1. What is the output of `print(2**3)`?</h3>
  <input type="radio" name="q1" value="a"> 6<br>
  <input type="radio" name="q1" value="b"> 8<br>
  <input type="radio" name="q1" value="c"> 9<br>

  <h3>2. Which keyword is used to define a function in Python?</h3>
  <input type="radio" name="q2" value="a"> function<br>
  <input type="radio" name="q2" value="b"> def<br>
  <input type="radio" name="q2" value="c"> define<br>

  <h3>3. What data type is the result of: `len("hello")`?</h3>
  <input type="radio" name="q3" value="a"> str<br>
  <input type="radio" name="q3" value="b"> int<br>
  <input type="radio" name="q3" value="c"> list<br>

  <br>
  <input type="submit" value="Submit Quiz">
</form>

<p id="result"></p>

<script>
  function checkAnswers() {
    var correctAnswers = {
      q1: "b", // Launch AWS resources into a virtual network
      q2: "a", // 1 VPC per region by default
      q3: "c", // Lambda Function is not part of VPC components
      q4: "c", // To enable internet access to/from the VPC
      q5: "b"  // Public Subnet for public web server
    };

    var score = 0;
    var total = Object.keys(correctAnswers).length;

    for (var key in correctAnswers) {
      var radios = document.getElementsByName(key);
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value === correctAnswers[key]) {
          score++;
        }
      }
    }

    alert("You scored " + score + " out of " + total);
    return false; // Prevent form submission
  }
</script>
