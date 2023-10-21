import React from "react";
import "./profileop.css";

const ProfileOp = () => {
  return (
    <div className="profileop">
      <div className="input-profile">
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="profilename">Profile Name</label>
            <input id="profilename" name="profilename" type="text" placeholder="Olivia Stephen" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" name="firstname" type="text" placeholder="Olivia" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" name="lastname" type="text" placeholder="Stephen" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="olivia321@gmail.com" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="phonenumber">Phone Number</label>
            <input id="phonenumber" name="phonenumber" type="number" placeholder="+1 687 259 259" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" required />
          </form>
        </div>
        <div className="profile-name">
          <form action="/submit">
            <label htmlFor="birthdate">Date of Birth</label>
            <input id="birthdate" name="birthdate" type="date" placeholder="1 Oct 1985" required />
          </form>
        </div>
      </div>
      <div className="profileop-btn">
        <button>Update</button>
      </div>
    </div>
  );
};

export default ProfileOp;
