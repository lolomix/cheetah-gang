import React from 'react';
import img from '../assets/Picture1.png';
const Metamon = () => {
  return (
    <div className="metamonWrapper">
      <div className="metamon">Metamon</div>
      <div className="metamonInner">
        <h3>Metamon Center (Gacha Center):</h3>
        <p style={{ margin: '0 0 20px' }}>
          Metamon center's Gacha System is the main way for players to obtain
          Metamon and Metamon shards. The Metamon are randomly selected, by
          consuming diamonds or props. And there are rare Metamon hidden in it,
          which can make for surprises.
        </p>
        <h3>Metamon Social Interaction: </h3>
        <p>
          The built-in gaming environment can also be used for real-time
          interaction, efficient data interaction, and processing capabilities,
          so that all users' data can be displayed in real time. Players can
          exchange ideas, Metamon, battles and experiences with other players in
          the "world" at any time, offering users an immersive experience.
        </p>
        <p style={{ margin: '15px 0' }}>How to start playing Metamon:</p>
        <p style={{ margin: '3px 0 ' }}>
          1. Players need to register an account on http://metamongo.io, then
          connect their wallets and e-mails.
        </p>
        <p style={{ margin: '0 0 24px' }}>
          2. To download the game, sign in on the official website.
        </p>
        <h3>Metamon is Poised to be a Leading Metamon Offering</h3>
        <p style={{ margin: '10px 0 20px' }}>
          Diverse game scenarios and unique gameplay have made Metamon a
          high-profile Metamon project. There are plenty of strategies and
          methods to explore, both in the PvE scenario and future PVP. Better
          strategization will not only be more fun for the player, it will lead
          to a higher return on investment. In the aspects of game quality and
          tokenomics, Metamon is one of the leading offerings in this market.
        </p>
        <p style={{ margin: '10px 0 24px' }}>
          No Jarga games will be deployed on centralized service clients like
          Amazon in the future. All Jarga games will be deployed on the JARGA
          mainnet node, a system which is completely decentralized. Technically,
          that is the biggest advantage of Jarga.
        </p>
        <h3>Journey To Metaverse</h3>
        <p className="overl">
          In the future, Jarga will access Metaverse and empower more Web 3.0
          applications. Meanwhile, Jarga will support Cross-chain bridge,
          Multi-chain wallet, NFT trading markets, and Defi assembly kits. It
          also sorts the utilities of Metaverse, helps users create
          decentralized identities, and makes it convenient for users to manage
          Token and NFT assets easily. What's more, Jarga will let users enjoy
          all kinds of encrypted applications, and build SocialDAO blocks, open
          up encrypted application communities, and decentralized governance.
          Jarga will build a highly-decentralized Metaverse platform, inspiring
          the unlimited vision of every gaming and crypto enthusiast to the
          encrypted world.
        </p>
        {/* <img src={img} alt="" className="imgss" /> */}
      </div>
    </div>
  );
};

export default Metamon;
