import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useValidation";
import CurrentUserContext from "../../context/CurrentUserContext";
import { mainApi } from "../../utils/Api/MainApi";

function Profile({ handleSignOut, handleEditProfile, editProfileMessage }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    setValues,
    errors,
    handleChange,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(values.name, values.email);
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  const userDataUpdate =
    isValid &&
    !(currentUser.name === values.name && currentUser.email === values.email);

  const profileEditFormButtonClassName = userDataUpdate
    ? "profile__edit-form-button"
    : "profile__edit-form-button profile__edit-form-button_disabled";

  return (
    <div className="profile">
      <section className="profile__title">
        <h1 className="profile__title-text">{`Привет, ${
          currentUser.name || ""
        }!`}</h1>
      </section>
      <section className="profile__edit">
        <form
          className="profile__edit-form"
          noValidate={true}
          onSubmit={handleSubmit}
        >
          <div className="profile__edit-form-inputs-container">
            <div className="profile__edit-form-line">
              <fieldset className="profile__edit-form-fieldset">
                <label className="profile__edit-form-label" htmlFor="name">
                  Имя
                </label>
                <input
                  className="profile__edit-form-input"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Имя"
                  value={values.name || ""}
                  onChange={handleChange}
                  pattern="^[A-zА-яё\s\-]{2,30}$"
                ></input>
              </fieldset>
              <span className="profile__edit-form-error-massage">
                {errors.name}
              </span>
            </div>
            <div className="profile__edit-form-line">
              <fieldset className="profile__edit-form-fieldset">
                <label className="profile__edit-form-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="profile__edit-form-input"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail"
                  value={values.email || ""}
                  onChange={handleChange}
                  pattern="\w+@\w+\.\w+"
                ></input>
              </fieldset>
              <span className="profile__edit-form-error-massage">
                {errors.email}
              </span>
            </div>
          </div>
          <div className="profile__basement">
            <span className="profile-message">{editProfileMessage}</span>
            <button
              type="submit"
              className={profileEditFormButtonClassName}
              disabled={!userDataUpdate}
            >
              Редактировать
            </button>
          </div>
        </form>
      </section>
      <section className="profile__exit">
        <button className="profile__exit-button" onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </section>
    </div>
  );
}

export default Profile;
