import React, { Component } from 'react';
import CreatedGame from '../CreatedGame/CreatedGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreatedGames.css';

class CreatedGames extends Component {
    render() {
        const { gameList } = this.props;

        return (
            <div className='CreatedGames'>
                {
                    gameList.map(game =>
                        <CreatedGame
                            key={`game-${game.id}`}
                            game={game}
                        />
                    )
                }
            </div>
        )
    }
}

export default CreatedGames;