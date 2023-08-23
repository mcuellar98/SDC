import React from 'react';
import { render } from '@testing-library/react';
import Star,  { QuarterStars }from '../client/src/components/componentA/Star.jsx';

// Mock the SVG images
jest.mock('../resources/outlineStar.svg', () => '');
jest.mock('../resources/star-one-quarter.svg', () => '');
jest.mock('../resources/star-half.svg', () => '');
jest.mock('../resources/star-three-quarter.svg', () => '');
jest.mock('../resources/fullStar.svg', () => '');

describe('Star Component', () => {
  test('renders correct number of stars', () => {
    const rating = 3.75;
    const { container } = render(<Star rating={rating} />);
    const starContainers = container.querySelectorAll('.single-star-container');

    // expecting 5 star containers based on function
    expect(starContainers.length).toBe(5);
  });

  test('renders correct stars array', () => {
    const rating = 3.8;
    const expectedStarsArray = [1, 1, 1, 0.75, 0];
    const starsArray = QuarterStars(rating);

    expect(starsArray).toEqual(expectedStarsArray);
  });

  test('renders correct star images for different ratings', () => {
    const rating = 2.5;
    const { container } = render(<Star rating={rating} />);

    // Verify that the correct star images are displayed based on the rating
    const starImages = container.querySelectorAll('.single-star-outline');
    expect(starImages.length).toBe(5);
    expect(starImages[0].alt).toContain('fullStar alt');
    expect(starImages[1].alt).toContain('fullStar alt');
    expect(starImages[2].alt).toContain('starHalf alt');
    expect(starImages[3].alt).toContain('outlineStar alt');
    expect(starImages[4].alt).toContain('outlineStar alt');
  });



});
