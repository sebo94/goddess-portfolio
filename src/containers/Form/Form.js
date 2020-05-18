import React, { Component } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classes from "./Form.module.css";
import { createFormElement } from "../../utility";
import emailjs from "emailjs-com";

class Form extends Component {
  state = {
    form: {
      name: createFormElement("input", "text", "Your Name", "", {
        required: true,
        maxLength: 64,
      }),
      email: createFormElement("input", "email", "Your E-Mail", "", {
        required: true,
        isEmail: true,
        maxLength: 254,
      }),
      subject: createFormElement("input", "text", "Subject", "", {
        required: true,
        maxLength: 254,
      }),
      message: createFormElement("textarea", "textarea", "Your Message", "", {
        required: true,
        maxLength: 5000,
      }),
    },
    formIsValid: false,
    error: false,
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    const updatedForm = { ...this.state.form };
    const updatedFormElement = { ...updatedForm[inputId] };
    // No need to clone the element config because we are only modifying the value
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputId] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const templateParams = { to_name: "Sebastian" };
    for (let formElementId in this.state.form) {
      templateParams[formElementId] = this.state.form[formElementId].value;
    }

    console.log(process.env.REACT_APP_EMAILJS_USER_ID);

    // emailjs
    //   .send(
    //     "gmail",
    //     "template_6of93GCP",
    //     templateParams,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     (err) => {
    //       // We are just console loggin for now
    //       console.log("FAILED...", err);
    //     }
    //   );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key],
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elType={formElement.config.elType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            label={formElement.id}
          />
        ))}
        <Button animation={{}} disabled={!this.state.formIsValid}>
          SEND
        </Button>
      </form>
    );

    return <div className={classes.Form}>{form}</div>;
  }
}

export default Form;
