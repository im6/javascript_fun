import { render } from '@testing-library/react';
import GitBox from '.';

describe('render properly', () => {
  test('render correct', () => {
    const name = 'cnn';
    const { getAllByText } = render(
      <GitBox
        url="//www.cnn.com"
        name={name}
        img="news"
        imgSrc="news"
        star={123}
      />
    );
    expect(getAllByText(name)).toHaveLength(1);
  });
});
