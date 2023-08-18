import React, {useState} from 'react';
import Star from './Star.jsx';
import ImageModal from './ImageModal.jsx';
import Helpful from './Helpful.jsx';
import { AiOutlineCheck } from 'react-icons/ai';

const ReviewEntry = ({ review }) => {
  const dateObj = new Date(review.date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  const [showFullReview, setShowFullReview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleShowMore = () => {
    setShowFullReview(true);
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenImageModal(true);
  };

  return (
    <div className="relative box-border h-50 w-50 p-4 border-4 reviewTile" key={review.review_id}>
      <div className="absolute top-0 right-0 h-50 w-50 font-light">
        {review.reviewer_name},{formattedDate}
      </div>
      <Star rating={review.rating} />

      <div className="reviewSummary font-semibold">{review.summary}</div>

      <div className={`reviewBody font-normal ${showFullReview ? 'expanded' : ''}`}>
        {showFullReview ? review.body : review.body.substring(0, 250)}
        {!showFullReview && review.body.length > 250 && (
          <span className="showMore" onClick={handleShowMore}>Show more</span>
        )}
      </div>

      {review.photos && review.photos.length > 0 && (
        <div className="imageThumbnail w-1/5 flex">
          {review.photos.map((image, index) => (
            <img
            key ={index}
            src={image.url}
            onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}

      {openImageModal && (
        <ImageModal
        imageUrl={selectedImage.url}
        closeModal={() => setOpenImageModal(false)}
        />
      )}

      {review.recommend && <div className="recommendation flex"> <AiOutlineCheck className="mr-2"/>I recommend this product</div>}

      {/* Feedback Section */}

      <Helpful review={review} />

    </div>
  );
}

export default ReviewEntry;
