import "./Profile.css";

function Profile(props) {
  const inputsDisabled = true;
  const errorMessage = "Что-то пошло не так";

  return (
    <div className="profile">
      <section className="profile__title">
        <h1 className="profile__title-text">Привет, Виталий!</h1>
      </section>
      <section className="profile__edit">
        <form className="profile__edit-form">
          <div className="profile__edit-form-inputs-container">
            <fieldset className="profile__edit-form-fieldset">
              <label className="profile__edit-form-label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__edit-form-input"
                type="text"
                name="name"
                id="name"
                required={true}
                disabled={inputsDisabled}
                placeholder="Имя"
                value="Анна"
              ></input>
            </fieldset>
            <span className="profile__edit-form-error-massage">
              {errorMessage}
            </span>
            <fieldset className="profile__edit-form-fieldset">
              <label className="profile__edit-form-label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile__edit-form-input"
                type="email"
                name="email"
                id="email"
                required={true}
                disabled={inputsDisabled}
                placeholder="E-mail"
                value="pochta@yandex.ru"
              ></input>
            </fieldset>
            <span className="profile__edit-form-error-massage">
              {errorMessage}
            </span>
          </div>
          <button type="submit" className="profile__edit-form-button">
            Редактировать
          </button>
        </form>
      </section>
      <section className="profile__exit">
        <button className="profile__exit-button">Выйти из аккаунта</button>
      </section>
    </div>
  );
}

export default Profile;
