import PropTypes from "prop-types";
import "./user.css";

export const User = (props) => {
  const { userData, isOdd } = props;

  // В зависимости от значения пропсы isOdd будем добалять модивикаторы к корневому тегу
  const userCn = () => {
    return isOdd ? "user user--odd" : "user user--even";
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
