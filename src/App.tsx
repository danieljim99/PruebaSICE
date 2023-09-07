import { useEffect, useState } from 'react';
import './App.css';

const IMG_SRC = "https://picsum.photos/200";

const App = () => {
  const [date, setDate] = useState<string>('');
  const [intervalNumber, setIntervalNumber] = useState<number>();
  const [imgSrc, setImgSrc] = useState<string>(IMG_SRC);

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setDate(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
    }, 1000);
    console.log("setting intervals");
    setIntervalNumber(setInterval(() => {
      setImgSrc(`${IMG_SRC}?${new Date().getTime()}`);
    }, 4000));
  }, []);

  const clickImageHandler = () => {
    if (!intervalNumber) {
      setIntervalNumber(setInterval(() => {
        setImgSrc(`${IMG_SRC}?${new Date().getTime()}`);
      }, 4000));
    } else {
      clearInterval(intervalNumber);
      setIntervalNumber(undefined);
    }
  };

  return (
    <body>
      {date &&
        <h3>{date}</h3>
      }
      <img id='image' src={imgSrc} onClick={() => clickImageHandler()}/>
    </body>
  );
};

export default App;
