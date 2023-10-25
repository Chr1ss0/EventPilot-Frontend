import { useState } from 'react';

export default function SearchLocationMenu() {
  const [searchLocation, setSearchLocation] = useState({
    place: 'Stadt',
    state: 'Bundesland',
  });
  return (
    <section>
      <p>Location</p>
      <div>
        <div>Svg</div>
        <p>
          `${searchLocation.place}, ${searchLocation.state}`
        </p>
        <div>Arrow</div>
        <div>UserImg</div>
      </div>
    </section>
  );
}
