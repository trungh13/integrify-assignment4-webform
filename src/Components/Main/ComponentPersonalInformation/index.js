import React, { Component } from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";
import Button from "../ComponentButton";

class ComponentPersonalInformation extends Component {
  state = {
    fullName: "",
    email: "",
    reEmail: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    hearAboutUs: "",
    isTouched:{
      fullName: false,
      email: false,
      reEmail: false,
      phone: false,
      address: false,
      city: false,
      state: false,
      country: false,
      postalCode: false,
      hearAboutUs: false,
    }
  };
  componentDidMount() {
    const {fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs}=this.props.data;
    this.setState({
      fullName: fullName,
      email: email,
      reEmail: reEmail,
      phone: phone,
      address: address,
      city: city,
      state: state,
      country: country,
      postalCode: postalCode,
      hearAboutUs: hearAboutUs
    })
  }

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  handleButton = e => {
    e.preventDefault();
    this.props.history.push("/SkillsAndLocation")
  };
  submitDataToApp = () =>{
    const {fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs,isTouched} = this.state;
    const errors=this.isValidated(fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs);
    errors.includes(false)
    this.props.handleSubmit(this.state)
  }
  handleFocus =e =>{
    this.setState({
      isTouched:{...this.state.isTouched, [e.target.name]:true}
    })
  }
  isValidated = (fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs) => {
    const errors={
      fullName: /^[a-zA-Z ]{1,}$/.test(fullName),
      email: /^\w+@\w+\.\w{2,3}$/.test(email),
      reEmail: /^\w+@\w+\.\w{2,3}$/.test(reEmail)&&reEmail===email,
      phone: /^(0[0-9]{9})$|(\+358{1}[0-9]{9})$|(00358[0-9]{9})$/.test(phone),
      address: /^[a-zA-Z1-9 ,]{1,}$/.test(address),
      city: /^[a-zA-Z1-9 ,]{1,}$/.test(city),
      state: /^[a-zA-Z1-9 ,]*$/.test(state),
      country: /^[a-zA-Z1-9 ,]{1,}$/.test(country),
      postalCode:/^$|[0-9]{5}$/.test(postalCode),
      hearAboutUs: /^[a-zA-Z1-9 ,]*$/.test(hearAboutUs)    
    }
    return errors;
  };
  isDisabledButton=(errors)=>{
    return Object.values(errors).includes(false)
  }

  render() {
    const {fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs,isTouched} = this.state;
    const errors=this.isValidated(fullName,email,reEmail,phone,address,city,state,country,postalCode,hearAboutUs);
    
    return (
      <div className={styles.ComponentPersonalInformation}>
        <div className={styles.navbar}>
        {this.props.nav}
          <Button btnName="Next" href="/SkillsAndLocation" isValidated={this.isDisabledButton(errors)} onClick={this.handleButton} />
        </div>
        <ComponentFormHeader heading="1. Personal Information" />
        <div className={styles.InformationNameEmailPhone}>
          <div className={styles.InformationNameEmail}>
            <input
              className={!isTouched.fullName||errors.fullName?'':styles.Invalid}
              type="text"
              name="fullName"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Full name*"
              value={fullName}
            />
            <input
              className={!isTouched.email||errors.email?'':styles.Invalid}
              type="text"
              name="email"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Email* "
              value={email}
            />
            <input
              className={!isTouched.reEmail||errors.reEmail?'':styles.Invalid}
              type="text"
              name="reEmail"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Re-enter email*"
              value={reEmail}
            />
          </div>
          <div className={styles.InformationPhone}>
            <input
              className={!isTouched.phone||errors.phone?'':styles.Invalid}
              type="number"
              name="phone"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Phone#*"
              value={phone}
            />
          </div>
        </div>
        <input
          className={!isTouched.address||errors.address?'':styles.Invalid}
          type="text"
          name="address"
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          placeholder="Address*"
          value={address}
        />
        <div className={styles.InformationAdress}>
          <div className={styles.InformationAdressItem}>
            <input
              className={!isTouched.city||errors.city?'':styles.Invalid}
              type="text"
              name="city"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="City*"
              value={city}
            />
          </div>
          <div className={styles.InformationAdressItem}>
            <input
              className={!isTouched.state||errors.state?'':styles.Invalid}
              type="text"
              name="state"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="State"
              value={state}
            />
          </div>
          <div className={styles.InformationAdressItem}>
            <input
              className={!isTouched.country||errors.country?'':styles.Invalid}
              type="text"
              name="country"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Country/Region*"
              value={country}
            />
          </div>
          <div className={styles.InformationAdressItem}>
            <input
              className={!isTouched.postalCode||errors.postalCode?'':styles.Invalid}
              type="number"
              name="postalCode"
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              placeholder="Zip/Postal code"
              value={postalCode}
            />
          </div>
        </div>
        <input
          className={!isTouched.hearAboutUs||errors.hearAboutUs?'':styles.Invalid}
          type="text"
          name="hearAboutUs"
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          placeholder="How did you hear about us ?"
          value={hearAboutUs}
        />
      </div>
    );
  }
}

export default (ComponentPersonalInformation);