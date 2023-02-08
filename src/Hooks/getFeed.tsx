import useFeedContext from "./useFeedContext";

const getFeed = () => {
  const { setFeed, setSaved } = useFeedContext();
  const fetchFeed = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=5")
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        console.log(res);
        setFeed(res);
      });
  };
  const savePhoto = (cat: object) => {
    setSaved((prev: any) => [...prev, cat]);
  };
  const unsavePhoto = (cat: any) => {
    setSaved((prev: any) => prev.filter((each: any) => cat.id !== each.id));
  };
  return { fetchFeed, savePhoto, unsavePhoto };
};
export default getFeed;
