import React, {useState} from 'react';

const Characteristics = () => {

  const characteristicsData = [
    {
      title: 'Size',
      meanings: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide',
    ],
  },
  {
    title: 'Width',
    meanings: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide',
    ],
  },
  {
    title: 'Comfort',
    meanings: [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
    ],
  },
  {
    title: 'Quality',
    meanings: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
    ],
  },
  {
    title: 'Length',
    meanings: [
    'Runs Short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    ],
  },
  {
    title: 'Fit',
    meanings: [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly long',
    'Runs long',
    ],
  },

]

const [characteristicsRatings, setCharacteristicsRatings] = useState(
  characteristicsData.map(() => null)
);

const handleCharacteristicRatingChange = (index, value) => {
  const updatedRatings = [...characteristicsRatings];
  updatedRatings[index] = value;
  setCharacteristicsRatings(updatedRatings);
  console.log(characteristicsRatings);
};

return (
  <div className="characteristics">
    <h2 className="font-bold text-lg mb-2">Characteristics</h2>
    <div className="flex flex-col space-y-4">
      {characteristicsData.map((characteristic, index) => (
        <div key={index} className="flex items-center">
          <label className="font-normal mr-2">{characteristic.title}</label>
          {Array.from({ length: 5 }, (_, rating) => rating + 1).map(
            (rating) => (
              <label
                key={rating}
                className={`flex items-center cursor-pointer mr-4 ${
                  characteristicsRatings[index] === rating
                    ? 'text-purple-600'
                    : 'text-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name={`characteristic_${index}`}
                  value={rating}
                  onChange={() =>
                    handleCharacteristicRatingChange(index, rating)
                  }
                  className="mr-1"
                />
                {characteristic.meanings[rating - 1]}
              </label>
            )
          )}
        </div>
      ))}
    </div>
  </div>
);
};



export default Characteristics;