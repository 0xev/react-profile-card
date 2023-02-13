import Svg from "./Svg";
import profilePic from "./images/image-victor.jpg";
function App() {
  return (
    <div>
      <section className="card">
        <section className="card-image">
          <Svg/>
        </section>
        <section className="text1">
          <img
            src={profilePic}
            alt="afroamerican man wearing sherpa jean jacket"
          />
          <section className="flex-container1">
            <p className="name">Victor Crest</p>
            <p className="age">26</p>
          </section>
          <p>London</p>
        </section>
        <hr />
        <section className="text2">
          <ul>
            <li>
              <h2>80K</h2>
              <p className="stats">Followers</p>
            </li>
            <li>
              <h2>803K</h2>
              <p className="stats">Likes</p>
            </li>
            <li>
              <h2>1.4K</h2>
              <p className="stats">Photos</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
