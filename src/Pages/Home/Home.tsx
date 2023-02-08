import { useEffect } from "react";
import Masonry from "react-masonry-component";
import Header from "../../Components/Header/Header";
import getFeed from "../../Hooks/getFeed";
import useFeedContext from "../../Hooks/useFeedContext";
import "./Home.css";

const Home = () => {
  const { fetchFeed, savePhoto } = getFeed();
  const { feed, saved } = useFeedContext();

  useEffect(() => {
    fetchFeed();
  }, []);

  const handleSave = (each: any) => {
    savePhoto(each);
  };

  useEffect(() => {
    console.log(saved);
  }, [saved]);

  return (
    <div className="home">
      <Header />
      <div className="feed_contain">
        {/* <Masonry> */}
        {feed &&
          feed.map((each: any) => {
            return (
              <div className="img_contain">
                <img src={each.url} key={each.id} className="cat_card" />
                <div
                  className="save_logo"
                  onClick={() => {
                    handleSave(each);
                  }}
                >
                  save
                </div>
              </div>
            );
          })}
        {/* </Masonry> */}
      </div>
    </div>
  );
};
export default Home;
