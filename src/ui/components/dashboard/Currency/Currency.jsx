import axios from 'axios';
import mob from 'ui/images/chart/mobile.webp';
import mob2 from 'ui/images/chart/mobile@2x.webp';
import tab from 'ui/images/chart/tablet.webp';
import tab2 from 'ui/images/chart/tablet@2x.webp';
import desk from 'ui/images/chart/deskop.webp';
import desk2 from 'ui/images/chart/destop@2x.webp';

import { useEffect, useState } from 'react';
import { Ball, BallEur, Graph, StyledTable, Wrap } from './Currency.styled';

export const Currency = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      const currentTime = new Date().getTime();

      const lastUpdateTime = localStorage.getItem('lastUpdate');

      const currencyData = JSON.parse(localStorage.getItem('currencyData'));

      if (
        currencyData &&
        lastUpdateTime &&
        currentTime - lastUpdateTime < 3600000
      ) {
        setCurrency(currencyData);
      } else {
        try {
          const res = await axios.get('https://api.monobank.ua/bank/currency');
          setCurrency(res.data.slice(0, 2));
          localStorage.setItem(
            'currencyData',
            JSON.stringify(res.data.slice(0, 2))
          );
          localStorage.setItem('lastUpdate', currentTime);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getCurrency();
  }, []);

  return (
    currency &&
    currency.length > 0 && (
      <Wrap>
        <StyledTable>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>{currency[0].rateBuy.toFixed(2)}</td>
              <td>{currency[0].rateSell.toFixed(2)}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{currency[1].rateBuy.toFixed(2)}</td>
              <td>{currency[1].rateSell.toFixed(2)}</td>
            </tr>
          </tbody>
        </StyledTable>
        <Graph>
          <div>
            <picture>
              <source
                srcSet={`${desk} 1x,${desk2} 2x`}
                media="(min-width:1280px)"
              />
              <source
                srcSet={`${tab} 1x,${tab2} 2x`}
                media="(min-width:768px)"
              />
              <source
                srcSet={`${mob} 1x,${mob2} 2x`}
                media="(min-width:320px)"
              />
              <img src={`${mob}`} alt="Banking App Interface" />
            </picture>
          </div>

          <Ball>{currency[0].rateBuy.toFixed(2)}</Ball>
          <BallEur>{currency[1].rateBuy.toFixed(2)}</BallEur>
        </Graph>
      </Wrap>
    )
  );
};
