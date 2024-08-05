import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getPhotos } from "./services/images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Loader
  const [error, setError] = useState(null); // ErrorMessage
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false); // LoadMoreBtn
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { results, total, total_pages } = await getPhotos(query, page);
        if (page >= total_pages) {
          setVisible(false); 
          return;
        }
        setImages((prevState) => [...prevState, ...results]);
        setVisible(page < Math.ceil(total / total_pages));
      } catch (error) {
        setError(error);
        toast.error("Can't be empty!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setVisible(false);
  };

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleOpen = (urls, description) => {
    setShowModal(true);
    setModalUrl(urls.regular); 
    setModalAlt(description);
  };
  const handleClose = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster position='top-center' reverseOrder={false} />
      <ImageGallery images={images} handleOpen={handleOpen} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {visible && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? "Loading" : "Load More"}
        </LoadMoreBtn>
      )}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={handleClose}
        urls={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;