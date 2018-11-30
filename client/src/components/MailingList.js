import React, { Component } from "react";
import MailChimpSubscribe from "react-mailchimp-subscribe";

export default class MailingList extends Component {
  render() {
    return (
      <div>
        <form
          action="https://bkbees.us11.list-manage.com/subscribe/post"
          className="form-inline"
          method="POST"
        >
          <input type="hidden" name="u" value="8fcbc2f38386282d78fe2b798" />
          <input type="hidden" name="id" value="3f592287fa" />

          {/* LEAVE THIS STUFF ALONE */}
          <div
            class="field-shift"
            aria-label="Please leave the following three fields empty"
          >
            <label for="b_name">Name: </label>
            <input
              type="text"
              name="b_name"
              tabindex="-1"
              value=""
              placeholder="Freddie"
              id="b_name"
            />

            <label for="b_email">Email: </label>
            <input
              type="email"
              name="b_email"
              tabindex="-1"
              value=""
              placeholder="youremail@gmail.com"
              id="b_email"
            />

            <label for="b_comment">Comment: </label>
            <textarea
              name="b_comment"
              tabindex="-1"
              placeholder="Please comment"
              id="b_comment"
            />
          </div>

          <input
            type="email"
            autocapitalize="off"
            autocorrect="off"
            name="MERGE0"
            id="MERGE0"
            size="25"
            value=""
          />
          <div class="submit_container clear">
            <input
              type="submit"
              class="formEmailButton"
              name="submit"
              value="Subscribe to list"
            />
          </div>
          <input
            type="hidden"
            name="ht"
            value="6dd5595f603f3525e97ddb0e177250ce6341471c:MTU0Mjg1NTA1Mi42Mzg4"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>
    );
  }
}
