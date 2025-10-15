import React from 'react';
import './Home.css';

export default function Home() {
return (
    <>
      <section id="first" data-theme="dark" className="first">
        <div className="firstcontainer">
          <h1>THE FUTURE</h1>
          <h1>MR AND MRS MCFAULL</h1>
        </div>
      </section>

      <section id="second" data-theme="light" className="second">
        <div className="secondcontainer">
          <h1>WOULD LIKE TO INVITE YOU TO</h1>
        </div>
      </section>

      <section  id="third" data-theme="dark"className="third">
        <div className="thirdcontainer">
          <h1>BOOGIE</h1>
        </div>
      </section>

    </>
  );
}