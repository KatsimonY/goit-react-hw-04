import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "../api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
    setLoading(true);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const fetchedData = await fetchImages(query.split("/")[1], page);

        setImages((prevImages) => [...prevImages, ...fetchedData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div className={css.box}>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery items={images} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      <Toaster position="bottom-right" />
    </div>
  );
};
