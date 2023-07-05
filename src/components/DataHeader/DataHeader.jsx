import React, { useEffect, useState } from 'react'
import { Wrapper } from './DataHeader.styles'

export default function DataHeader({ data, noTag }) {

  const [heroDate, setHeroDate] = useState("");
  const [showTag, setShowTag] = useState(true);

  function getHeroDate(item) {
    var date = item.toDate();
    var day = date.getDate();
    var month = (date.getMonth());
    var year = date.getFullYear();

    switch (month) {
      case 0:
        setHeroDate(`JAN ${day}, ${year}`);
        break;
      case 1:
        setHeroDate(`FEB ${day}, ${year}`);
        break;
      case 2:
        setHeroDate(`MAR ${day}, ${year}`);
        break;
      case 3:
        setHeroDate(`APR ${day}, ${year}`);
        break;
      case 4:
        setHeroDate(`MAY ${day}, ${year}`);
        break;
      case 5:
        setHeroDate(`JUN ${day}, ${year}`);
        break;
      case 6:
        setHeroDate(`JUL ${day}, ${year}`);
        break;
      case 7:
        setHeroDate(`AUG ${day}, ${year}`);
        break;
      case 8:
        setHeroDate(`SEP ${day}, ${year}`);
        break;
      case 9:
        setHeroDate(`OCT ${day}, ${year}`);
        break;
      case 10:
        setHeroDate(`NOV ${day}, ${year}`);
        break;
      case 11:
        setHeroDate(`DEC ${day}, ${year}`);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (data.createdAt) {
      getHeroDate(data.createdAt);
    }
    if (noTag === true) {
      setShowTag(false);
    }
  }, [data])

  return (
    <Wrapper>
      {showTag && (
        <>
          <span>{heroDate}</span>
          {data.tagsArray[0]}
        </>
      )}
      {!showTag && (
        <>
          {heroDate}
        </>
      )}
    </Wrapper>
  )
}
