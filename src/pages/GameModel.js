import React from 'react';
// import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';/
import img from '../assets/devil.png';
const GameModel = () => {
  return (
    <div className="gameInner">
      <div className="gameWrapper metamonInner ">
        <h2 className="gameHeading">Breaking Down the Metamon Gaming Model</h2>
        <div className="ggmD">
          <div className="gameImg">
            <img src={img} alt="" />
          </div>
          <div className="rightRight">
            <h3 className="gameInnerContentHeading">Metamon Exploration:</h3>
            <p>
              Users can explore the levels to obtain rewards and reach higher
              levels for their Metamon. Higher levels, better attributes, and
              stronger skills make the user's Metamon more valuable.
            </p>
          </div>
        </div>
        <div className="gameContent">
          <h3 className="gameInnerContentHeading">Metamon Dispatch:</h3>
          <p style={{ margin: '10px 0 0' }}>
            Players can get rich rewards by dispatching. The longer the dispatch
            period, the better the quality of the Metamon, the more lucrative
            the rewards, such as diamonds. Using the ‘limit Metamon Dispatch’
            will also double the revenue, depending on the actual profit. Each
            dispatch line accounts for the dispatch time independently, and each
            dispatch queue has 4 hours of free dispatch time every day. You can
            increase any dispatch queue's available time on the same day by
            using the "Time aquatic" item produced by [Exploration Level].
          </p>
          <p style={{ margin: '20px 0 0' }}>
            In addition, the "limited Metamon" mechanism and sending "limited
            Metamon" can provide a certain percentage of dispatch value bonus
            for this dispatch queue. The higher the quality of the qualified
            Metamon, the greater the increase.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            Exploring level and Adventure level:
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Adventure points and exploration points both require stamina, so it
            is best to use the stamina of adventure levels in the early stages
            to level up your team, unlock new features, and then improve your
            Metamon overall with appropriate experience gains. Players upgrade
            Pikachu to unlock to multi-adventure levels. Diamonds are consumed
            at each level. The amount consumed increases with the progress of
            the level.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            Changeable Combat Strategies:
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Metamon types are divided into attack, heal, skill, and defense, and
            each Metamon can play according to its positioning characteristics,
            making the entire gaming experience a battle of wit and courage, and
            full of strategization.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            Cultivate Metamons:
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            There are more skills that players can use in the game to make you
            invincible, as well as to increase the level of Metamons, stars,
            skill levels, and more so that the Metamons can continue to grow,
            allowing players to cultivate a unique and powerful Metamon from
            scratch.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            Equipment:
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Trainer armor can be upgraded to increase stats. Armor attributes
            are given to corresponding Metamons, which is the player's goal.
            There are also different Metamonballs to catch the rarest Metamon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameModel;
