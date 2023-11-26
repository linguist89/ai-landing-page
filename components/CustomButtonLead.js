"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email });

      toast.success("Thanks for joining the waitlist!");

      // just remove the focus on the input
      inputRef.current.blur();
      setEmail("");
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      action="https://spsdigitaltech.us21.list-manage.com/subscribe/post?u=fa5dd95d9df20840e23e99b45&amp;id=5d2ac2a9d4&amp;f_id=000feae6f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className={`w-full max-w-xs space-y-3 ${extraStyle ? extraStyle : ""}`}
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        <div className="form-wrapper">
          <div className="email-field">
            <input
              type="email"
              name="EMAIL"
              className="input input-bordered w-full placeholder:opacity-60 mb-1"
              id="mce-EMAIL"
              placeholder="Email Address *"
              required
            />
            <span
              id="mce-EMAIL-HELPERTEXT"
              className="helper-text"
            ></span>
          </div>
          <div id="mce-responses" className="form-responses">
            <div
              className="error-response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="success-response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_fa5dd95d9df20840e23e99b45_5d2ac2a9d4"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="submit-container">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="btn btn-primary btn-block"
              value="Join Newsletter"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ButtonLead;
