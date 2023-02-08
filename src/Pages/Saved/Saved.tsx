import useFeedContext from "../../Hooks/useFeedContext";
import "./Saved.css";
const Saved = () => {
  // const { fetchFeed, savePhoto } = getFeed();
  const { saved } = useFeedContext();

  // useEffect(() => {
  //   fetchFeed();
  // }, []);

  // const handleSave = (each: any) => {
  //   savePhoto(each);
  // };

  // useEffect(() => {
  //   console.log(saved);
  // }, [saved]);

  return (
    <div className="home">
      {/* <Header /> */}
      <div className="feed_contain">
        {/* <Masonry> */}
        {saved &&
          saved.map((each: any) => {
            return (
              <div className="img_contain">
                <img src={each.url} key={each.id} className="cat_card" />
                <div
                  className="save_logo"
                  // onClick={() => {
                  //   handleSave(each);
                  // }}
                >
                  unsave
                </div>
              </div>
            );
          })}
        {/* </Masonry> */}
      </div>
    </div>
  );
};
export default Saved;
