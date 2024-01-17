import "./InfoPage.css";

export const InfoPage = () => {
  return (
    <div className="info-page">
      <div className="grid-container">
        <div className="grid-item">
          <h2>Breakfast</h2>
          <p>
            Start your day with our breakfast buffet starting from 5:00 AM,
            including a juice bar and a Protein Bar for post-workout energy.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="grid-item">
          <img src="Breakfast-1.png" alt="Breakfast image" />
        </div>
        <div className="grid-item">
          <img src="Breakfast-2.png" alt="Breakfast image" />
        </div>

        <div className="grid-item">
          <img src="Gym-1.png" alt="Gym image" />
        </div>
        <div className="grid-item">
          <img src="Gym-2.png" alt="Gym image" />
        </div>

        <div className="grid-item">
          <h2>The Gym</h2>
          <p>
            Transform your fitness journey at our state-of-the-art gym, the
            newest machines, yoga area, and an open snack bar.
          </p>
          <button className="read-more-button">Read more</button>
        </div>

        <div className="grid-item">
          <h2>Co-working</h2>
          <p>
            Elevate your productivity at our cutting-edge co-working space, an
            open space combined with private meeting areas, open fireplaces, and
            much more.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="grid-item">
          <img src="Co-working.png" alt="Co-working image" />
        </div>

        <div className="grid-item">
          <img src="Spa-3.png" alt="Spa image" />
        </div>
        <div className="grid-item">
          <h2>Spa & Wellness</h2>
          <p>
            Discover tranquility at our spa and wellness area, unwind after a
            good workout, a long workday, or whenever life calls for it.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="grid-item">
          <img src="Spa-2.png" alt="Spa image" />
        </div>

        <div className="grid-item">
          <h2>After Hours</h2>
          <p>
            Join us for after-hours in our cocktail bar with DJ or live
            sessions. Open every Friday for everyone and Saturday’s for members
            only.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="grid-item">
          <div className="after-hours-images">
            <img src="After-hours-1.png" alt="After hours image" />
            {/* <div className="grid-item"></div> */}
            <img src="After-hours-2.png" alt="After hours image" />
          </div>
        </div>
      </div>
    </div>
  );
};
