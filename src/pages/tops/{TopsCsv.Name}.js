import React from 'react';
import { graphql } from 'gatsby';

export default function TopPage({ data }) {
  const top = data.top;
  const thumbnail = `https://acnhcdn.com/latest/ClosetIcon/${top.Filename}.png`;

  return (
    <article>
      <h1>{top.Name}</h1>
      {/* TODO: Change to gatsby image */}
      <img src={thumbnail} alt={top.Name} />
    </article>
  );
}

export const query = graphql`
  query($id: String) {
    top: topsCsv(id: { eq: $id }) {
      Name
      Filename
      Source_Notes
    }
  }
`;
