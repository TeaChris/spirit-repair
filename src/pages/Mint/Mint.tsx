import React from 'react';
import { RiTelegramLine, RiDiscordLine, RiTwitterLine } from 'react-icons/ri';

function Mint() {
  return (
    <div className="row spirits">
      <div className="col-sm-8">
        <div className="spirit-intro" data-aos={'zoom-in-left'}>
          spirits of
        </div>
        <div className="spirit-intro2" data-aos={'zoom-in-right'}>
          africa
        </div>
        <div className="mt-3" data-aos={'slide-up'}>
          <a
            href="https://t.me/Spiritsofafrica"
            rel="noreferrer"
            target="_blank"
          >
            <RiTelegramLine
              style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}
            />
          </a>
          <a
            href="https://discord.gg/jUPshgNuzK"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <RiDiscordLine
              style={{
                fontSize: '2.5rem',
                color: 'var(--primary-color)',
                marginLeft: '1rem',
              }}
            />
          </a>
          <a
            href="https://www.twitter.com/Spirits0fAfrica"
            rel="noreferrer"
            target="_blank"
          >
            <RiTwitterLine
              style={{
                fontSize: '2.5rem',
                color: 'var(--primary-color)',
                marginLeft: '0.3rem',
              }}
            />
          </a>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default Mint;
