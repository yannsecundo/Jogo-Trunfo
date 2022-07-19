import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      maxSumAttr,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form">
        <h1>Adicionar uma nova carta</h1>
        <form>

          <input
            type="text"
            data-testid="name-input"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />

          <br />

          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />

          <br />

          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />

          <br />

          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />

          <br />

          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <span className="point-counter">
            {maxSumAttr < 0
              ? 'máximo de pontos excede o limite'
              : `restam ${maxSumAttr} pontos`}
          </span>

          <br />

          <input
            type="text"
            data-testid="image-input"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />

          <br />

          <select
            name="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          {hasTrunfo ? (
            'Você já tem um Super Trunfo'
          ) : (
            <input
              type="checkbox"
              name="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}

          <br />

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  maxSumAttr: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
