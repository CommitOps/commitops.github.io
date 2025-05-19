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
  const answers = {
    q1: 'b',
    q2: 'b',
    q3: 'b'
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  document.getElementById("result").innerHTML = 
    `You scored ${score} out of ${total}.`;

  return false; // prevent page reload
}
</script>
