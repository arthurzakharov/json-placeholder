import PropTypes from "prop-types";
import "./user.css";
import { useState } from "react";

export const User = (props) => {
  const { userData, isOdd } = props;
  const [seeMore, setSeeMore] = useState(false);

  // В зависимости от значения пропсы isOdd будем добалять модивикаторы к корневому тегу
  const userCn = () => {
    return isOdd ? "user user--odd" : "user user--even";
  };

  // Получить текст кнопки в зависимости от состояния seeMore
  const getBtnText = () => {
    return seeMore ? "Less" : "More";
  };

  // Заводим обработчик слушателя, который будет менять состояния seeMore
  const onBtnClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className={userCn()}>
      <div>
        <p>
          <b>Name: </b>
          {userData.name}
        </p>
        <p>
          <b>Email: </b>
          {userData.email}
        </p>
        <p>
          <b>Phone: </b>
          {userData.phone}
        </p>
        {seeMore ? (
          <div>
            <p>
              <b>Street: </b> {userData.address.street}
            </p>
            <p>
              <b>Suite: </b> {userData.address.suite}
            </p>
            <p>
              <b>City: </b> {userData.address.city}
            </p>
            <p>
              <b>Zip: </b> {userData.address.zipcode}
            </p>
          </div>
        ) : null}
        {/* Кнопка прячет доп информацию и меняет свой текст */}
        <button type="button" onClick={onBtnClick}>
          {getBtnText()}
        </button>
      </div>
    </div>
  );
};

// Вот тут мы описываем пропсы и их типб который ожидает наш компонент
User.propTypes = {
  userData: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
      street: PropTypes.string,
      suite: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    company: PropTypes.shape({
      bs: PropTypes.string,
      catchPhrase: PropTypes.string,
      name: PropTypes.string,
    }),
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  }),
  isOdd: PropTypes.bool,
};
