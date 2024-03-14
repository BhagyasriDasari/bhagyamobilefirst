import React, { useEffect, useState } from 'react';
import "./JokesPage.css";

const JokesPage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=5')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className='jokes-heading'>Jokes</h2>
      <table className="table">
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JokesPage;