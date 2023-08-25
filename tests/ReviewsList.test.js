import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import ReviewsList from '../client/src/components/componentA/ReviewsList.jsx';

jest.mock('axios'); // Mocking Axios

describe('ReviewsList', () => {
  // const mockReviews = [
  //   /* Define your mock reviews here */
  // ];

  // // Mocking axios.get implementation
  // axios.get.mockResolvedValue({ data: mockReviews });

  it('fetches reviews and displays them correctly', async () => {
    render(<ReviewsList />);

    // await waitFor(() => {
    //   // Expect the reviews to be fetched and displayed
    //   // You can use actual selectors based on your component's output
    //   // For example, if each review is wrapped in a certain class or element
    //   const reviews = screen.getAllByTestId('review-entry');
    //   expect(reviews).toHaveLength(mockReviews.length);
    // });
  });

  // it('loads more reviews when the "More Reviews" button is clicked', async () => {
  //   render(<ReviewsList />);

  //   await waitFor(() => {
  //     // Simulate clicking the "More Reviews" button
  //     const moreReviewsButton = screen.getByText('More Reviews');
  //     fireEvent.click(moreReviewsButton);

  //     // Expect the number of displayed reviews to increase
  //     const visibleReviews = screen.queryAllByTestId('review-entry');
  //     expect(visibleReviews.length).toBeGreaterThan(mockReviews.length);
  //   });
  // });

  // it('opens the modal when "Add a Review" button is clicked', async () => {
  //   render(<ReviewsList />);

  //   await waitFor(() => {
  //     // Simulate clicking the "Add a Review" button
  //     const addReviewButton = screen.getByText('Add a Review');
  //     fireEvent.click(addReviewButton);

  //     // Expect the modal to open
  //     const modal = screen.getByTestId('modal'); // Use the actual modal selector
  //     expect(modal).toBeInTheDocument();
  //   });
  // });

  // // Add more test cases as needed

});
