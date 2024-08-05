import "../css/home.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="contact-section">
        <section>
          <h2>THE MAGE</h2>
        </section>
        <section>
          <h3>ADDRESS</h3>
          <p>
            The Hidden Leaf Village, <br /> 1234, Konoha
          </p>
        </section>
        <section>
          <h3>OPENING HOURS</h3>
          <p>
            Monday - Thursday 11am - 11pm, <br />
            Friday & Sunday 12noon - 11pm
          </p>
        </section>
        <section>
          <h3>CONTACT US</h3>
          <p>
            +353 1 962 9514, <br /> dummy@theMage.com
          </p>
        </section>
      </div>

      <section className="footer-section">
      <h3>MAGE 2024@</h3>
      <h4>A non-profit project, created as part of training. Design by Joshua Del Rosario</h4>
      </section>
    </footer>
  );
}
