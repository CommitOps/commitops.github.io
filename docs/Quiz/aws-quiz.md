
---
title: AWS
---

## AWS VPC

<form id="quizForm" onsubmit="return checkAnswers()">
    <h3>1. What does a VPC (Virtual Private Cloud) allow you to do in AWS?</h3>
    <input type="radio" name="q1" value="a"> Store large amounts of data<br>
    <input type="radio" name="q1" value="b"> Launch AWS resources into a virtual network<br>
    <input type="radio" name="q1" value="c"> Create dashboards for monitoring<br>
    <h3>2. What is the default number of VPCs per region per AWS account?</h3>
    <input type="radio" name="q2" value="a"> 1<br>
    <input type="radio" name="q2" value="b"> 2<br>
    <input type="radio" name="q2" value="c"> 5<br>
    <h3>3. Which of the following components is NOT part of an AWS VPC?</h3>
    <input type="radio" name="q3" value="a"> Route Table<br>
    <input type="radio" name="q3" value="b"> Subnet<br>
    <input type="radio" name="q3" value="c"> Lambda Function<br>
    <h3>4. What is the purpose of an Internet Gateway in a VPC?</h3>
    <input type="radio" name="q4" value="a"> To route traffic between subnets<br>
    <input type="radio" name="q4" value="b"> To allow communication between instances<br>
    <input type="radio" name="q4" value="c"> To enable internet access to/from the VPC<br>
    <h3>5. Which type of subnet is required to host a publicly accessible web server in AWS?</h3>
    <input type="radio" name="q5" value="a"> Private Subnet<br>
    <input type="radio" name="q5" value="b"> Public Subnet<br>
    <input type="radio" name="q5" value="c"> VPN Subnet<br>
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