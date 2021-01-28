import { graphql } from 'gatsby';
import React from 'react'

export default function Index({ data }) {
  const tops = data.tops.nodes;
  console.log(data);

  return (
    <>
      <h1>New Horizons Fashion Catalog</h1>
      <ul>
        {tops.map(top => {
          return (
            <li key={top.id}>
              <img src={`https://acnhcdn.com/latest/ClosetIcon/${top.Filename}.png`} alt={top.Name} />
              <h2>{top.Name}</h2>
            </li>
            );
        })}
      </ul>
    </>
  );
};

export const query = graphql`
  query TopsQuery {
    tops: allTopsCsv(limit:5) {
      nodes {
        Name
        Variation
        Filename
        Source_Notes
        id
      }
    }
  }
`;
