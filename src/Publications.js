import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import book1 from './book1.png';
import book2 from './book2.png';
import ImageContentRow from './ImageContentRow'; // Assuming ImageContentRow.js is in the same directory

const Publications = () => {
  return (
    <div class="container">

      <div className="about-section">
        <div className="header">
          <h1>MÆ</h1>
          <p>Book and Music</p>
        </div>
      </div>

      <div className="row">
        <ImageContentRow
          rowNumber={1}
          image={book1}
          content="Welcome to the wonderful world of Nailo and Brenda!
          This story follows the journey of a shiny new nail named Nailo and a kind wooden board named Brenda. Together, they embark on a fun adventure to create something special: a cozy birdhouse!"
          link={"https://www.amazon.com/Little-Nails-Big-Journey-Ma/dp/B0CX9J1ZKV/ref=sr_1_2?crid=19Q2CJTDNYH7M&dib=eyJ2IjoiMSJ9.i2GqCUDp9Xtzr5uimAeowXa5NDUt3Zyql_xXxgvis73Plm1xDewdNl4vqgI4LC477HemC3T3ulAD3dojm6WBPK3HVYAc42xCnrTCC1bDRbbsNyviQmwP2rT_-dU_BTvE-j1ffgvV_aSEI6KJ3e_PBeqvhfcgGw3UgvyM-c2A0oIh6UCs9Cdm3PEMThH4bLnvWkuHihTADR-AYaqBbK4q85bZoOwKcl4kbKPo5HYkhaA.khJ51qSSX_6ezgentYfW1TtJQw0jaySDCOl3Y6lNkXo&dib_tag=se&keywords=little+nails+big+journey&qid=1710103465&sprefix=little+nails+big+journey%2Caps%2C159&sr=8-2"}
        />
        <ImageContentRow
          rowNumber={2}
          image={book2}
          link={"https://www.amazon.com/Little-Nails-Big-Journey-Ma/dp/B0CX9J1ZKV/ref=sr_1_2?crid=19Q2CJTDNYH7M&dib=eyJ2IjoiMSJ9.i2GqCUDp9Xtzr5uimAeowXa5NDUt3Zyql_xXxgvis73Plm1xDewdNl4vqgI4LC477HemC3T3ulAD3dojm6WBPK3HVYAc42xCnrTCC1bDRbbsNyviQmwP2rT_-dU_BTvE-j1ffgvV_aSEI6KJ3e_PBeqvhfcgGw3UgvyM-c2A0oIh6UCs9Cdm3PEMThH4bLnvWkuHihTADR-AYaqBbK4q85bZoOwKcl4kbKPo5HYkhaA.khJ51qSSX_6ezgentYfW1TtJQw0jaySDCOl3Y6lNkXo&dib_tag=se&keywords=little+nails+big+journey&qid=1710103465&sprefix=little+nails+big+journey%2Caps%2C159&sr=8-2"}
          content="As they work hand in hand (well, nail in wood!), you'll learn about friendship, overcoming challenges, and the importance of communication. You'll see how even small bumps and creaks can't break their bond, and how they learn and grow together along the way.
          
          So, open this book, snuggle up, and get ready to experience the joy of building something amazing, just like Nailo and Brenda!"
        />
      </div>
    </div>
  );
};

export default Publications;
