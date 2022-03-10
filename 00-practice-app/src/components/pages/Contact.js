import React from 'react';

export default function Contact() {
  return (
    <div class='contactForm h-100'>
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-10 col-md-8 col-lg-6">
      <h1>Contact Me</h1>
    <form>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationDefault01">First name</label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="First Name"
                    required />
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last Name" value="Last Name"
                    required />
            </div>
            <div class="col-md-4 mb-3">
                <div class="form-group">

                    <label for="verify-email">Email Address</label>
                    <div class="input-group" data-verify="email"><input id="verify-email" class="form-control"
                            name="email" required="" type="text" placeholder="Email" /></div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
</div>
</div>
</div>

  );
}
