require('dotenv').config();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Review Schema
const ReviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    username: String,
    review: String,
    rating: { type: Number, min: 0, max: 5 }
  });

  const Review = mongoose.model('Review', ReviewSchema)

  // const reviews = [
  //   {
  //       movieId: "65ea1bd533b2c42e7513b818",
  //       username: "critic123",
  //       review: "A stunning masterpiece that captures the essence of its era with impeccable direction and an unforgettable soundtrack.",
  //       rating: 5
  //   }
// ]

// reviews.forEach(reviewData => {
//     const review = new Review(reviewData);
//     review.save()
//       .then(() => console.log(`Saved review for movie with ID ${review.movieId}`))
//       .catch(err => console.error('Error saving review:', err));
//   });

// return the model
module.exports = mongoose.model('Review', ReviewSchema);