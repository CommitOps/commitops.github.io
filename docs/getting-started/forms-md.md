<!-- Forms.md CSS -->
<link rel="stylesheet" type="text/css" href="path/to/formsmd/dist/css/formsmd.min.css" />
<!--
Or RTL version:
<link rel="stylesheet" type="text/css" href="path/to/formsmd/dist/css/formsmd.rtl.min.css" />
-->

<!-- Forms.md JS bundle -->
<script src="path/to/formsmd/dist/js/formsmd.bundle.min.js"></script>

<!--
Use Composer in the browser:
<script src="path/to/formsmd/dist/js/composer.bundle.min.js"></script>
-->

import "formsmd/dist/css/formsmd.min.css"; // Or import formsmd.rtl.min.css in case of RTL
import { Formsmd } from "formsmd";
 
// Create template
const template = `
#! id = onboarding-form
#! post-url = /api/onboard
 
position* = ChoiceInput(
  | question = What's your position?
  | choices = Product Manager, Software Engineer, Founder, Other
)
 
::: [{$ position $}]
{% if position == "Other" %}
positionOther* = TextInput(
  | question = Other
  | labelStyle = classic
)
{% endif %}
:::
 
---
|> 50%
 
referralSource* = ChoiceInput(
  | question = How did you hear about us?
  | choices = News, Search Engine, Social Media, Recommendation
)
 
---
-> referralSource == "Recommendation"
|> 75%
 
recommender = EmailInput(
  | question = Who recommended you?
  | description = We may be able to reach out to them and provide a discount for helping us out.
)
`;
 
// Initialize with template, container, and options
const formsmd = new Formsmd(
  template,
  document.getElementById("onboarding-form-container"),
  {
    postHeaders: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
);
formsmd.init();