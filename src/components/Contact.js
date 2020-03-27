import React from 'react'
import '../CSS/Contact.css';

export const Contact = () => {
  return (
    <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <h3>Contact Me</h3>
            <p className="lead">Leave a message below if you have any questions or comments.</p>
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput"></label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2"></label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email Address"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
               </div>
            </form>
          </div>
        </div>    
       
      </div>
  );
}
