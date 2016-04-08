import chai from 'chai';
import cheerio from 'cheerio';
import Title from './Title';
import React from 'react';
import ReactDOMServer from 'react/lib/ReactDOMServer';

chai.should();

describe('Title Page Component', () => {
  describe('title', () => {
    it('should be called \'Let\'s Play French Toast\'', () => {//arrange
      const sut = React.createElement(Title);

      //act
      const html = ReactDOMServer.renderToStaticMarkup(sut);
      const $ = cheerio.load(html);
      let header = $('h1').html();

      //assert
      header.should.equal('Let&apos;s Play French Toast!');
    });
  });
});
