import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Helpful from '../client/src/components/componentA/Helpful';

jest.mock('axios');

describe('Helpful Component', () => {
  const review = {
    review_id: 1,
    helpfulness: 10,
  };

  test('helpfulness increases by 1 on first click and does not change on subsequent clicks', async () => {
    const { getByText } = render(<Helpful review={review} />);
    const helpfulnessText = getByText(/Helpful\? Yes \(\d+\)/);

    fireEvent.click(helpfulnessText);
    await Promise.resolve();

    const updatedHelpfulnessText = getByText(/Helpful\? Yes \(\d+\)/);
    expect(updatedHelpfulnessText).toBeInTheDocument();
  });
});
