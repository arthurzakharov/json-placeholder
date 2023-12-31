import { useEffect, useState } from "react";
import { User } from "../user/user";
import "./app.css";

export const App = () => {
  // Вот тут место для обозначения состояния компонента или хранения данных
  // useState возвращает массив для хранения записи состояния, в котором лежат "getter" и "setter" для этой записи
  const [users, setUsers] = useState([]); // правило хорошего тона называть 2-й элемент с "set"

  // Сработает только при первом рендере, () => {} и [] два аргумента в хук
  // [] - пустой массив зависимостей готоворит о том что хук сработает только раз
  useEffect(() => {
    // Асинхронный запрос на сервер, чтобы получить список пользователей
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Вот тут наш запрос возвращает данные пользователей с которыми мы можем работать
        setUsers(data);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title">LIST OF ALL USERS</h1>
      <ul>
        {/* Мы перебираем массив и на каждый элемент массива возвращаем JSX/HTML разметку, используя map для преобразования */}
        {users.map((user, index) => {
          // При переборе массива каждый элемент должен иметь свой уникальный ключ key
          return (
            <li key={user.id}>
              {/* Передаем копмоненту User объект user целиком через props userData, которую ждет наш компонент */}
              <User userData={user} isOdd={(index + 1) % 2 !== 0} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
